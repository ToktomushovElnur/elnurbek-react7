import React, { useCallback, useState } from 'react';

const Buttons = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    // Используем useCallback для мемоизации функций обработчиков
    const handleClickOne = useCallback(() => {
        setCounterOne(counterOne + 1);
        console.log(`Button One Clicked! Counter One: ${counterOne}`);
    }, [counterOne]);

    const handleClickTwo = useCallback(() => {
        setCounterTwo(counterTwo + 1);
        console.log(`Button Two Clicked! Counter Two: ${counterTwo}`);
    }, [counterTwo]);

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
