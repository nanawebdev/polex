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
                        className={`remember__input-wrapper ${resultShow && 'remember__input-wrapper--show'}`}
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
            return <div className={currentClass}>
                <div className="remember__chars-inputs">
                    <span>{item.left}</span>
                    {renderInputs()}
                    <span>{item.right}</span>
                </div>
                <div className="remember__translate">({item.translate})</div>
            </div>
        }

        if (item.whereMissed === 'missedInStart') {
            return <div className={currentClass}>
                <div className="remember__chars-inputs">
                    {renderInputs()}
                    <span>{item.right}</span>
                </div>
                <div className="remember__translate">({item.translate})</div>
            </div>
        }

        if (item.whereMissed === 'missedInFinish') {
            return <div className={currentClass}>
                <div className="remember__chars-inputs">
                    <span>{item.left}</span>
                    {renderInputs()}
                    </div>
                <div className="remember__translate">({item.translate})</div>
            </div>
        }

        return
    }


    return (
        <div>
            {renderWord()}
        </div>
    )
}