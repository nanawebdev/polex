import React from "react";
import Tip from "../../blocks/Tip";
import Sentence from "./Sentence";

export default function PutRightForm({data}) {

    const items = data.items

    const renderItems = () => {
        return items.map(v => {
            return <Sentence
                key={v.id}
                leftPart={v.leftPart}
                rightAnswer={v.rightAnswer}
                word={v.word}
                rightPart={v.rightPart}
            />
        })
    }

    return (
        <div className="putRightForm">
            <Tip text="Proszę uzupełnić zdania brakującymi słowami." />
            <div className="container putRightForm__items">
                {renderItems()}
            </div>
        </div>
    )
}