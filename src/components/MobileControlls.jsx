import { useContext } from "react"
import { UserContext } from "../context/UserContext"


export const MobileControlls = () => {
    
    const { handleLeftOff, handleLeftOn, handleRightOff, handleRightOn} = useContext(UserContext);

    return (
        <div className='fixed z-40 w-screen grid grid-flow-col justify-stretch bottom-0 h-[25rem]'>
            <button onTouchStart={handleLeftOn} onTouchEnd={handleLeftOff}><img src="/arrowIcon.png" alt="left" className='object-cover drop-shadow-xl' draggable='false' /></button>
            <button onTouchStart={handleRightOn} onTouchEnd={handleRightOff}><img src="/arrowIcon.png" alt="right" className='object-cover drop-shadow-xl rotate-180' draggable='false' /></button>
        </div>
    )
}
