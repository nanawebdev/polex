export const lessons = {
    data: [
        {
            id: '1',
            title: 'Задание 1',
            description: 'Поставь глагол в нужную форму',
            tags: ['grammar'],
            element: 'putInRightForm',
            items: [
                { id: 1, leftPart: 'Jarek', rightPart: 'studentem i lubi frytki z keczupem', rightAnswer: 'jest', word: 'być' },
                { id: 2, leftPart: 'Ja', rightPart: 'wegetarianką', rightAnswer: 'jestem', word: 'być' },
                { id: 3, leftPart: 'Czy ty', rightPart: 'lekarzem?', rightAnswer: 'jesteś', word: 'być' },
                { id: 4, leftPart: 'One', rightPart: 'studentkami polonistyki.', rightAnswer: 'są', word: 'być' },
                { id: 5, leftPart: 'Ja', rightPart: 'uczniem', rightAnswer: 'Jestem', word: 'być' },
                { id: 6, leftPart: 'Ja', rightPart: 'Jacek', rightAnswer: 'Jestem', word: 'być' },
                { id: 7, leftPart: 'Jacek', rightPart: 'bratem Ani', rightAnswer: 'jest', word: 'być' },
                { id: 8, leftPart: 'Agnieszka Kowalska', rightPart: 'polką', rightAnswer: 'jest', word: 'być' },
                { id: 9, leftPart: 'Wy', rightPart: 'świetnymi studentami.', rightAnswer: 'Jesteście', word: 'być' },
                { id: 10, leftPart: 'Czy to', rightPart: 'twoje dzieci?', rightAnswer: 'są', word: 'być' },
                { id: 11, leftPart: 'To nie', rightPart: 'twoja sprawa', rightAnswer: 'jest', word: 'być' },
                { id: 12, leftPart: 'Dlaczego wy nie', rightPart: 'na lekcjach?', rightAnswer: 'jesteście', word: 'być' },
                { id: 13, leftPart: 'Czy wy ', rightPart: ' głodni?', rightAnswer: 'jesteście', word: 'być' },
            ]
        },
        {
            id: '2',
            title: 'Алфавит',
            description: 'Послушай и повтори',
            element: 'alphabet',
            tags: ['audition'],
        },
        {
            id: '3',
            title: 'Задание 2',
            description: 'Подставь диграф или букву',
            element: 'remember',
            tags: ['grammar'],
            items: [
                { id: 1, left: 'wi', missed: 'dz', right: 'ę', whereMissed: 'missedInCenter', translate: 'вижу' },
                { id: 2, left: 'mo', missed: 'rz', right: 'e', whereMissed: 'missedInCenter', translate: 'море' },
                { id: 3, missed: 'cz', right: 'ysty', whereMissed: 'missedInStart', translate: 'чистый' },
                { id: 4, left: 'le', missed: 'cz', whereMissed: 'missedInFinish', translate: 'но' },
                { id: 5, left: 'kupowa', missed: 'ć', whereMissed: 'missedInFinish', translate: 'покупать' },
                { id: 6, missed: 'ś', right: 'niadanie', whereMissed: 'missedInStart', translate: 'завтрак' },
                { id: 7, missed: 'ź', right: 'le', whereMissed: 'missedInStart', translate: 'плохо' },
                { id: 8, left: 'go', missed: 'ś', right: 'ci', whereMissed: 'missedInCenter', translate: 'гости' },
            ]
        },
    ]
}