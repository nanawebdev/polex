import React, { useState } from "react";
import { useMatch, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import ExercisePage from "./ExercisePage";
import { lessons } from "./../assets/lessons"
import WriteRightText from "../blocks/WriteRightText";

export default function Exercises() {
    const routeMatch = useMatch("/Exercises/:id")
    const paramsId = useParams().id
    const [theme, setTheme] = useState('Грамматика')
    const currentTypeOfExs = theme === 'Грамматика' ? lessons.grammarExs : lessons.audioExs

    const renderExs = () => {
        return currentTypeOfExs.map(v => {
            return <li key={v.id} className="Exercises__bubble">
                <NavLink to={`/Exercises/${v.id}`}>
                    <p>{v.title}</p>
                </NavLink>
            </li>
        })
    }

    const renderExircisePage = () => {
        const exEl = currentTypeOfExs.find(v => v.id === paramsId)

        return <ExercisePage
            element={exEl.element}
            exs={exEl.exercises}
            title={exEl.title}
        />
    }

    return routeMatch ? (
        renderExircisePage()
    ) : (
        <div className="Exercises container">
            <div className="Exercises__start">

                <button
                    className={theme === 'Грамматика' ? 'active' : ''}
                    onClick={() => setTheme('Грамматика')}
                >
                    Грамматика
                </button>

                <button
                    className={theme === 'Аудирование' ? 'active' : ''}
                    onClick={() => setTheme('Аудирование')}
                >
                    Аудирование
                </button>
            </div>

            <ul className="Exercises__items">
                {renderExs()}
            </ul>

            <WriteRightText />
        </div>
    )
}