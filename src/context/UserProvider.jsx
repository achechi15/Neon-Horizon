import { useEffect, useState } from 'react'
import { UserContext } from './UserContext'
import { useControl } from '../hooks/useControl'

export const UserProvider = ({ children }) => {
    
    const { handleRightOn, handleRightOff, handleLeftOn, handleLeftOff, handleEventOn, handleEventOff, left, right } = useControl();
    const [score, setScore] = useState(0);
    const [ldm, setLdm] = useState(true);
    const [playerRef, setPlayerRef] = useState(null);
    const [obstacleRef, setObstacleRef] = useState(null);
    const [ speedAnimation, setSpeedAnimation ] = useState(40)
    const [roadAnimations, setRoadAnimations] = useState(null);
    const [inGame, setInGame] = useState(false);
    const [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        const aux = window.localStorage.getItem('score')
        // console.log(aux)
        if (aux != null) {
            setBestScore(aux);
        }
    }, [])

    const handleLose = () => {
        setInGame(false);
        handleLeftOff();
        handleRightOff();
        if (score > bestScore) {
            window.localStorage.setItem("score", score);
        }
        setScore(0);
    }
    

    return (
        <UserContext.Provider value={ {handleRightOn, handleRightOff, handleLeftOn, handleLeftOff, handleEventOn, handleEventOff, left, right, score, setScore, ldm, setLdm, playerRef, setPlayerRef, obstacleRef, setObstacleRef, roadAnimations, setRoadAnimations, inGame, setInGame, bestScore, setBestScore, handleLose, speedAnimation, setSpeedAnimation } }>
            { children }
        </UserContext.Provider>
    )
}
