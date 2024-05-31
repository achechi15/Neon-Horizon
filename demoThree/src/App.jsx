import './App.css';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { Lightformer, ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Suspense, useRef } from 'react';
// import Road from '../public/sceneModel/Scene';
import Car from '../public/Car'
// import Road from '../public/Road';
import Road2 from '../public/Road2'
// import Delorean from '../public/Delorean'
import { Effects } from './Effects';

export const App = () => {
  return (
    <Canvas camera={{position: [0, 10, 0], fov: 10} }>
      <OrbitControls />
      
      {/* <ambientLight intensity={1} /> */}
      <Suspense fallback={null}>
        <Car position={[0, 0.25, 0]} scale={0.33} rotation={[0, Math.PI, 0]} />
        <Road2 />
        {/* <Delorean /> */}
        {/* <Road /> */}
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
      <Effects />
    </Canvas>
  )
}
