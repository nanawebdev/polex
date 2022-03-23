import React, { useEffect, useState } from "react";

export default function WriteRightTextItem({ ex, style, increaseQ }) {

    const [value, setValue] = useState('')
    const [isRight, setIsRight] = useState(false);
    const [currentClass, setCurrentClass] = useState('')

    const isEmpty = !value.length;
    const wrtEx = ex
    const increase = increaseQ

    useEffect(() => {
        setIsRight(value === wrtEx.answer);
        isEmpty && setCurrentClass('WriteRightText__answer--hidden');

    }, [value, isEmpty, wrtEx]);

    function onClickHandler() {
        if (isEmpty) return;
        setCurrentClass('WriteRightText__answer--' + (isRight ? 'correct' : 'incorrect'));

    }

    function showNext() {
        isRight && increase()
    }

    return (
        <div className="WriteRightText__element" style={{ style }}>

            <div className="WriteRightText__example">
                <p>{wrtEx.example}</p>
            </div>

            <div className="WriteRightText__block">
                <input
                    value={value}
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                />

                <div className={`WriteRightText__answer ${currentClass}`}>{isRight ? 'Все верно!' : `Правильный ответ: ${wrtEx.answer}`}</div>
            </div>

            <button
                type="button"
                onClick={onClickHandler}
            >
                <span>Проверить</span>
            </button>

            <button
                disabled={!isRight}
                type="button"
                onClick={showNext}
            >
                <span>Следующее</span>
            </button>
        </div>

    )
}