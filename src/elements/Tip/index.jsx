import React from 'react';
import SvgElement from '../SvgElement';
import borderDark from "./../../assets/svg/borderDark.svg"

export default function Tip({text}) {
    return (
        <div className='tip'>
            <div className="container">
            <h3>Задание:</h3>{text}</div>
            <SvgElement currentClass="bottom-line__svg" svg={borderDark} />
        </div>
           
    )
}