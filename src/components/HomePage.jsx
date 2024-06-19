import { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';
import { HomeScene } from './HomeScene';


export const HomePage = () => {

    const { setInGame, bestScore } = useContext(UserContext)
    const navigate = useNavigate();
    const startGame = () => {
        setInGame(true);
        navigate("/game");
    }

    useEffect(() => {
        const handleKeyPress = (event) => {
            console.log(event.key);
            if (event.key === 'Enter') {
                startGame();
            }
        }

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        }
    }, [])

    return (
        <>
            <div className='fixed z-40  grid grid-rows-3 grid-cols-1 place-items-center w-screen mt-20'>
                <h1>NEON HORIZON</h1>
                <h2>Best Score: {bestScore}</h2>
                <button onClick={() => startGame()} className=' text-black p-2 border-solid border-2 border-black bg-[#c6c3cb] backdrop-blur-xl hover:bg-[#fbcf07]' >Play</button>
            </div>
            <HomeScene />
        </>
    )
}
