import React from 'react'

const Length = ({children, value, onUpdate}) => {

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
            <h2>{children}</h2>
            <p><span><button onClick={handleDecrement}>-</button>{value}<button onClick={handleIncrement}>+</button></span></p>
        </div>
    )
}

export default Length
