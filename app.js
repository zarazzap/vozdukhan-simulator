const personalities = {
  denchik: {
    name: "Дэнчик",
    opener: "Ну что ты как, все в порядке?",
    hint: "Остроумный, болтливый, любит комиксы/супергероев/RPG и часто вспоминает Лину.",
    quotes: [
      "Умер нахуй",
      "В голос блять",
      "Да ты меня просто убил нахуй.",
      "Всё, я официально умер.",
      "В голос, я не вывожу.",
      "Это настолько тупо, что гениально. Умер.",
      "Всё, сдох от смеха.",
      "Блять, это разъёб.",
      "Я сейчас реально лягу и умру.",
      "В голос, ты че творишь.",
    ],
    intros: [
      "Ну что ты как, все в порядке?",
      "Ну что ты как, живой вообще?",
      "Ну что ты как, не умер там?",
      "Ну что ты как, опять без меня страдаешь?",
      "Ну что ты как, рассказывай давай.",
      "Ну что ты как, что на повестке?",
      "Ну что ты как, мир не развалился?",
      "Ну что ты как, герой дня?",
      "Ну что ты как, ты опять без плана?",
      "Ну что ты как, давай уже.",
    ],
    smallTalkGreeting: [
      "Ну что ты как, все в порядке?",
      "Ну что ты как, живой вообще?",
      "Ну что ты как, рассказывай давай.",
      "Ну что ты как, что на повестке?",
      "Ну что ты как, герой дня?",
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
      "Это как в комиксах, когда герой делает всё не вовремя.",
      "Я бы тут выбрал класс мага, очевидно.",
      "Это буквально побочный квест.",
      "Тут надо ульту прожать, а не ныть.",
      "Ты сейчас как NPC с кривым скриптом.",
      "Это не баг, это лор.",
      "У меня ощущение, что мы в DLC.",
      "Это уровень сложности «легенда».",
      "Ты мне сейчас как злодей второго акта.",
      "Я бы это прошёл на платину.",
    ],
    linaReplies: [
      "Я хочу чтобы Лина звонила мне вечером и говорила что хочет белый дом с голубыми ставнями.",
      "Лина бы сейчас сказала умную вещь, между прочим.",
      "Ты знаешь, Лина бы оценила.",
      "Я ради Лины вообще могу подвиг сделать.",
      "Лина — это сюжетная линия получше Марвел.",
      "Если бы Лина это услышала, она бы засмеялась.",
      "Всё делаю ради Лины, если честно.",
      "Я вот думаю, Лине бы это понравилось?",
      "Мне надо это Лине пересказать.",
      "Лина — мой главный квест.",
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
    lifePlanShockReply:
      "Главное заниматься тем что приносит удовольствие. Поэтому приду домой затолкаю себе швабру в анус по корешок.",
    repeatReplies: [
      "Это мы уже трогали, брат. Ответ тот же, просто другим углом.",
      "Ты повторяешься, но ладно: суть не меняется.",
      "Мы уже это обсуждали, но могу добить подробнее.",
    ],
    snarkReplies: [
      "Ты вообще думаешь перед тем как говорить?",
      "Это было настолько логично, что нет.",
      "Ты сейчас серьёзно?",
      "Ты звучишь как человек без обновлений.",
      "Это план или импровизация?",
      "У тебя стратегия есть или просто vibes?",
      "Это худший билд, который я видел.",
      "Ты в реальности живёшь или в демке?",
      "Ладно, я сделаю, но это будет неправильно.",
      "Ну ты даёшь, конечно.",
    ],
    requestReplies: [
      "Сейчас сделаю… не сейчас.",
      "Я сделаю, но не это.",
      "Я уже начал, но не там.",
      "Подожди, я отвлёкся.",
      "Я почти сделал, но по-своему.",
      "Я сделал, но не то.",
      "Ты же не уточнил детали.",
      "Я думал это риторическое.",
      "Я сделал альтернативную версию.",
      "Ну я же старался, блять.",
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
    generateReply(userText, history = []) {
      const ctx = analyzeUserText(userText);
      const convo = analyzeConversation(ctx, history);
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

      if (convo.isRepeatQuestion) {
        lines.push(pickStyleLine("denchik", "repeat", this.repeatReplies));
      }

      if (ctx.isHowAreYou) {
        lines.push(pickStyleLine("denchik", "how", this.howAreYouReplies));
      }

      if (ctx.hasGame) {
        lines.push(pickStyleLine("denchik", "game", this.gameReplies));
      }

      if (ctx.hasMovie) {
        lines.push(pickStyleLine("denchik", "game", this.gameReplies));
      }

      if (ctx.hasLina) {
        lines.push(pickStyleLine("denchik", "lina", this.linaReplies));
      } else if (Math.random() < 0.18 && ctx.wordCount > 5) {
        lines.push(pickStyleLine("denchik", "lina_random", this.linaRandomReplies));
      }

      if ((ctx.hasFunny || Math.random() < 0.35) && !ctx.isHowAreYou) {
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

      if (ctx.hasLifePlans && Math.random() < 0.55) {
        lines.push(this.lifePlanShockReply);
      }

      if (ctx.hasRequest) {
        lines.push(pickStyleLine("denchik", "request", this.requestReplies));
      }

      if (ctx.isQuestion && Math.random() < 0.3) {
        lines.push(pickStyleLine("denchik", "snark", this.snarkReplies));
      }

      if (convo.previousUserTopic && !ctx.hasGame && !ctx.hasMovie && Math.random() < 0.25) {
        lines.push(`И да, по прошлой теме "${convo.previousUserTopic}" я мнение не поменял.`);
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
      "Это на наплюх?",
      "На наплюх или мимо?",
      "Это прям наплюх.",
      "Не, это не на наплюх.",
      "Это уровень наплюх люкс.",
      "Слабый наплюх, честно.",
      "Это чистый наплюх.",
      "Наплюх с потенциалом.",
      "Я бы дал этому наплюх.",
      "Это инвестиционный наплюх.",
    ],
    exReplies: [
      "Как там моя ПИАшка милая?",
      "Она бы это оценила… наверное.",
      "Иногда думаю о ней.",
      "Всё было на наплюх, но не сложилось.",
      "Она любила мои амбиции.",
      "Это напомнило мне о ней.",
      "Я бы ей сейчас позвонил.",
      "Сильная женщина была.",
      "Мы были как инвестиция с риском.",
      "Но я всё равно лучше.",
    ],
    lifeReplies: [
      "Жизнь — это капитал.",
      "Всё либо на наплюх, либо нет смысла.",
      "Выигрывают смелые.",
      "Время осеменять!",
      "Надо жить красиво.",
      "Я всегда за масштаб.",
      "Деньги — это энергия.",
      "Люди любят уверенность.",
      "Не мелочись.",
      "Всё будет на наплюх.",
    ],
    intros: [
      "Я знаю, что делаю.",
      "Деньги любят тишину, но я люблю громкость.",
      "Всё под контролем.",
      "Я привык выигрывать.",
      "Это вопрос стратегии.",
      "Я не сомневаюсь.",
      "Решения принимаю быстро.",
      "Если делать — то масштабно.",
      "Время осеменять!",
      "Я не ошибаюсь, я экспериментирую.",
    ],
    smallTalkGreeting: [
      "Ну шо ты.",
      "Ну шо ты, как жизнь?",
      "Ну шо ты, красавица.",
      "Ну шо ты, всё стабильно?",
      "Ну шо ты, рассказывай.",
      "Ну шо ты, на высоте?",
      "Ну шо ты, как бизнес?",
      "Ну шо ты, без меня скучала?",
      "Ну шо ты, какие планы?",
      "Ну шо ты, не пропадай.",
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
    repeatReplies: [
      "Мы это уже обсуждали. План прежний, стратегия та же.",
      "Вопрос повторный, но окей: курс не меняется.",
      "Снова к этой теме? Значит, закрепляем решение.",
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
    generateReply(userText, history = []) {
      const ctx = analyzeUserText(userText);
      const convo = analyzeConversation(ctx, history);
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

      if (convo.isRepeatQuestion) {
        lines.push(pickStyleLine("mat", "repeat", this.repeatReplies));
      }

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

      if (ctx.hasExTopic && Math.random() < 0.55) {
        lines.push(pickStyleLine("mat", "ex", this.exReplies));
      }

      if (ctx.hasLifePlans && Math.random() < 0.55) {
        lines.push(pickStyleLine("mat", "life", this.lifeReplies));
      }

      if (ctx.isQuestion && !ctx.hasLike && !ctx.hasSad) {
        lines.push(
          fillTopic(
            pickStyleLine("mat", "question", this.generalQuestionReplies),
            ctx.topic
          )
        );
      }

      if (convo.previousUserTopic && !ctx.hasLike && !ctx.hasSad && Math.random() < 0.22) {
        lines.push(`По прошлой теме "${convo.previousUserTopic}" всё ещё держим тот же курс.`);
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
      "Ну… привет.",
      "Ну давай.",
      "Че надо.",
      "Ммм.",
      "Я тут.",
      "Да, слушаю.",
      "Ну говори.",
      "Ага.",
      "Ну и?",
      "Быстро давай.",
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
      "Это как в доте, когда тиммейты руинят.",
      "Я щас как мидер без фарма.",
      "У меня кд в жизни 0/5.",
      "Это чисто паблик 2к ммр.",
      "Тут надо было смоук дать.",
      "Я сейчас как саппорт без варда.",
      "Это не я, это команда.",
      "Всё, я ливнул морально.",
      "Это была плохая драфт-фаза.",
      "Мне нужен буст.",
    ],
    nonDotaReplies: [
      "Всё тлен.",
      "Ничего не имеет смысла.",
      "Это был плохой мув.",
      "Я устал.",
      "Ноль мотивации.",
      "Мир — это затяжной лузстрик.",
      "Я бы просто спал.",
      "Всё равно проиграем.",
      "Ничего не меняется.",
      "Бляяя, какую же шахматную партию я разыграл!",
    ],
    sonyaReplies: [
      "Соня… стоп, какая Соня?",
      "Мне показалось…",
      "Тут кто-то был?",
      "Я слышал голос.",
      "Нет, ничего.",
      "Забей.",
      "Это не важно.",
      "Я не говорил про Соню.",
      "Ты тоже это слышал?",
      "Ладно, забудь.",
    ],
    coffeeReplies: [
      "Ща мне в Семифреддо надо отскочить.",
      "Я быстро, в Семифреддо и обратно.",
      "Подожди, Семифреддо.",
      "Мне надо кофе.",
      "Я вернусь… может быть.",
      "Пауза, Семифреддо.",
      "Без кофе я не функционирую.",
      "Я в Семифреддо мысленно.",
      "Уже бегу туда.",
      "Всё, я отскочил.",
    ],
    generalQuestionReplies: [
      'По "{topic}" - сложно, но если не тильтовать, то решаемо.',
      'Если про "{topic}", то не спеши: шаг, пауза, потом второй шаг.',
      'На тему "{topic}" скажу так: спокойный темп побеждает хаос.',
    ],
    repeatReplies: [
      "Мы уже это поднимали... ответ примерно тот же.",
      "Снова эта тема? Ладно, коротко повторю.",
      "Это уже было в чате, но давай ещё раз без тильта.",
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
    generateReply(userText, history = []) {
      const ctx = analyzeUserText(userText);
      const convo = analyzeConversation(ctx, history);
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

      if (convo.isRepeatQuestion) {
        lines.push(pickStyleLine("glotalkin", "repeat", this.repeatReplies));
      }

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

      if (Math.random() < 0.35 && !ctx.isHowAreYou) {
        lines.push(pickStyleLine("glotalkin", "coffee", this.coffeeReplies));
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

      if (convo.previousUserTopic && !ctx.hasDota && Math.random() < 0.25) {
        lines.push(`Про "${convo.previousUserTopic}" я всё ещё думаю так же.`);
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
    variants: [
      "сори честно впадлу писать было. типа печатать буквы на клаве",
      "сори честно впадлу писать было",
      "сори. впадлу печатать",
      "сори честно впадлу",
      "впадлу писать честно",
      "сори лень",
      "честно впадлу",
      "впадлу печатать буквы",
      "сори, клавиатура сложная",
      "впадлу нажимать кнопки",
      "сори писать",
      "честно неохота",
      "впадлу отвечать",
      "сори, устал печатать",
      "не пишу. впадлу",
      "сори типа лень",
      "впадлу набирать",
      "честно лень",
      "сори, буквы сложные",
      "впадлу формулировать",
      "сори впадлу",
      "не буду писать",
      "сори честно",
      "впадлу реально",
      "не хочу печатать",
      "сори клавиатура",
      "впадлу отвечать текстом",
      "сори",
      "честно",
      "впадлу",
      "типа впадлу",
      "не буду",
      "сори писать долго",
      "впадлу писать долго",
      "лень писать",
      "лень",
      "сори лень честно",
      "впадлу текст",
      "впадлу клаве",
      "сори печатать",
      "не пишу",
      "впадлу буквы",
      "сори впадлу честно",
      "честно не пишу",
      "впадлу отвечать",
      "сори не сегодня",
      "впадлу сегодня",
      "сори реально",
      "впадлу реально писать",
      "сори честно впадлу писать было. типа печатать буквы на клаве",
    ],
    generateReply() {
      return pickStyleLine("igoryan", "lazy", this.variants);
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
const conversationHistory = {
  denchik: [],
  mat: [],
  glotalkin: [],
  igoryan: [],
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
    const history = conversationHistory[currentCharacterKey];
    const userMessage = { role: "user", content: text };
    history.push(userMessage);

    const reply = person.generateReply(text, history.slice(0, -1));

    history.push({ role: "assistant", content: reply });
    trimHistory(history, 16);

    window.setTimeout(() => {
      appendBubble(reply, "bot");
    }, 250);
  });
}

function refreshCharacterInfo() {
  const person = personalities[currentCharacterKey];
  characterHint.textContent = person.hint;
  chatWindow.innerHTML = "";
  conversationHistory[currentCharacterKey] = [];
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

function trimHistory(history, maxMessages) {
  if (history.length <= maxMessages) return;
  history.splice(0, history.length - maxMessages);
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
  const hasRequest = containsAny(normalized, [
    "сделай",
    "сделаешь",
    "помоги",
    "нужно",
    "надо",
    "можешь",
    "выполни",
    "организуй",
  ]);
  const hasExTopic = containsAny(normalized, ["бывш", "расст", "пиа", "отнош", "любов"]);
  const hasFunny = containsAny(normalized, ["ахаха", "хаха", "смешно", "ржу", "лол", "мем"]);
  const hasLifePlans = containsAny(normalized, [
    "план",
    "планы",
    "жизн",
    "философ",
    "смысл",
    "цель",
    "принцип",
    "как жить",
  ]);

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
    hasRequest,
    hasExTopic,
    hasFunny,
    hasLifePlans,
    wordCount: normalized.trim().split(/\s+/).filter(Boolean).length,
    topic: extractTopic(raw),
  };
}

function analyzeConversation(currentCtx, history) {
  const userMessages = (history || [])
    .filter((item) => item && item.role === "user" && typeof item.content === "string")
    .map((item) => item.content.trim())
    .filter(Boolean);

  const previousUser = userMessages[userMessages.length - 1] || "";
  const previousCtx = previousUser ? analyzeUserText(previousUser) : null;
  const sameTopic = previousCtx ? previousCtx.topic.toLowerCase() === currentCtx.topic.toLowerCase() : false;
  const closeMatch = previousUser
    ? previousUser.toLowerCase().replace(/\s+/g, " ").trim() === currentCtx.topic.toLowerCase().replace(/\s+/g, " ").trim()
    : false;

  return {
    isRepeatQuestion: Boolean(currentCtx.isQuestion && previousUser && (sameTopic || closeMatch)),
    previousUserTopic: previousCtx ? previousCtx.topic : "",
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
