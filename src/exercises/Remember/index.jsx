import React, { useEffect, useState } from "react";
import Tip from "../../elements/Tip";
import Word from "./Word";

export default function Remember({ data }) {
    const [rightWsCount, setRightWsCount] = useState(0)
    const [isShow, setIsShow] = useState(false)
    const wordsCount = data.items.length
    const [allRight, setAllRight] = useState(false)

    useEffect(() => {
        if (rightWsCount === wordsCount) {
            setAllRight(true)
        }
    }, [rightWsCount, wordsCount])

    const changeQ = (int) => {
        setRightWsCount(rightWsCount + int)
    }



    const renderWords = () => {
        return data.items.map(v => {
            return <Word
                changeQ={changeQ}
                showAnswer={isShow}
                key={v.id}
                item={v}
                currentClass="remember__word" />
        })
    }

    return (
        <div className="remember">
            <Tip text={data.description} />

            <div className="container remember__content">
                <div className="remember__words">
                    {renderWords()}
                </div>

                <button
                    disabled={allRight}
                    type="button"
                    className="remember__button"
                    onClick={() => setIsShow(!isShow)}
                >
                    {isShow ? 'Скрыть' : 'Показать'}
                </button></div>

        </div>
    )
}