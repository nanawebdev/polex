import React from "react";

export default function UiButton({onClick}) {
    return (
        <button type="text" onClick={onClick} className="ui-button">
            <span>?</span>
        </button>
    )
}