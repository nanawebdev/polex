import React, { useState } from "react";

export default function AccountItem({ value, title }) {
    const [isReduct, setIsReduct] = useState(false)

    const onClickHandler = () => {
        setIsReduct(true)
    }
    
    return (
        <div className="AccountItem">
            <span>{title}</span>
            {
                isReduct
                    ? <input placeholder={value} type="text" />
                    : <button
                        type="button"
                        onClick={() => onClickHandler()}
                    >{value}</button>
            }
        </div>
    )
}