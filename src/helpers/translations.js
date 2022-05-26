export const EN = {
    messages: 'Messages',
    auth: 'Auth',
    cats: 'Cats',
    logOut: 'Log out',
    'Remember me?': 'Remember me?',
    login: 'Login',
    password: 'Password',
    armenian: 'Armenian',
    russian: 'Russian',
    english: 'English',
}
export const RU = {
    messages: 'Сообщения',
    auth: 'Вход',
    cats: 'Котаны',
    logOut: 'Выйти',
    'Remember me?': '',
    login: 'Логин',
    password: 'Пароль',
    armenian: 'Армянский',
    russian: 'Русский',
    english: 'Английский'
}
export const AM = {
    messages: 'Նամակներ',
    auth: 'Մուտք',
    cats: 'Կատուներ',
    logOut: 'Դուրս գալ',
    'Remember me?': '',
    login: 'մուտքանուն',
    password: 'Գաղտնաբառ',
    armenian: 'Հայերեն',
    russian: 'Ռուսերեն',
    english: 'Անգլերեն'
}

const languages = {
    AM,
    RU,
    EN
}

export const getLanguage = lang => languages[lang]
