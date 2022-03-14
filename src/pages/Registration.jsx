import React from "react";

export default function RegistrationPage() {
    const onChangeHandler = () => {
        console.log(666);
    }

    return (
        <div>
            <input type="text" onChange={onChangeHandler}/>
        </div>
    )
}