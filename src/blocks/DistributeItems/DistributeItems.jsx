import React, { useState } from "react";
import ExDescription from "../ExDescription";
import DistributeItemsInput from "./DistributeItemsInput";

export default function DistributeItems({ data }) {
    const [value, setValue] = useState()

    const inputQuantity = data.column.length

    console.log(data.column.length);


    const renderInputs = () => {
        return <DistributeItemsInput />
    }

    const render = () => {
        for (let index = 0; index < inputQuantity; index++) {
            return renderInputs()
        }
    }




    return (
        <div className="DistributeItems">
            <ExDescription text="Распредели слова" />

            <div style={{ display: 'flex' }}>
                <ul>
                    <li>1</li>
                    <li>2</li>
                </ul>


                <ul>
                    {render()}
                </ul>

            </div>

            <ul>
                <li>
                    <button type="button">1</button>
                    <button type="button">2</button>
                </li>
            </ul>


        </div>
    )
}