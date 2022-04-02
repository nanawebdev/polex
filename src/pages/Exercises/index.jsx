import React from "react";
// import borderLight from "./../../assets/svg/borderLight.svg"
// import Search from "./Search";
// import Filters from "./Filters";
// import SvgElement from "../../elements/SvgElement";
import { useMatch, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import Exercise from "../Exercise";
import { lessons } from "../../assets/lessons"
// import { BUCKET_URL } from "../../constants";

export default function Exercises() {
    const routeMatch = useMatch("/Exercises/:id")
    const paramsId = useParams().id
    const lessonsData = lessons.data

    const renderExs = () => {
        return lessonsData.map(v => {
            return <li
                key={v.id}
                className="Exercises__bubble"
            >
                <NavLink to={`/Exercises/${v.id}`}>
                    <span>{v.title}</span>
                    <span>{v.description}</span>
                </NavLink>
            </li >
        })
    }

    const renderExircisePage = () => {
        const item = lessonsData.find(v => v.id === paramsId)
  
        return <Exercise
            data={item}
            element={item.element}
        />
    }

    return routeMatch ? (
        lessonsData.length !== 0 && renderExircisePage()
    ) : (<div className="exerscises">
        {/* <div className="exerscises__top">
            <div className="center">
            <Search
                title="Поиск по упражнениям:"
                currentClass="exersices__search"
            />

            <Filters currentClass="exercises__tabs" />
            <SvgElement svg={borderLight} currentClass="exercises__svg bottom-line__svg" /></div>
           
        </div> */}

        <ul className="exercises__items">
            {renderExs()}
        </ul>

    </div>
    )
}