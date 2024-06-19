import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const LosePage = () => {
    const { setInGame } = useContext(UserContext);
  return (
    <div className='flex items-center justify-center'>
        <h1 className='text-white inline'>
            You have lost
        </h1>
        <button className='text-black p-2 border-solid border-2 border-black bg-[#f6f6f6] backdrop-blur-xl' onClick={ () => setInGame(true)}><p>Try Again</p></button>
    </div>
  )
}
