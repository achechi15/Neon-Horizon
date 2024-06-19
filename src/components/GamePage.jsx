import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { MobileControlls } from "./MobileControlls";
import { Scene } from "./Scene";
import { useNavigate } from "react-router-dom";

export const GamePage = () => {
    
    const mediaQuery = window.matchMedia('(max-width: 1024px)')
    const boolean = !!mediaQuery.matches;
    
    const {score, ldm, setLdm, bestScore, inGame} = useContext(UserContext);

    const navigate = useNavigate();
    useEffect(() => {
        if(!inGame) {
            navigate("/")
        }
    }, [inGame])

    return (
        <>
            <div className='fixed z-40 w-screen align text-center mt-16'>
            <h1 className='text-white text-2xl mb-1'>SCORE: {score}</h1>
            <h2 className='text-white'>Best Score: {bestScore}</h2>
            </div>
                { boolean && <MobileControlls />}
                <div className='fixed z-40 bottom-0 w-screen flex justify-between p-6'>
                    <button className=' text-black p-2 border-solid border-2 border-black bg-[#f6f6f6] backdrop-blur-xl' onClick={ () => { 
                    setLdm((prev) => !prev);
                    }} style={{ background: ldm ? '#c6c3cb' : '#fbcf07'}}><p>LDM</p></button>
                    <p className='text-white p-2'>Created by achechi15</p>
                </div>
                <Scene />
        </>
    )
}
