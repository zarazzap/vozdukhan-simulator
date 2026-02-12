import "dotenv/config";
import cors from "cors";
import express from "express";
import { IGORYAN_FIXED_REPLY, personaPrompts } from "./personas.js";

const app = express();
const port = Number(process.env.PORT || 8787);

const provider = (process.env.LLM_PROVIDER || "openai").toLowerCase();
const openaiApiKey = process.env.OPENAI_API_KEY || "";
const openaiModel = process.env.OPENAI_MODEL || "gpt-4o-mini";
const ollamaBaseUrl = (process.env.OLLAMA_BASE_URL || "http://127.0.0.1:11434").replace(
  /\/+$/,
  ""
);
const ollamaModel = process.env.OLLAMA_MODEL || "llama3.1:8b";
const temperature = Number(process.env.TEMPERATURE || 0.8);
const maxTokens = Number(process.env.MAX_TOKENS || 320);

app.use(
  cors({
    origin(origin, callback) {
      const allowed = (process.env.ALLOWED_ORIGINS || "")
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean);

      if (!origin || allowed.length === 0 || allowed.includes(origin)) {
        callback(null, true);
        return;
      }
      callback(new Error("Origin not allowed by CORS"));
    },
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    provider,
    model: provider === "ollama" ? ollamaModel : openaiModel,
  });
});

app.post("/chat", async (req, res) => {
  try {
    const { character, message, history } = req.body || {};

    if (!character || !personaPrompts[character]) {
      res.status(400).json({ error: "Invalid character" });
      return;
    }

    if (typeof message !== "string" || !message.trim()) {
      res.status(400).json({ error: "Message is required" });
      return;
    }

    if (character === "igoryan") {
      res.json({ reply: IGORYAN_FIXED_REPLY });
      return;
    }

    const normalizedHistory = normalizeHistory(history);
    const messages = [
      { role: "system", content: personaPrompts[character].trim() },
      ...normalizedHistory,
      { role: "user", content: message.trim() },
    ];

    const reply =
      provider === "ollama"
        ? await chatWithOllama(messages)
        : await chatWithOpenAI(messages);

    res.json({ reply });
  } catch (error) {
    res.status(500).json({ error: error.message || "Server error" });
  }
});

app.listen(port, () => {
  console.log(`VOZDUKHAN backend running on http://localhost:${port}`);
});

function normalizeHistory(history) {
  if (!Array.isArray(history)) return [];

  return history
    .filter((msg) => msg && (msg.role === "user" || msg.role === "assistant"))
    .map((msg) => ({
      role: msg.role,
      content: String(msg.content || "").trim(),
    }))
    .filter((msg) => msg.content.length > 0)
    .slice(-12);
}

async function chatWithOpenAI(messages) {
  if (!openaiApiKey) {
    throw new Error("OPENAI_API_KEY is missing");
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openaiApiKey}`,
    },
    body: JSON.stringify({
      model: openaiModel,
      messages,
      temperature,
      max_tokens: maxTokens,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`OpenAI error ${response.status}: ${details.slice(0, 220)}`);
  }

  const data = await response.json();
  const text = data?.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error("OpenAI returned empty text");
  return text;
}

async function chatWithOllama(messages) {
  const response = await fetch(`${ollamaBaseUrl}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: ollamaModel,
      messages,
      stream: false,
      options: {
        temperature,
      },
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Ollama error ${response.status}: ${details.slice(0, 220)}`);
  }

  const data = await response.json();
  const text = data?.message?.content?.trim();
  if (!text) throw new Error("Ollama returned empty text");
  return text;
}
