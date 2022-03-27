import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFinished() {
    return (
        <div class="not-finished">
            <div>
                <h2>Ведутся работы</h2>
                <NavLink to="/">Вернутся на главную</NavLink>
            </div>
        </div>
    )
}