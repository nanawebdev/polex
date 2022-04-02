import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation({ lis, currentClass }) {

    const renderNavigationItems = () => {
        return lis.map(v => {
            return <li key={v.id}>
                <NavLink to={v.link}>{v.title}</NavLink>
            </li>
        })
    }

    return (
        <ul className={`navigation ${currentClass}`}>
            {lis.lingth !== 0 && renderNavigationItems()}
        </ul>
    )
}