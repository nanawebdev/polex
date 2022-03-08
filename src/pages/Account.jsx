import React from "react";

export default function Account() {
    return (
        <div className="Account container">
            <p>Ваш аккаунт</p>
            <div className="Account__info">
                <div className="Account__avatar"></div>
                <div>
                    <div className="Account__item">Имя: Anna</div>
                    <div className="Account__item">Почта: pochta@gmail.com</div>
                    <div className="Account__item">Баллы: 1000</div>
                    <div className="Account__item">Пройдено упражнений: 100</div>
                </div>
            </div>

            <button type="button">Выйти из аккаунта</button>

        </div>
    )
}