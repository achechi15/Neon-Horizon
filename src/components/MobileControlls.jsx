import React from 'react'



export const MobileControlls = ({ handleLeftOff, handleLeftOn, handleRightOff, handleRightOn }) => {
    return (
        <div className='fixed z-40 w-screen flex justify-around bottom-[5rem]'>
            <button onTouchStart={handleLeftOn} onTouchEnd={handleLeftOff}><img src="../public/arrowIcon.svg" alt="left" className='object-cover h-[8rem] w-[8rem] drop-shadow-xl' /></button>
            <button onTouchStart={handleRightOn} onTouchEnd={handleRightOff}><img src="../public/arrowIcon.svg" alt="right" className='object-cover h-[8rem] w-[8rem] drop-shadow-xl rotate-180' /></button>
        </div>
    )
}
