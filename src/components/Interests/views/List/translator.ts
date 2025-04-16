import { LangVariant, Translator } from "@/services/LangContext";

import { InterestKey } from "../../constants";
import { InterestDetailProps } from "../../types";

export const translator: Translator<
  InterestKey,
  Pick<InterestDetailProps, "title" | "descriptions" | "imageDescription">
> = {
  [InterestKey.DEVELOPMENT]: {
    [LangVariant.RU]: {
      title: "Программирование",
      descriptions: [
        "Как бы банально это не звучало, но я ОЧЕНЬ люблю программировать!",
        "Процесс программирования меня затягивает и вдохновляет. Мне очень нравится уникальная возможность создавать что-то новое и красивое.",
        'Думаю важно уточнить, что я не считаю себя "гиком" и, честно говоря, не стремлюсь стать "супер" программистом. Все же для меня очень важную роль играет общение с людьми, поэтому в будущем я вижу себя именно на управляющих позициях!',
      ],
      imageDescription: "Внедряю код в пятницу вечером",
    },
    [LangVariant.ENG]: {
      title: "Programming",
      descriptions: [
        "As cliché as it may sound, I REALLY love programming!",
        "The programming process captivates and inspires me. I really enjoy the unique opportunity to create something new and beautiful.",
        'I think it\'s important to clarify that I don\'t consider myself a "geek" and, honestly, I don\'t strive to become a "super" programmer. Communication with people plays a very important role for me, so in the future I see myself in management positions!',
      ],
      imageDescription: "Deploying code on Friday evening",
    },
    [LangVariant.CHI]: {
      title: "编程",
      descriptions: [
        "虽然听起来很老套，但我真的非常喜欢编程！",
        "编程过程让我着迷并激励着我。我非常喜欢创造新事物和美好事物的独特机会。",
        "我认为重要的是要澄清，我不认为自己是'极客'，老实说，我并不想成为'超级'程序员。与人交流对我来说非常重要，所以未来我希望能在管理岗位上发展！",
      ],
      imageDescription: "周五晚上部署代码",
    },
  },
  [InterestKey.COMICS]: {
    [LangVariant.RU]: {
      title: "Комиксы",
      descriptions: [
        'Я очень люблю супергеройскую тематику! Прочитать крутой комикс или посмотреть новый фильм/мультфильм по "суперам" - я в деле!',
        "Больше всего мне нравится вселенная DC, но в последнее время выходит мало фильмов и сериалов по популярным вселенным, поэтому ищу новые интересные комиксы и сериалы.",
        'Например, недавно посмотрел "Solo leveling" - на столько затянуло, что даже прочитал манхву :)',
      ],
      imageDescription: "Программист-паук: сейчас, только допишу код, и домой",
    },
    [LangVariant.ENG]: {
      title: "Comics",
      descriptions: [
        "I really love superhero themes! Reading a cool comic or watching a new movie/cartoon about 'supers' - count me in!",
        "I like the DC universe the most, but lately there have been few movies and series based on popular universes, so I'm looking for new interesting comics and series.",
        'For example, I recently watched "Solo Leveling" - it was so engaging that I even read the manhwa :)',
      ],
      imageDescription:
        "Spider-Developer: just finishing the code, then heading home",
    },
    [LangVariant.CHI]: {
      title: "漫画",
      descriptions: [
        "我非常喜欢超级英雄题材！阅读精彩的漫画或观看新的超级英雄电影/动画 - 我随时准备！",
        "我最喜欢DC宇宙，但最近基于流行宇宙的电影和系列很少，所以我在寻找新的有趣的漫画和系列。",
        "例如，我最近看了《Solo Leveling》- 它太吸引人了，我甚至读了漫画 :)",
      ],
      imageDescription: "蜘蛛程序员：写完代码就回家",
    },
  },
  [InterestKey.GAMES]: {
    [LangVariant.RU]: {
      title: "Игры и кино",
      descriptions: [
        "Ходить в кино я готов хоть каждую неделю! Не столько фильмы, сколько сам процесс подобного отдыха мне очень нравится!",
        "По вечерам я люблю поиграть в playstation. Простой и крутой способ отдыха! К сожалению, времени на это сейчас почти нет, но ни одной части God of War я не пропустил :)",
      ],
      imageDescription: "С внимательной публикой",
    },
    [LangVariant.ENG]: {
      title: "Video Games and Movies",
      descriptions: [
        "I'm ready to go to the movies every week! It's not so much the movies themselves, but the process of such relaxation that I really enjoy!",
        "In the evenings, I love playing PlayStation. A simple and cool way to relax! Unfortunately, there's almost no time for this now, but I haven't missed a single part of God of War :)",
      ],
      imageDescription: "With an attentive audience",
    },
    [LangVariant.CHI]: {
      title: "电子游戏和电影",
      descriptions: [
        "我每周都准备去看电影！与其说是电影本身，不如说是我非常喜欢这种放松的过程！",
        "晚上我喜欢玩PlayStation。一个简单又酷的放松方式！可惜现在几乎没有时间，但我没有错过任何一部《战神》 :)",
      ],
      imageDescription: "与专注的观众一起",
    },
  },
  [InterestKey.SPORT]: {
    [LangVariant.RU]: {
      title: "Спорт и активный отдых",
      descriptions: [
        "Море, отели, пляжи - это, конечно, все очень круто, но я выбираю активный отдых!",
        "Путешествовать по красивым местам, ходить по горам и горным рекам, дышать свежим воздухом - бесценно.",
        "Помимо путешествий, я с радостью проведу время в боулинге или схожу на картинг, в общем, люблю активные мероприятия!",
        "Из спортивных игр больше всего нравится футбол, также люблю волейбол, пинг-понг, тенис.",
      ],
      imageDescription: "Ты неси меня река...",
    },
    [LangVariant.ENG]: {
      title: "Sports and Active Recreation",
      descriptions: [
        "Sea, hotels, beaches - of course, it's all very cool, but I choose active recreation!",
        "Traveling to beautiful places, hiking in mountains and along mountain rivers, breathing fresh air - priceless.",
        "Besides traveling, I'm happy to spend time bowling or go karting, in general, I love active events!",
        "Among sports games, I like football the most, also love volleyball, ping-pong, tennis.",
      ],
      imageDescription: "Carry me, river...",
    },
    [LangVariant.CHI]: {
      title: "运动和户外活动",
      descriptions: [
        "大海、酒店、海滩 - 当然都很棒，但我选择户外活动！",
        "去美丽的地方旅行，在山间和山间河流徒步，呼吸新鲜空气 - 无价。",
        "除了旅行，我很乐意去打保龄球或卡丁车，总的来说，我喜欢活跃的活动！",
        "在体育运动中，我最喜欢足球，也喜欢排球、乒乓球和网球。",
      ],
      imageDescription: "河流载我前行...",
    },
  },
  [InterestKey.OTHER]: {
    [LangVariant.RU]: {
      title: "Другие интересы",
      descriptions: [
        "Помимо указанных мной интересов, очень люблю музыку (так бы термины запоминал, как помню текста песен из 2007), водить машину (сам я являюсь автовладельцем прекрасной Mazda 6 - люблю, обожаю)!",
        "Люблю кататься на велосипеде, но делаю это не так часто, как хотелось бы.",
        "Также хожу в спортзал, летом стараюсь бегать по утрам и раз в неделю посещаю бассейн.",
      ],
      imageDescription: "Мчится тихий огонек моей души",
    },
    [LangVariant.ENG]: {
      title: "Other Interests",
      descriptions: [
        "Besides the interests I mentioned, I really love music (I wish I could remember terms as well as I remember song lyrics from 2007), driving a car (I'm the owner of a beautiful Mazda 6 - love it, adore it)!",
        "I love cycling, but don't do it as often as I'd like.",
        "I also go to the gym, try to run in the mornings in summer, and visit the pool once a week.",
      ],
      imageDescription: "The quiet flame of my soul rushes",
    },
    [LangVariant.CHI]: {
      title: "其他兴趣",
      descriptions: [
        "除了我提到的兴趣，我真的很喜欢音乐（我希望我能像记住2007年的歌词一样记住术语），开车（我是一辆漂亮的马自达6的车主 - 爱它，崇拜它）！",
        "我喜欢骑自行车，但没有我想象的那么频繁。",
        "我还去健身房，夏天尽量早上跑步，每周去一次游泳池。",
      ],
      imageDescription: "我灵魂的安静火焰在奔腾",
    },
  },
  [InterestKey.HOOKAH]: {
    [LangVariant.RU]: {
      title: "Кальяны",
      descriptions: [
        "Хоть я и за активный отдых, кальяны плотно вошли в мою жизнь.",
        "В последнее время я стараюсь меньше посещать кальянные, но если меня позвать - я всегда соглашусь.",
        "Во время работы менеджером заведения, я как раз был менеджером кальянной, по совместительству - кальянщиком.",
        "Работа в данной сфере доставляла мне много удовольствия, но здоровья тут, к сожалению, не наберешься, поэтому кальяны остались в моей жизни как хобби.",
      ],
      imageDescription: "Smoke weed every day",
    },
    [LangVariant.ENG]: {
      title: "Hookah",
      descriptions: [
        "Although I'm for active recreation, hookah has become a significant part of my life.",
        "Lately I try to visit hookah lounges less often, but if I'm invited - I'll always agree.",
        "During my time as a venue manager, I was actually a hookah lounge manager, and also worked as a hookah master.",
        "Working in this field brought me a lot of pleasure, but unfortunately it's not good for health, so hookah remains in my life as a hobby.",
      ],
      imageDescription: "Smoke weed every day",
    },
    [LangVariant.CHI]: {
      title: "水烟",
      descriptions: [
        "虽然我支持户外活动，但水烟已经成为我生活的重要组成部分。",
        "最近我尽量少去水烟馆，但如果有人邀请我 - 我总是会同意。",
        "在我担任场馆经理期间，我实际上是一名水烟馆经理，同时也是一名水烟师。",
        "在这个领域工作给我带来了很多乐趣，但不幸的是对健康不利，所以水烟仍然是我生活中的一个爱好。",
      ],
      imageDescription: "每天抽大麻",
    },
  },
};
