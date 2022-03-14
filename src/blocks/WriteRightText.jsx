import React, { useEffect, useState } from "react";

const data = {
    id: 1,
    example: 'яблоко',
    answer: 'jabłko'
}

export default function WriteRightText() {
    const [value, setValue] = useState('')
    const [isRight, setIsRight] = useState(false)
    const [isClear, setIsClear] = useState(true)

    useEffect(() => {
        value === data.answer ? setIsRight(true) : setIsRight(false)
        value === '' ? setIsClear(true) : setIsClear(false)
    }, [value])

    const cls = 'WriteRightText__answer WriteRightText__answer--'+(
        isClear ? 'hidden' : (
            isRight ? 'correct': 'incorrect'
        )
    );

    return (
        <div className="WriteRightText">
            <div className="WriteRightText__example">
                <p>{data.example}</p>
            </div>

            <div className="WriteRightText__block">
                <input
                    value={value}
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                />

                <div className={cls}>{isRight ? 'Kebab': data.answer}</div>



            </div>

        </div>
    )
}