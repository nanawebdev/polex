import React from "react";
import footerTop from "./../../assets/svg/footerTop.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import NotFinished from "../NotFinished";
// import { useMatch, useParams } from "react-router";
// import { NavLink } from "react-router-dom";
// import Exercise from "../Exercise";
// import { lessons } from "../../assets/lessons"
// import { BUCKET_URL } from "../../constants";

export default function Exercises() {
    // const routeMatch = useMatch("/Exercises/:id")
    // const paramsId = useParams().id
  
    // const renderExs = () => {
    //     return currentTypeOfExs.map(v => {
    //         return <li
    //             key={v.id}
    //             className="Exercises__bubble"
    //             style={{ background: `url(${linkImg})` }}
    //         >
    //             <NavLink to={`/Exercises/${v.id}`}>
    //                 <p>{v.title}</p>
    //             </NavLink>
    //         </li >
    //     })
    // }

    // const renderExircisePage = () => {
    //     const exEl = currentTypeOfExs.find(v => v.id === paramsId)

    //     return <Exercise
    //         element={exEl.element}
    //         exs={exEl.exercises}
    //         title={exEl.title}
    //     />
    // }

    // return routeMatch ? (
    //     <Exercise />
    // ) : (

    return (
        <div class="exerscises">
            <NotFinished />
            <section class="exersices__search center">
                <h3>Поиск по упражнениям:</h3>
                <div>
                    <input type="text" placeholder="поищем" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>

            </section>

            <section class="exercises__tabs center">
                <ul>
                    <li>Грамматика</li>
                    <li>Аудирование</li>
                    <li>Форма глагола</li>
                    <li>Правильные окончания</li>
                </ul>
            </section>

            <div className="exercises__svg" style={{ backgroundImage: "url(" + footerTop + ")" }}></div>

        </div>
    )
}