import React from "react";

export default function SvgElement({svg, currentClass}) {
    return (
        <div 
            className={currentClass} 
            style={{ backgroundImage: `url("${svg}")` }} />
    )
}