import React from "react";
import { NavLink } from "react-router-dom";
import teacher from './../assets/teach.png'

export default function Home() {
    return (
        <div className="Home">
            <div className="Home__promo container">
                <img src={teacher} alt="teacher" className="Home__img" />
                <p className="Home__title">Игры и Видео Прокачиваем польский</p>

                <div className="Home__courses">
                    <p>А еще наши курсы с носителем языка
                        для максимального результата
                    </p>
                    <NavLink to="/" className="Home__button">Наши курсы</NavLink>
                </div>
                </div>
        </div>
    )
}