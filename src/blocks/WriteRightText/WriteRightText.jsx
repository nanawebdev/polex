import React, { useState } from 'react';
import ExDescription from "../ExDescription";
import WriteRightTextItem from './WriteRightTextItem';

export default function WriteRightText({ wrtExs }) {

    let [currentQ, setCurrentQ] = useState(0)

    const visibleQ = wrtExs.slice(currentQ, currentQ + 1)

    function increaseQ() {
        setCurrentQ(currentQ + 1)
    }

    const renderQ = () => {
   
        return visibleQ.map(q => (
            <WriteRightTextItem
            ex={q}
            key={q.id}
            increaseQ={increaseQ}
        />
        ))
    }

    return (
        <div className="WriteRightText">
            <ExDescription text="Напишите перевод фразы" />
            {renderQ()}
        </div>
    )
}