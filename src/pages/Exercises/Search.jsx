import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export default function Search({title, currentClass}) {
    return (
        <section className={currentClass}>
        <h3>{title}</h3>
        <div>
            <input type="text" placeholder="поищем" />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

    </section>
    )
}