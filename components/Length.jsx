import React from 'react'

const Length = ({children, value, onUpdate, isRunning, lengthType}) => {

    const handleDecrement = () => {
        if (value > 1) {
            onUpdate((prevValue) => prevValue - 1);
        }
    }

    const handleIncrement = () => {
        if (value < 60) {
            onUpdate( (prevValue) => prevValue + 1 );
        }
    }

    return (
        <div>
            <h2 id={`${lengthType}-label`}>{children}</h2>
            <p><span><button id={`${lengthType}-decrement`} onClick={handleDecrement} disabled={isRunning}>-</button><span id={`${lengthType}-length`}>{value}</span><button id={`${lengthType}-increment`} onClick={handleIncrement} disabled={isRunning}>+</button></span></p>
        </div>
    )
}

export default Length
