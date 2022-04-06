import React from "react";
import Alphabet from "../../exercises/Alphabet";
// import DistributeItems from "../../exercises/DistributeItems";
// import FillBlanks from "../../exercises/FillBlanks";
import PutRightForm from "../../exercises/PutRightForm";
import Remember from "../../exercises/Remember";
// import WriteRightText from "../../exercises/WriteRightText";

export default function Exercise({data, element}) {
    return (
        <div>
            { element === "alphabet" && <Alphabet data={data} /> }
            { element === "putRightForm" && <PutRightForm data={data} /> }
            { element === "remember" && <Remember data={data} /> }
            {/* { element === "writeRightText" && <WriteRightText data={data} /> }
            { element === "fillBlanks" && <FillBlanks data={data} /> }
            { element === "distributeItems" && <DistributeItems data={data} /> } */}
        </div>
    )
}