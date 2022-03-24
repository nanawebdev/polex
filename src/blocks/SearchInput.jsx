import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchInput({ data }) {
    const [value, setValue] = useState()

    // const filteredValues = data.filter(v => v.tags.includes(value))


    return (
        <div className="SearchInput">

            <input
                type="text"
                value={value}
                onChange={(e) => { setValue(e.target.value) }}
            />

            <button type="button">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    )
}