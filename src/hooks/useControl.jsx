import React, { useState, useRef } from 'react'


export const useControl = () => {
    
    // const [left, setLeft] = useState(false);
    // const [right, setRight] = useState(false);
    
    const left = useRef(false);
    const right = useRef(false);

    const handleEventOn = (event) => {
        if (event.key === 'a' || event.key === 'ArrowLeft') handleLeftOn();
        if (event.key === 'd' || event.key === 'ArrowRight') handleRightOn();
    }

    const handleEventOff = (event) => {
        if (event.key === 'a' || event.key === 'ArrowLeft') handleLeftOff();
        if (event.key === 'd' || event.key === 'ArrowRight') handleRightOff();
    }

    const handleLeftOn = () => {
        left.current = true;
    }
    
    const handleLeftOff = () => {   
        left.current = false;
    }

    const handleRightOn = () => {
        right.current = true;
    }

    const handleRightOff = () => {
        right.current = false;
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
        // setLeft,
        // setRight,
    }
}
