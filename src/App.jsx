import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { Lightformer, ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Suspense, useContext, useEffect, useRef, useState } from 'react';
import Car from '/public/Car'
import Road2 from '/public/Road2'
import { Effects } from './Effects';
import { UserContext } from './context/UserContext';
import { MobileControlls } from './components/MobileControlls';

const Player = () => {
  const ref = useRef();
  
  // TODO: Make this a global variable
  const { handleEventOn, handleEventOff, left, right } = useContext( UserContext);

  console.log(left)

  useEffect(() => {
    window.addEventListener('keydown', handleEventOn);
    window.addEventListener('keyup', handleEventOff);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleEventOn);
      window.removeEventListener('keyup', handleEventOff);
    };
  });

  // const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    // console.log(state);
    const speed = 8;
    if (right && ref.current.position.x <= 1) {
      ref.current.position.x += delta*speed;
      // ref.current.rotation.y -= delta*4; 
      // ref.current.rotation._z += delta;
    }
    else if (left && ref.current.position.x >= -1) {
      ref.current.position.x -= delta*speed;
      // ref.current.rotation.y += delta*4;  
    }
    else {
      ref.current.rotation.y = Math.PI;
    }
  })

  

  return (
    // eslint-disable-next-line react/no-unknown-property
    <mesh ref={ref} position={[0, 0.25, 0]} scale={0.33} rotation={[0, Math.PI, 0]} >
      <Car />
    </mesh>
  )
}

export const App = () => {
  
  const setCamera = (state) => {
    state.camera.rotation._y = 120;
    state.camera.position.y = 1.5;
    state.camera.fov = 50;
    console.log(state.camera)
  }
  
  const { handleRightOn, handleRightOff, handleLeftOn, handleLeftOff, left, right, setLeft, setRight } = useContext( UserContext);

  const [ldm, setLdm] = useState(true);

  const mediaQuery = window.matchMedia('(max-width: 1024px)')
  // console.log(mediaQuery.matches)
  const boolean = !!mediaQuery.matches;
  console.log(boolean)
  // console.log(mediaQuery.matches)

  return (
    <>
      <h1 className='fixed z-40 w-screen text-[#FF0080] flex justify-center italic mt-20 text-3xl'>Neon Horizon</h1>
      { boolean ? <MobileControlls value={handleLeftOff, handleLeftOn, handleRightOff, handleRightOn}/> : null}
      <button className='fixed z-40 text-white' onClick={ () => setLdm((prev) => !prev)}>LDM</button>
    <Canvas onCreated={setCamera} className='z-0'>
      <Suspense fallback={null}>
        <Player />
        <Road2 />
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
    </>
  )
}
