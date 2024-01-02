// Buttons.js
import React, { useMemo, useState } from 'react';

const Buttons = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const handleClickOne = useMemo(() => {
        return () => {
            setCounterOne(counterOne + 1);
            console.log(`Button One Clicked! Counter One: ${counterOne}`);
        };
    }, [counterOne]); // Мемоизация функции для кнопки 1

    const handleClickTwo = useMemo(() => {
        return () => {
            setCounterTwo(counterTwo + 1);
            console.log(`Button Two Clicked! Counter Two: ${counterTwo}`);
        };
    }, [counterTwo]); // Мемоизация функции для кнопки 2

    return (
        <div>
            <p>Counter One: {counterOne}</p>
            <button onClick={handleClickOne}>Increment Counter One</button>
            <p>Counter Two: {counterTwo}</p>
            <button onClick={handleClickTwo}>Increment Counter Two</button>
        </div>
    );
};

export default Buttons;
