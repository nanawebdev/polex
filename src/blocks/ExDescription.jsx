import React from "react";

export default function ExDescription({text}) {
    return (
        <div className="ExDescription">
            <p>Задание: <span>{text}</span></p>
        </div>
    )
}