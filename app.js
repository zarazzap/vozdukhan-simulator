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
    smallTalkGreeting: [
      "Йо, привет. Че по планам?",
      "Здарова. Ну че, сегодня разгоняем тему?",
      "О, привет, живой. Что обсудим?",
    ],
    smallTalkHowAreYou: [
      "Нормально, держусь бодро. Ты как сам?",
      "Пойдет, на сарказме выезжаю. Ты как?",
      "Да нормально, не развалился. Что у тебя?",
    ],
    howAreYouReplies: [
      "Нормально себя чувствую, на бодром цинизме держусь.",
      "Да в порядке, просто мозг в турбо-режиме.",
      "Живу нормально, местами в ахуе, но стабильно.",
    ],
    gameReplies: [
      "По играм я базу даю: качай билд, не ной и получай удовольствие от процесса.",
      "Если по RPG, то сначала стиль игры, потом шмот и ротация.",
      "В играх главное не тильтовать: один нормальный план лучше десяти панических.",
    ],
    movieReplies: [
      "Если про супергероев, то нужен нормальный драматизм, а не просто костюм и взрывы.",
      "Комикс-кино работает, когда герой ошибается, а не только красиво прыгает.",
      "Если фильм держится только на CGI, то это не геройка, а ярмарка спецэффектов.",
    ],
    linaReplies: [
      "Лина вообще отдельная тема, я про нее могу бесконечно говорить, ты не представляешь.",
      "Лина - это сюжетная арка уровня легендарки, без шансов на скип.",
      "Если честно, с Линой любой разговор становится лучше автоматически.",
    ],
    linaRandomReplies: [
      "Кстати, Лина бы тут сказала, что ты мыслишь здраво. Ну почти.",
      "Лина бы оценила этот ход, без рофлов.",
    ],
    generalQuestionReplies: [
      'По вопросу "{topic}": рабочий вариант - не усложнять и идти шагами.',
      'Если по теме "{topic}", то делай просто: выбрал и последовательно добил.',
      'На "{topic}" ответ такой: меньше хаоса, больше конкретных действий.',
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
          return pickStyleLine("denchik", "small_how", this.smallTalkHowAreYou);
        }
        return pickStyleLine("denchik", "small_greet", this.smallTalkGreeting);
      }

      lines.push(pickStyleLine("denchik", "intro", this.intros));

      if (ctx.isHowAreYou) {
        lines.push(pickStyleLine("denchik", "how", this.howAreYouReplies));
      }

      if (ctx.hasGame) {
        lines.push(pickStyleLine("denchik", "game", this.gameReplies));
      }

      if (ctx.hasMovie) {
        lines.push(pickStyleLine("denchik", "movie", this.movieReplies));
      }

      if (ctx.hasLina) {
        lines.push(pickStyleLine("denchik", "lina", this.linaReplies));
      } else if (Math.random() < 0.18 && ctx.wordCount > 5) {
        lines.push(pickStyleLine("denchik", "lina_random", this.linaRandomReplies));
      }

      if (Math.random() < 0.35 && !ctx.isHowAreYou) {
        lines.push(pickRandom(this.quotes));
      }

      if (ctx.isQuestion && !ctx.hasGame && !ctx.hasMovie) {
        lines.push(
          fillTopic(
            pickStyleLine("denchik", "question", this.generalQuestionReplies),
            ctx.topic
          )
        );
      }

      if (!ctx.isHowAreYou || ctx.wordCount > 4) {
        lines.push(pickStyleLine("denchik", "outro", this.outros));
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
    smallTalkGreeting: [
      "Ну шо ты, рад видеть. Что обсуждаем?",
      "О, приветствую. Давай сразу к сути.",
      "Ну шо ты, дорогой. О чем сегодня рынок мнений?",
    ],
    smallTalkHowAreYou: [
      "У меня всё отлично. Как там твои дела, на наплюх?",
      "Я в полном порядке, как всегда. А ты как?",
      "Шикарно себя чувствую. У тебя как динамика?",
    ],
    howAreYouReplies: [
      "У меня отлично, как у человека с правильными активами.",
      "Форма топовая, фокус четкий, идем уверенно.",
      "Все стабильно хорошо, без просадки по настроению.",
    ],
    likeReplies: [
      "Это прям наплюх‑уровень качества, беру в дело.",
      "Вот это хороший вкус, одобряю полностью.",
      "Это звучит сильно, такое я поддерживаю.",
    ],
    sadReplies: [
      "Бывшая - это волатильный актив, не вкладывай туда душу повторно.",
      "Если грустно, значит пора в стратегию, а не в ностальгию.",
      "Эмоции понял, но держи осанку и двигайся дальше.",
    ],
    generalQuestionReplies: [
      'По теме "{topic}" - делай выбор, который растит тебя в цене.',
      'Если вопрос про "{topic}", то нужен расчет и хладнокровие.',
      'На "{topic}" мой ответ простой: выбирай вариант с долгим профитом.',
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
          return pickStyleLine("mat", "small_how", this.smallTalkHowAreYou);
        }
        return pickStyleLine("mat", "small_greet", this.smallTalkGreeting);
      }

      lines.push(pickStyleLine("mat", "intro", this.intros));

      if (ctx.isGreeting && ctx.wordCount > 3) {
        lines.push(pickStyleLine("mat", "greet", this.smallTalkGreeting));
      }

      if (ctx.isHowAreYou) {
        lines.push(pickStyleLine("mat", "how", this.howAreYouReplies));
      }

      if (ctx.hasLike) {
        lines.push(pickStyleLine("mat", "like", this.likeReplies));
      }

      if (ctx.hasSad) {
        lines.push(pickStyleLine("mat", "sad", this.sadReplies));
      }

      if (Math.random() < 0.3 && !ctx.isHowAreYou) {
        lines.push(pickRandom(this.quotes));
      }

      if (ctx.isQuestion && !ctx.hasLike && !ctx.hasSad) {
        lines.push(
          fillTopic(
            pickStyleLine("mat", "question", this.generalQuestionReplies),
            ctx.topic
          )
        );
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
    smallTalkGreeting: [
      "Привет... живу потихоньку. Что хотел?",
      "Да привет. Че обсудим, пока не развалился?",
      "О, здаров. Ладно, говори, слушаю.",
    ],
    smallTalkHowAreYou: [
      "Да так... терпимо. Не в тильте, уже хорошо.",
      "Пойдет, настроение как у саппорта на лузстрике.",
      "Жив, уже плюс. Как у тебя обстановка?",
    ],
    howAreYouReplies: [
      "Чувствую себя как саппорт без вижена. Но терпимо.",
      "Состояние среднее, но кнопки еще нажимаются.",
      "Не идеально, но в фид пока не ухожу.",
    ],
    dotaReplies: [
      "В доте всё просто: ты либо жмешь кнопки вовремя, либо смотришь на трон.",
      "По доте рецепт один: не тильтуй, играй от таймингов.",
      "В катке главное темп и дисциплина, без этого минус трон.",
    ],
    nonDotaReplies: [
      "Я бы сейчас лучше патчноуты почитал, чем в реальность возвращался.",
      "Тяжелая тема, но если не паниковать, то вывезти можно.",
      "Сложно, но решаемо, если идти короткими шагами.",
    ],
    sonyaReplies: [
      "Соня? Не, не понимаю о чем ты вообще говоришь.",
      "Про Соню не знаю, ты точно не перепутал чат?",
      "Соня... не-не, я тут ни при чем.",
    ],
    generalQuestionReplies: [
      'По "{topic}" - сложно, но если не тильтовать, то решаемо.',
      'Если про "{topic}", то не спеши: шаг, пауза, потом второй шаг.',
      'На тему "{topic}" скажу так: спокойный темп побеждает хаос.',
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
          return pickStyleLine("glotalkin", "small_how", this.smallTalkHowAreYou);
        }
        return pickStyleLine("glotalkin", "small_greet", this.smallTalkGreeting);
      }

      lines.push(pickStyleLine("glotalkin", "intro", this.intros));

      if (ctx.isGreeting && ctx.wordCount > 3) {
        lines.push(pickStyleLine("glotalkin", "greet", this.smallTalkGreeting));
      }

      if (ctx.isHowAreYou) {
        lines.push(pickStyleLine("glotalkin", "how", this.howAreYouReplies));
      }

      if (ctx.hasDota) {
        lines.push(pickStyleLine("glotalkin", "dota", this.dotaReplies));
      } else {
        lines.push(pickStyleLine("glotalkin", "non_dota", this.nonDotaReplies));
      }

      if (ctx.hasSonya) {
        lines.push(pickStyleLine("glotalkin", "sonya", this.sonyaReplies));
      }

      if (Math.random() < 0.25 && !ctx.isHowAreYou) {
        lines.push("Ща мне в Семифреддо надо отскочить.");
      }

      if (Math.random() < 0.25 && !ctx.isHowAreYou) {
        lines.push(pickRandom(this.quotes));
      }

      if (ctx.isQuestion && !ctx.hasDota) {
        lines.push(
          fillTopic(
            pickStyleLine("glotalkin", "question", this.generalQuestionReplies),
            ctx.topic
          )
        );
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

function fillTopic(template, topic) {
  return template.replace("{topic}", topic);
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
