import React from "react";
import AccountItem from "../blocks/AccountItem";
// import { setAccountData, clearAccountData } from "./accountSlice";

export default function Account() {
    const user = {
        id: 1,
        name: 'Anna',
        mail: 'pochta@gmail.com',
        points: 1000,
        completedExs: 100
    }

    // const [redactMode, setRedactMode] = useState(false)


    return (
        <div className="Account container">

            <div className="Account__bio">
                <div className="Account__avatar"></div>
                <div>
                    <AccountItem value={user.name} title="Имя" />
                    <AccountItem value={user.mail} title="Почта" />
                    <AccountItem value={user.points} title="Баллы" />
                    <AccountItem value={user.completedExs} title="Пройдено упражнений" />
                </div>

                <button 
                    type="button" 
                    className="Account__save"
                    
                    >
                        Save
                    </button>
            </div>

        </div>
    )
}