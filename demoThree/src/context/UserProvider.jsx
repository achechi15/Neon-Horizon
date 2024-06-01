import React, { useState } from 'react'
import { UserContext } from './UserContext'
import { useControl } from '../hooks/useControl'

export const UserProvider = ({ children }) => {
    
    const { handleRightOn, handleRightOff, handleLeftOn, handleLeftOff, handleEventOn, handleEventOff, left, right } = useControl();


    return (
        <UserContext.Provider value={ {handleRightOn, handleRightOff, handleLeftOn, handleLeftOff, handleEventOn, handleEventOff, left, right} }>
            { children }
        </UserContext.Provider>
    )
}
