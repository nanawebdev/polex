import React from "react";
import Alphabet from "../../exercises/Alphabet";
import DistributeItems from "../../exercises/DistributeItems";
import FillBlanks from "../../exercises/FillBlanks";
import WriteRightText from "../../exercises/WriteRightText";

export default function Exercise({title, element, exs}) {
    return (
        <div className="container">
            { element === "alphabet" && <Alphabet /> }
            { element === "writeRightText" && <WriteRightText wrtExs={exs} /> }
            { element === "fillBlanks" && <FillBlanks words={exs} /> }
            { element === "distributeItems" && <DistributeItems data={exs} /> }
        </div>
    )
}