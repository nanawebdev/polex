import React from "react";
import Alphabet from "../blocks/Alphabet";

export default function ExercisePage({title, element, exs}) {
    return (
        <div className="container">
            { element === "alphabet" && <Alphabet /> }
        </div>
    )
}