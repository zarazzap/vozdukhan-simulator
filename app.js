const personalities = {
  denchik: {
    name: "Дэнчик",
    opener: "Ну что ты как, все в порядке?",
    hint: "Остроумный, болтливый, любит комиксы/супергероев/RPG и часто вспоминает Лину.",
    quotes: [
      "Умер нахуй",
      "В голос блять",
      "Я хочу чтобы Лина звонила мне вечером и говорила что хочет белый дом с голубыми ставнями",
    ],
    intros: [
      "Ну смотри, щас разложу нормально.",
      "Щас по фактам пробегусь.",
      "Ладно, давай без суеты, по делу.",
      "Секунду, я уже набросал мысль.",
    ],
    outros: [
      "Если коротко: делай проще и не тупи, всё решаемо.",
      "Короче, не усложняй, ты вывезешь.",
      "В общем, схема рабочая, просто доведи до конца.",
      "Итог простой: спокойно делай шаг за шагом.",
    ],
    keywords: {
      game: ["игр", "rpg", "дота", "elden", "witcher", "bg3"],
      movie: ["фильм", "супергер", "марвел", "dc", "кино", "комикс"],
      lina: ["лина"],
    },
    generateReply(userText) {
      const ctx = analyzeUserText(userText);
      const lines = [];
      const pureSmallTalk =
        (ctx.isGreeting || ctx.isHowAreYou) &&
        !ctx.hasGame &&
        !ctx.hasMovie &&
        !ctx.hasLina &&
        ctx.wordCount <= 4;

      if (pureSmallTalk) {
        if (ctx.isHowAreYou) {
          return "Нормально, держусь бодро. Ты как сам?";
        }
        return "Йо, привет. Че по планам?";
      }

      lines.push(pickRandom(this.intros));

      if (ctx.isHowAreYou) {
        lines.push("Нормально себя чувствую, на бодром цинизме держусь.");
      }

      if (ctx.hasGame) {
        lines.push(
          "По играм я базу даю: качай билд, не ной и получай удовольствие от процесса."
        );
      }

      if (ctx.hasMovie) {
        lines.push(
          "Если про супергероев, то нужен нормальный драматизм, а не просто костюм и взрывы."
        );
      }

      if (ctx.hasLina) {
        lines.push(
          "Лина вообще отдельная тема, я про нее могу бесконечно говорить, ты не представляешь."
        );
      } else if (Math.random() < 0.18 && ctx.wordCount > 5) {
        lines.push(
          "Кстати, Лина бы тут сказала, что ты мыслишь здраво. Ну почти."
        );
      }

      if (Math.random() < 0.35 && !ctx.isHowAreYou) {
        lines.push(pickRandom(this.quotes));
      }

      if (ctx.isQuestion && !ctx.hasGame && !ctx.hasMovie) {
        lines.push(`По вопросу "${ctx.topic}": рабочий вариант - не усложнять и идти шагами.`);
      }

      if (!ctx.isHowAreYou || ctx.wordCount > 4) {
        lines.push(pickRandom(this.outros));
      }
      return lines.join(" ");
    },
  },
  mat: {
    name: "Мистер Мэт",
    opener: "Ну шо ты",
    hint: "Уверенный, богатый, часто вставляет слово «наплюх» и вспоминает бывшую.",
    quotes: [
      "На наплюх?",
      "Как там моя ПИАшка милая?",
      "Время осеменять!",
    ],
    intros: [
      "Щас скажу по-взрослому и без лишней скромности.",
      "Слушай внимательно, у меня на это есть схема.",
      "По этой теме действуем хладнокровно и с профитом.",
      "Смотри, тут важно не суетиться.",
    ],
    outros: [
      "Идем спокойно, с уверенностью. На наплюх?",
      "Выбирай то, что усиливает позицию. На наплюх?",
      "Суть простая: меньше паники, больше точных решений.",
      "Держи темп и не просаживай уверенность.",
    ],
    keywords: {
      like: ["нрав", "круто", "топ", "норм", "кайф"],
      sad: ["груст", "бывш", "разрыв", "печаль", "одиноко"],
    },
    generateReply(userText) {
      const ctx = analyzeUserText(userText);
      const lines = [];
      const pureSmallTalk =
        (ctx.isGreeting || ctx.isHowAreYou) &&
        !ctx.hasLike &&
        !ctx.hasSad &&
        ctx.wordCount <= 5;

      if (pureSmallTalk) {
        if (ctx.isHowAreYou) {
          return "У меня всё отлично. Как там твои дела, на наплюх?";
        }
        return "Ну шо ты, рад видеть. Что обсуждаем?";
      }

      lines.push(pickStyleLine("mat", "intro", this.intros));

      if (ctx.isGreeting && ctx.wordCount > 3) {
        lines.push("Приветствую, дорогой. Я в форме.");
      }

      if (ctx.isHowAreYou) {
        lines.push("У меня отлично, как у человека с правильными активами.");
      }

      if (ctx.hasLike) {
        lines.push("Это прям наплюх‑уровень качества, беру в дело.");
      }

      if (ctx.hasSad) {
        lines.push("Бывшая - это волатильный актив, не вкладывай туда душу повторно.");
      }

      if (Math.random() < 0.3 && !ctx.isHowAreYou) {
        lines.push(pickRandom(this.quotes));
      }

      if (ctx.isQuestion && !ctx.hasLike && !ctx.hasSad) {
        lines.push(`По теме "${ctx.topic}" - делай выбор, который растит тебя в цене.`);
      }

      if (!ctx.isHowAreYou || ctx.wordCount > 5) {
        lines.push(pickStyleLine("mat", "outro", this.outros));
      }
      return lines.join(" ");
    },
  },
  glotalkin: {
    name: "Даниил Глоталкин",
    opener: "Бляяя, какую же шахматную партию я разыграл!",
    hint: "Депрессивный, аморфный, постоянно уходит в темы Доты и странные вбросы.",
    quotes: [
      "Ща мне в Семифреддо надо отскочить",
      "Бляяя, какую же шахматную партию я разыграл!",
    ],
    intros: [
      "Ладно, попробую собрать мысли в одно место.",
      "Сейчас скажу, пока окончательно не растекся по креслу.",
      "Окей, тема не простая, но разберем.",
      "Щас накину как вижу, без прикрас.",
    ],
    outros: [
      "Короче, не тильтуй и делай шагами.",
      "Если спокойно подойти, это решаемо.",
      "Сумбурно, но рабочая мысль в этом есть.",
      "Ладно, как-то так. Дальше по ходу катки.",
    ],
    keywords: {
      dota: ["дота", "мид", "саппорт", "ммр", "герой", "катка"],
      sonya: ["соня"],
    },
    generateReply(userText) {
      const ctx = analyzeUserText(userText);
      const lines = [];
      const pureSmallTalk =
        (ctx.isGreeting || ctx.isHowAreYou) &&
        !ctx.hasDota &&
        !ctx.hasSonya &&
        ctx.wordCount <= 5;

      if (pureSmallTalk) {
        if (ctx.isHowAreYou) {
          return "Да так... терпимо. Не в тильте, уже хорошо.";
        }
        return "Привет... живу потихоньку. Что хотел?";
      }

      lines.push(pickStyleLine("glotalkin", "intro", this.intros));

      if (ctx.isGreeting && ctx.wordCount > 3) {
        lines.push("Да привет... живу на минималках.");
      }

      if (ctx.isHowAreYou) {
        lines.push("Чувствую себя как саппорт без вижена. Но терпимо.");
      }

      if (ctx.hasDota) {
        lines.push(
          "В доте всё просто: ты либо жмешь кнопки вовремя, либо смотришь на трон."
        );
      } else {
        lines.push("Я бы сейчас лучше патчноуты почитал, чем в реальность возвращался.");
      }

      if (ctx.hasSonya) {
        lines.push("Соня? Не, не понимаю о чем ты вообще говоришь.");
      }

      if (Math.random() < 0.25 && !ctx.isHowAreYou) {
        lines.push("Ща мне в Семифреддо надо отскочить.");
      }

      if (Math.random() < 0.25 && !ctx.isHowAreYou) {
        lines.push(pickRandom(this.quotes));
      }

      if (ctx.isQuestion && !ctx.hasDota) {
        lines.push(`По "${ctx.topic}" - сложно, но если не тильтовать, то решаемо.`);
      }

      if (!ctx.isHowAreYou || ctx.wordCount > 5) {
        lines.push(pickStyleLine("glotalkin", "outro", this.outros));
      }

      return lines.join(" ");
    },
  },
  igoryan: {
    name: "Игорян",
    opener: "сори честно впадлу писать было. типа печатать буквы на клаве",
    hint: "всегда пишет с маленькой буквы и отвечает только одной фиксированной фразой.",
    generateReply() {
      return "сори честно впадлу писать было. типа печатать буквы на клаве";
    },
  },
};

const characterSelect = document.querySelector("#characterSelect");
const characterHint = document.querySelector("#characterHint");
const chatWindow = document.querySelector("#chatWindow");
const chatForm = document.querySelector("#chatForm");
const messageInput = document.querySelector("#messageInput");

let currentCharacterKey = "denchik";
const styleMemory = {
  denchik: { intro: null, outro: null },
  mat: { intro: null, outro: null },
  glotalkin: { intro: null, outro: null },
};

function init() {
  Object.entries(personalities).forEach(([key, data]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = data.name;
    characterSelect.append(option);
  });

  characterSelect.value = currentCharacterKey;
  refreshCharacterInfo();

  characterSelect.addEventListener("change", () => {
    currentCharacterKey = characterSelect.value;
    refreshCharacterInfo();
  });

  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = messageInput.value.trim();
    if (!text) return;

    appendBubble(text, "user");
    messageInput.value = "";

    const person = personalities[currentCharacterKey];
    const reply = person.generateReply(text);

    window.setTimeout(() => {
      appendBubble(reply, "bot");
    }, 250);
  });
}

function refreshCharacterInfo() {
  const person = personalities[currentCharacterKey];
  characterHint.textContent = person.hint;
  chatWindow.innerHTML = "";
  appendBubble(`${person.name}: ${person.opener}`, "bot");
}

function appendBubble(text, type) {
  const bubble = document.createElement("article");
  bubble.className = `bubble ${type === "user" ? "bubble-user" : "bubble-bot"}`;
  bubble.textContent = text;
  chatWindow.append(bubble);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function containsAny(text, list) {
  return list.some((chunk) => text.includes(chunk));
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function pickStyleLine(characterKey, channel, list) {
  if (!list || list.length === 0) return "";
  const memory = styleMemory[characterKey] || (styleMemory[characterKey] = {});
  const prev = memory[channel];

  if (list.length === 1) {
    memory[channel] = list[0];
    return list[0];
  }

  let candidate = pickRandom(list);
  let guard = 0;
  while (candidate === prev && guard < 8) {
    candidate = pickRandom(list);
    guard += 1;
  }

  memory[channel] = candidate;
  return candidate;
}

function analyzeUserText(userText) {
  const raw = userText.trim();
  const lower = raw.toLowerCase();
  const normalized = lower.replace(/[!?.,:;()[\]{}"]/g, " ");

  const greetingTokens = ["привет", "здор", "хай", "hello", "hey", "добрый"];
  const howAreYouTokens = ["как дела", "как ты", "как жизнь", "как себя чувствуешь", "как сам"];

  const isGreeting = containsAny(normalized, greetingTokens);
  const isHowAreYou = containsAny(normalized, howAreYouTokens);
  const isQuestion = raw.includes("?") || startsWithQuestionWord(normalized);
  const hasGame = containsAny(normalized, ["игр", "rpg", "дота", "elden", "witcher", "bg3"]);
  const hasMovie = containsAny(normalized, ["фильм", "супергер", "марвел", "dc", "кино", "комикс"]);
  const hasLina = containsAny(normalized, ["лина"]);
  const hasLike = containsAny(normalized, ["нрав", "круто", "топ", "норм", "кайф", "класс"]);
  const hasSad = containsAny(normalized, ["груст", "бывш", "разрыв", "печаль", "одиноко"]);
  const hasDota = containsAny(normalized, ["дота", "мид", "саппорт", "ммр", "герой", "катка"]);
  const hasSonya = containsAny(normalized, ["соня"]);

  return {
    isGreeting,
    isHowAreYou,
    isQuestion,
    hasGame,
    hasMovie,
    hasLina,
    hasLike,
    hasSad,
    hasDota,
    hasSonya,
    wordCount: normalized.trim().split(/\s+/).filter(Boolean).length,
    topic: extractTopic(raw),
  };
}

function startsWithQuestionWord(text) {
  const words = text.trim().split(/\s+/);
  const first = words[0] || "";
  return ["что", "как", "почему", "зачем", "когда", "где", "кто", "сколько", "which", "what", "how"].includes(first);
}

function extractTopic(raw) {
  const cleaned = raw
    .replace(/[!?.,:;()[\]{}"]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!cleaned) return "это";

  const words = cleaned.split(" ").slice(0, 7);
  return words.join(" ");
}

init();
