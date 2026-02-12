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
    keywords: {
      game: ["игр", "rpg", "дота", "elden", "witcher", "bg3"],
      movie: ["фильм", "супергер", "марвел", "dc", "кино", "комикс"],
      lina: ["лина"],
    },
    generateReply(userText) {
      const text = userText.toLowerCase();
      const lines = [];
      lines.push("Слушай, щас распишу по-человечески, не спеши.");

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

      lines.push("Если коротко: делай проще и не тупи, всё решаемо.");
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
      const lines = [];
      lines.push("Смотри, у меня подход простой: уверенность, кэш и харизма.");

      if (containsAny(text, this.keywords.like)) {
        lines.push("Это прям наплюх‑уровень качества, беру в дело.");
      }

      if (containsAny(text, this.keywords.sad)) {
        lines.push("Бывшая - это волатильный актив, не вкладывай туда душу повторно.");
      }

      if (Math.random() < 0.55) {
        lines.push(pickRandom(this.quotes));
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
      const lines = [];
      lines.push("Состояние такое... как будто лузстрик на 12 каток.");

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

init();
