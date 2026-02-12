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
      const text = userText.toLowerCase();
      const ctx = analyzeUserText(userText);
      const lines = [];
      lines.push(pickRandom(this.intros));

      if (ctx.isGreeting) {
        lines.push("Привет, живой вроде, двигаемся.");
      }

      if (ctx.isHowAreYou) {
        lines.push("Нормально себя чувствую, на бодром цинизме держусь.");
      }

      if (containsAny(text, this.keywords.game)) {
        lines.push(
          "По играм я базу даю: качай билд, не ной и получай удовольствие от процесса."
        );
      }

      if (containsAny(text, this.keywords.movie)) {
        lines.push(
          "Если про супергероев, то нужен нормальный драматизм, а не просто костюм и взрывы."
        );
      }

      if (containsAny(text, this.keywords.lina)) {
        lines.push(
          "Лина вообще отдельная тема, я про нее могу бесконечно говорить, ты не представляешь."
        );
      } else if (Math.random() < 0.35) {
        lines.push(
          "Кстати, Лина бы тут сказала, что ты мыслишь здраво. Ну почти."
        );
      }

      if (Math.random() < 0.5) {
        lines.push(pickRandom(this.quotes));
      }

      if (ctx.isQuestion && !containsAny(text, this.keywords.game) && !containsAny(text, this.keywords.movie)) {
        lines.push(`По вопросу "${ctx.topic}": рабочий вариант - не усложнять и идти шагами.`);
      }

      lines.push(pickRandom(this.outros));
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
    keywords: {
      like: ["нрав", "круто", "топ", "норм", "кайф"],
      sad: ["груст", "бывш", "разрыв", "печаль", "одиноко"],
    },
    generateReply(userText) {
      const text = userText.toLowerCase();
      const ctx = analyzeUserText(userText);
      const lines = [];
      lines.push("Смотри, у меня подход простой: уверенность, кэш и харизма.");

      if (ctx.isGreeting) {
        lines.push("Приветствую, дорогой. Я в форме.");
      }

      if (ctx.isHowAreYou) {
        lines.push("У меня отлично, как у человека с правильными активами.");
      }

      if (containsAny(text, this.keywords.like)) {
        lines.push("Это прям наплюх‑уровень качества, беру в дело.");
      }

      if (containsAny(text, this.keywords.sad)) {
        lines.push("Бывшая - это волатильный актив, не вкладывай туда душу повторно.");
      }

      if (Math.random() < 0.55) {
        lines.push(pickRandom(this.quotes));
      }

      if (ctx.isQuestion && !containsAny(text, this.keywords.like) && !containsAny(text, this.keywords.sad)) {
        lines.push(`По теме "${ctx.topic}" - делай выбор, который растит тебя в цене.`);
      }

      lines.push("Держи марку. Если нравится - масштабируем. На наплюх?");
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
    keywords: {
      dota: ["дота", "мид", "саппорт", "ммр", "герой", "катка"],
      sonya: ["соня"],
    },
    generateReply(userText) {
      const text = userText.toLowerCase();
      const ctx = analyzeUserText(userText);
      const lines = [];
      lines.push("Состояние такое... как будто лузстрик на 12 каток.");

      if (ctx.isGreeting) {
        lines.push("Да привет... живу на минималках.");
      }

      if (ctx.isHowAreYou) {
        lines.push("Чувствую себя как саппорт без вижена. Но терпимо.");
      }

      if (containsAny(text, this.keywords.dota)) {
        lines.push(
          "В доте всё просто: ты либо жмешь кнопки вовремя, либо смотришь на трон."
        );
      } else {
        lines.push("Я бы сейчас лучше патчноуты почитал, чем в реальность возвращался.");
      }

      if (containsAny(text, this.keywords.sonya)) {
        lines.push("Соня? Не, не понимаю о чем ты вообще говоришь.");
      }

      if (Math.random() < 0.45) {
        lines.push("Ща мне в Семифреддо надо отскочить.");
      }

      if (Math.random() < 0.45) {
        lines.push(pickRandom(this.quotes));
      }

      if (ctx.isQuestion && !containsAny(text, this.keywords.dota)) {
        lines.push(`По "${ctx.topic}" - сложно, но если не тильтовать, то решаемо.`);
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

function analyzeUserText(userText) {
  const raw = userText.trim();
  const lower = raw.toLowerCase();
  const normalized = lower.replace(/[!?.,:;()[\]{}"]/g, " ");

  const greetingTokens = ["привет", "здор", "хай", "hello", "hey", "добрый"];
  const howAreYouTokens = ["как дела", "как ты", "как жизнь", "как себя чувствуешь", "как сам"];

  const isGreeting = containsAny(normalized, greetingTokens);
  const isHowAreYou = containsAny(normalized, howAreYouTokens);
  const isQuestion = raw.includes("?") || startsWithQuestionWord(normalized);

  return {
    isGreeting,
    isHowAreYou,
    isQuestion,
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
