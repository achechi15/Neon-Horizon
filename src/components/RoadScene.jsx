import { useContext, useRef } from 'react'
import { Player } from '../components/Player';
import Road2 from "../models/Road2";
import { Obstacle } from '../components/Obstacle';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export const RoadScene = () => {

    const { playerRef, obstacleRef, setInGame, handleRightOff, handleLeftOff, score, setScore, bestScore, setBestScore, handleLose } = useContext( UserContext );
    // const navigate = useNavigate();
    const playerBox = useRef( new THREE.Box3());
    const obstacleBox = useRef( new THREE.Box3());
    // console.log(playerRef.current)
    useFrame( () => {
        if (playerRef && obstacleRef) {
            if (playerRef.current && obstacleRef.current) {
                playerBox.current.setFromObject(playerRef.current);
                obstacleBox.current.setFromObject(obstacleRef.current);
                if (playerBox.current.intersectsBox(obstacleBox.current)) {
                    setInGame(false);
                    handleLose();
                    handleLeftOff();
                    handleRightOff();
                    if (score > bestScore) setBestScore(score);

                    setScore(0);
                }
            }
        }
    })

    return (
    <>
        <Player />
        <Obstacle />
        <Road2 />
    </>
  )
}
