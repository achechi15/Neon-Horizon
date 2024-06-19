import {useEffect, useContext, useRef, useState} from 'react'
import { UserContext } from '../context/UserContext';
import { useFrame } from '@react-three/fiber';
import Car from '../models/Car'


export const Player = () => {
    const car = useRef();
    const { handleEventOn, handleEventOff, left, right, setScore, setPlayerRef, inGame } = useContext( UserContext);
    useEffect(() => {
        window.addEventListener('keydown', handleEventOn);
        window.addEventListener('keyup', handleEventOff);
      // Cleanup
        return () => {
        window.removeEventListener('keydown', handleEventOn);
        window.removeEventListener('keyup', handleEventOff);
        };
    });

    useFrame((state, delta) => {
        const speed = 4;
        if (inGame) {
            setScore( prev => prev+speed/4);
            setPlayerRef(car);
        }
        if (right && car.current.position.x <= 1) {
            car.current.position.x += delta*speed;
        }
        else if (left && car.current.position.x >= -1) {
            car.current.position.x -= delta*speed; 
        }
    })
    return (
      // eslint-disable-next-line react/no-unknown-property
        <mesh ref={car} position={[0, 0.25, 0]} scale={0.33} rotation={[0, Math.PI, 0]} >
            <Car />
        </mesh>
    )
}
