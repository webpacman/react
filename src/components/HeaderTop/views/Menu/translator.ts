import { type Translator } from '@/services/LangToggler/types';
import { type Sections } from '@/types/sections';

export const translator: Translator<Exclude<Sections, Sections.HOME>> = {
  aboutMe: {
    ru: 'Обо мне',
    eng: 'About me',
    chi: '關於我',
  },
  achievements: {
    ru: 'Достижения',
    eng: 'Achievements',
    chi: '成就',
  },
  skills: {
    ru: 'Навыки',
    eng: 'Skills',
    chi: '技能',
  },
  work: {
    ru: 'Работа',
    eng: 'Work',
    chi: '工作',
  },
  interests: {
    ru: 'Интересы',
    eng: 'Interests',
    chi: '興趣',
  },
  books: {
    ru: 'Книги',
    eng: 'Books',
    chi: '圖書',
  },
  contactMe: {
    ru: 'Связаться',
    eng: 'Contact me',
    chi: '聯絡我',
  },
};
