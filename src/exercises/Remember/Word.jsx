import React, { useEffect, useState } from "react";

export default function Word({ item, currentClass, showAnswer, changeQ }) {
    const [count, setCount] = useState(0)
    const [resultShow, setResultShow] = useState(false)

    const missedPart = item.missed
    const charsCount = missedPart.length

    console.log(item);

    useEffect(() => {
        if (count === charsCount) {
            setResultShow(true)
            changeQ(1)
        } else {
            changeQ(0)
        }
    }, [count, charsCount, changeQ])

    const Counter = (e, v) => {
        if (e === v) {
            setCount(count + 1)
        }

        if (e !== v && count > 0) {
            setCount(count - 1)
        }

        if (e !== v && count === 0) {
            return
        }

    }

    function renderInputs() {
        return missedPart.split('').map(v => {
            return <div className="remember__input">
                {showAnswer && !resultShow
                    ? <span>{v}</span>
                    : <div
                        className={`remember__wrapper ${resultShow && 'remember__wrapper--show'}`}
                    >
                        <input
                            readOnly={resultShow}
                            disabled={resultShow}
                            type="text"
                            maxLength="1"
                            onChange={
                                (e) => Counter(e.target.value, v.toString())
                            }
                        />
                    </div>
                }

            </div>
        })
    }

    const renderWord = () => {
        if (item.whereMissed === 'missedInCenter') {
            return <>
                <span>{item.left}</span>
                {renderInputs()}
                <span>{item.right}</span>
            </>
        }

        if (item.whereMissed === 'missedInStart') {
            return <>
                {renderInputs()}
                <span>{item.right}</span>
            </>
        }

        if (item.whereMissed === 'missedInFinish') {
            return <>
                <span>{item.left}</span>
                {renderInputs()}
            </>
        }

        return
    }


    return (
        <div className={currentClass}>
            {renderWord()}
        </div>
    )
}