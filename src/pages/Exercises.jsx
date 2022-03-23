import React, { useState } from "react";
import { useMatch, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import ExercisePage from "./ExercisePage";
import { lessons } from "./../assets/lessons"
import { BUCKET_URL } from "../constants";

export default function Exercises() {
    const routeMatch = useMatch("/Exercises/:id")
    const paramsId = useParams().id
    const [theme, setTheme] = useState('Грамматика')
    const currentTypeOfExs = theme === 'Грамматика' ? lessons.grammarExs : lessons.audioExs

    const linkImg = theme === 'Грамматика'
        ? BUCKET_URL + '/polexAssets/polskaBg.jpg'
        : BUCKET_URL + '/polexAssets/river.jpg'


    const renderExs = () => {
        return currentTypeOfExs.map(v => {
            return <li
                key={v.id}
                className="Exercises__bubble"
                style={{ background: `url(${linkImg})` }}
            >
                <NavLink to={`/Exercises/${v.id}`}>
                    <p>{v.title}</p>
                </NavLink>
            </li >
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
        </div>
    )
}