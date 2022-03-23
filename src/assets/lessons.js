export const lessons = {
    'grammarExs': [
        {
            id: 'wrt-1',
            title: 'Переведи сам',
            type: '',
            element: 'writeRightText',
            exercises: [
                {
                    id: 1,
                    example: 'яблоко',
                    answer: 'jabłko'
                },
                {
                    id: 2,
                    example: 'xуяблоко',
                    answer: '2'
                }
            ]
        },
        {
            id: 'fb-1',
            title: 'Заполни пропущенные буквы',
            type: '',
            element: 'fillBlanks',
            exercises: [
                { id: 1, rightWord: 'anna', trainWord: 'a__a' },
                { id: 2, rightWord: 'test', trainWord: 't__t' },
            ]
        },
        {
            id: 'di-1',
            title: 'Распредели слова',
            type: '',
            element: 'distributeItems',
            exercises: { id: 1, column: ['1', '2'], variants: ['2', '1'], rightOrder: ['1', '2']}

        }
    ],
    'audioExs': [{
        id: 'alphabet',
        title: 'Алфавит',
        type: 'dataAudioExs',
        element: 'alphabet',
        exercises: [
            {
                id: 1,
                type: 'alphabet'
            }
        ]
    }]
}