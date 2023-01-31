import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Movebutton = ({ id, name }) => {
    let [count, setCount] = useState(1);
    const location = useLocation();
    const navigate = useNavigate();
    
    
    const increment = () => {
        setCount((count + 1) % 13);
        if (count === 12) {
            setCount(1);
        }
    };

    const decrement = () => {
        setCount(count - 1);
        if (count <= 1) {
            setCount(12);
        }
    };

    if (count === id) {
        setTarget(target=`${name}`);
    }

    let layout = count;

    return (
        <div>
            <p>layout: {count}</p>
            <button onClick={decrement}>{name}</button>
            <button onClick={increment}>{name}</button>
        </div>
    );
};

export default Movebutton;