import React from "react";

export default function Search({currentClass }) {
    return (
        <section className={currentClass}>
            <ul>
                <li>Грамматика</li>
                <li>Аудирование</li>
                <li>Форма глагола</li>
                <li>Правильные окончания</li>
            </ul>
        </section>
    )
}