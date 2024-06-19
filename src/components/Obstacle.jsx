import { useFrame } from '@react-three/fiber'
import {useState, useRef, useContext} from 'react'
import * as THREE from 'three';
import { UserContext } from '../context/UserContext';

export const Obstacle = () => {
    const obstacle = useRef();
    const OFFSET = 5
    const getRandomNumber = (min, max) => {
        return Math.random() * (max - min) + min;
    }
    const { inGame, setObstacleRef } = useContext( UserContext );
    let speed = getRandomNumber(20, 40);
    useFrame((state, delta) => {
        if (inGame) {
            obstacle.current.position.z += speed*delta;
            obstacle.current.rotation.x += delta;
            obstacle.current.rotation.y += delta;
            
            setObstacleRef(obstacle)
    
            if (obstacle.current.position.z > OFFSET) {
                // console.log(speed);
                speed =  getRandomNumber(5, 10);
                obstacle.current.position.z = -20;
                obstacle.current.position.x = (Math.random() * 2) - 1;
            }
        }
    })
    return (
        <mesh ref={obstacle} position={[-1, 0.3, -10]} scale={0.33}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'orange'} />
        </mesh>
    )
}
