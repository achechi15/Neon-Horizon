import { Canvas, useFrame } from '@react-three/fiber';
import { Lightformer, ContactShadows, Environment, OrbitControls, Loader } from '@react-three/drei'
import { Suspense, useContext, useEffect, useRef, useState } from 'react'
import { Effects } from '../Effects';
import { UserContext } from '../context/UserContext';
import * as THREE from 'three';
import { RoadScene } from './RoadScene';

export const Scene = () => {
    
    const { ldm } = useContext( UserContext )

    const setCamera = (state) => {
        state.camera.rotation._y = 120;
        state.camera.position.y = 1.5;
        state.camera.fov = 50;
        console.log(state.camera)
    }
    


    return (
    <>
        <Canvas onCreated={setCamera}>
            <Suspense fallback={null}>
                <RoadScene />
            </Suspense> 
            <Environment resolution={512}>
                {/* Ceiling */}
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
                <Lightformer intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />
                {/* Sides */}
                <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
                <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
                {/* Key */}
                <Lightformer form="ring" color="red" intensity={10} scale={2} position={[10, 5, 10]} onUpdate={(self) => self.lookAt(0, 0, 0)} />
            </Environment>
            {ldm && <Effects />}
            <OrbitControls />
            {/* <axesHelper args={[5]} position={[0, 0.5, 0]}/> */}
            </Canvas>
    <Loader />
    </>
    )
}
