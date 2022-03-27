import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container">
            <h2>Упс, такой страницы нет</h2>

            <NavLink to="/" className="ui-navlink">Вернуться на главную</NavLink>
        </div>
    )
}