import React, { useEffect, useState } from "react";
import UiButton from "./UiButton";

export default function Sentence({ key, leftPart, rightAnswer, word, rightPart }) {
    const [isRight, setIsRight] = useState(false)
    const [value, setValue] = useState('')
    const [isShown, setIsShown] = useState('')

    useEffect(() => {
        value.toLowerCase() === rightAnswer.toLowerCase() ? setIsRight(true) : setIsRight(false)
    }, [value, rightAnswer])

    const renderPart = (part) => {
        return part.split(' ').map(v => {
            return <span>
                {v}
            </span>
        })

    }

    renderPart(leftPart)

    return (
        <div className={`PutRightForm__item ${isRight && 'PutRightForm__item--done'}`} key={key}>
            {renderPart(leftPart)}
            <div class="PutRightForm__input">
                <div class={`PutRightForm__helper ${isShown && 'PutRightForm__helper--show'}`}>
                {isShown ? rightAnswer : ''}
                </div>
                <input
                    style={{width: `${rightAnswer.length * 20}px`}}
                    readOnly={isRight}
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>

            {(!value || !isRight) && <UiButton onClick={() => setIsShown(!isShown)} />}
            <span>({word})</span>
            {renderPart(rightPart)}
        </div>
    )
}