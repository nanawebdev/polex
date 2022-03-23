import React from "react";
import Alphabet from "../blocks/Alphabet";
import DistributeItems from "../blocks/DistributeItems/DistributeItems";
import FillBlanks from "../blocks/FillBlanks";
import WriteRightText from "../blocks/WriteRightText/WriteRightText";

export default function ExercisePage({title, element, exs}) {
    return (
        <div className="container">
            { element === "alphabet" && <Alphabet /> }
            { element === "writeRightText" && <WriteRightText wrtExs={exs} /> }
            { element === "fillBlanks" && <FillBlanks words={exs} /> }
            { element === "distributeItems" && <DistributeItems data={exs} /> }
        </div>
    )
}