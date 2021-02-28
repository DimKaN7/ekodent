export const headerStrings = [
  {
    texts: ['eko-dent2001@mail.ru'],
    hrefs: ['mailto:eko-dent2001@mail.ru'],
  },
  {
    texts: ['пнд — птн: 10.00 — 20.00', 'сбт — вскр: 11.00 — 16.00'],
    hrefs: [],
  },
  {
    texts: ['г. Иркутск', 'ул. Декабрьских событий, 109'],
    hrefs: [],
  },
  {
    texts: ['+7 924 613 6900', '+7 (3952) 252-712'],
    hrefs: ['tel:+79246136900', 'tel:+73952252712'],
  }
];

export const servicesStrings = {
  title: ['наши', 'услуги'],
  cards: [
    {
      image: require(`../assets/Services/0.png`),
      title: 'ТЕРАПИЯ',
    },
    {
      image: require(`../assets/Services/1.png`),
      title: 'ДЕНТАЛЬНАЯ ИМПЛАНТАЦИЯ',
    },
    {
      image: require(`../assets/Services/2.png`),
      title: 'ПАРОДОНТОЛОГИЯ',
    },
    {
      image: require(`../assets/Services/3.png`),
      title: 'ДЕТСКАЯ СТОМАТОЛОГИЯ',
    },
    {
      image: require(`../assets/Services/4.png`),
      title: 'ДЕТСКАЯ СТОМАТОЛОГИЯ',
    },
    {
      image: require(`../assets/Services/5.png`),
      title: 'ПРОТЕЗИРОВАНИЕ',
    },
    {
      image: require(`../assets/Services/6.png`),
      title: 'ФИЗИОЛЕЧЕНИЕ',
    },
    {
      image: require(`../assets/Services/7.png`),
      title: 'ОРТОДОНТИЯ',
    }
  ],
};

export const aboutStrings = {
  titles: ['три главных аргумента ', 'для посещения нашей клиники'],
  cards: [
    'Передовое диагностическое и лечебное оборудование, включая собственную зуботехническую лабораторию',
    'Высокая квалификация и многолетний врачебный опыт: в нашей стоматологической клинике работают только профессиональные стоматологи, окончившие ординатуру,специалисты высшей категории',
    'Весьма демократичные цены. И не в ущерб качеству'
  ],
}

export const stocksStrings = {
  title: ['наши', 'акции'],
  stocks: [
    {
      image: require('../assets/Stocks/Stocks/0.png'),
      title: 'AIR PROPHY UNIT + KAVA = ВКУСНО!',
      buttonText: 'Узнать подробнее',
    },
    {
      image: require('../assets/Stocks/Stocks/1.png'),
      title: 'Подарок ко Дню рождения!',
      buttonText: 'Узнать подробнее',
    },
  ],
}

export const doctorsStrings = {
  title: ['наши', 'врачи'],
  doctors: [
    {
      image: require('../assets/Doctors/0.png'),
      name: 'Халтубаева Юлия',
      position: 'Стоматолог-ортодонт',
      experience: '',
      buttonText: 'ЗАПИСАТЬСЯ НА ПРИЕМ',
    },
    {
      image: require('../assets/Doctors/1.png'),
      name: 'Ткач Сергей',
      position: 'Хирург, ортопед, имплантолог',
      experience: 'Стаж работы: 15 лет',
      buttonText: 'ЗАПИСАТЬСЯ НА ПРИЕМ',
    },
    {
      image: require('../assets/Doctors/2.png'),
      name: 'Мандарханова Александра',
      position: 'Стоматолог, терапевт, ортопед',
      experience: 'Стаж работы: 10 лет',
      buttonText: 'ЗАПИСАТЬСЯ НА ПРИЕМ',
    },
  ],
}

export const reviewsStrings = {
  title: ['отзывы', 'о нас'],
  reviews: [
    {
      title: 'Сердечная благодарность стоматологической клинике "Эко-Дент"',
      message: 'Выражаю сердечную благодарность клинике "Эко-Дент" за доброжелательное, внимательное, чуткое отношение к пациентам! В клинике работают настоящие профессионалы своего дела! Цены, в отличие от других клиник, не завышены, доступны для людей. Администраторы - приятнейшие люди!',
      buttonText: 'Подробнее',
    },
    {
      title: 'Поход к стоматологу?! Оказывается - не страшно! ЭкоДент - оценка "ОТЛИЧНО!"',
      message: 'Поход к стоматологу для меня был всегда самым страшным днем в моей жизни. Для всех, кто испытывал эти чувства: смело идите в клинику "Экодент", по адресу: г. Иркутск, ул. Декабрьских Событий, 109.',
      buttonText: 'Подробнее',
    },
    {
      title: 'Спасибо стомцентру "Эко-дент"',
      message: `Я пошла в клинику, которая находится рядом с работой, это "Эко-дент". Я не ошиблась!\n\nОчень грамотный подход к пациенту. Самое главное - цены приемлемы.\n\nЯ умышленно не буду называть лучших врачей, потому-что все они специалисты высокого класса. Я своим друзьям порекомендовала. Они мне ВЕРЯТ. Спасибо руководителю стомценра "Эко-дент". Написано о души!!!`,
      buttonText: 'Подробнее',
    },
  ],
}

export const footerStrings = {
  columns: [
    {
      title: 'Сервис',
      content: [
        {
          type: 'link',
          title: 'О клинике',
          href: '#',
        },
        {
          type: 'link',
          title: 'Вакансии',
          href: '#',
        },
        {
          type: 'link',
          title: 'Сертификаты и лицензии',
          href: '#',
        }
      ]
    },

    {
      title: 'Пациенту',
      content: [
        {
          type: 'link',
          title: 'Врачи',
          href: '#',
        },
        {
          type: 'link',
          title: 'Услуги',
          href: '#',
        },
        {
          type: 'link',
          title: 'Акции',
          href: '#',
        },
        {
          type: 'link',
          title: 'Новости',
          href: '#',
        },
        {
          type: 'link',
          title: 'Вопросы',
          href: '#',
        },
        {
          type: 'link',
          title: 'Отзывы',
          href: '#',
        },
        {
          type: 'link',
          title: 'Справочник',
          href: '#',
        }
      ]
    },

    {
      title: 'Контакты',
      content: [
        {
          type: 'phone',
          title: '+7 (3952) 252-712',
          href: 'tel:+73952252712'
        },
        {
          type: 'phone',
          title: '+7 (3952) 251-651',
          href: 'tel:+73952251651'
        },
        {
          type: 'phone',
          title: '+7 (924) 613-69-00',
          href: 'tel:+79246136900'
        },
        {
          type: 'text',
          title: 'г. Иркутск ул. Декабрьских Событий 109',
        },
        {
          type: 'link',
          title: 'eko-dent2001@mail.ru',
          href: 'mailto:eko-dent2001@mail.ru'
        }
      ]
    }
  ]
}