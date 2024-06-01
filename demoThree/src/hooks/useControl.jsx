import React, { useState } from 'react'


export const useControl = () => {
    
    const [left, setLeft] = useState(false);
    const [right, setRight] = useState(false);
    
    const handleEventOn = (event) => {
        if (event.key === 'a') handleLeftOn();
        if (event.key === 'd') handleRightOn();
    }

    const handleEventOff = (event) => {
        if (event.key === 'a') handleLeftOff();
        if (event.key === 'd') handleRightOff();
    }

    const handleLeftOn = () => {
        setLeft(true);
    }
    
    const handleLeftOff = () => {   
        setLeft(false);
    }

    const handleRightOn = () => {
        setRight(true);
    }

    const handleRightOff = () => {
        setRight(false);
    }

    return {
        handleEventOn,
        handleEventOff,
        handleLeftOn,
        handleLeftOff,
        handleRightOn,
        handleRightOff, 
        left,
        right,
        setLeft,
        setRight,
    }
}
