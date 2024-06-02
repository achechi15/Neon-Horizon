import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { Lightformer, ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Suspense, useContext, useEffect, useRef, useState } from 'react';
import Car from './models/Car'
import Road2 from './models/Road2'
import { Effects } from './Effects';
import { UserContext } from './context/UserContext';

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
    if (right && ref.current.position.x <= 1) {
      ref.current.position.x += delta*1.25;
    }
    if (left && ref.current.position.x >= -1) {
      ref.current.position.x -= delta*1.25; 
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
    state.camera.rotation._y = 100;
    state.camera.position.y = 1; 
  }
  
  const { handleRightOn, handleRightOff, handleLeftOn, handleLeftOff, left, right, setLeft, setRight } = useContext( UserContext);


  const mediaQuery = window.matchMedia('(max-width: 1024px)')
  // console.log(mediaQuery.matches)

  return (
    <>
      <div className='fixed z-40 w-screen flex justify-around bottom-[5rem]'>
        <button onTouchStart={handleLeftOn} onTouchEnd={handleLeftOff}><img src="../public/arrowIcon.svg" alt="left" className='object-cover h-[8rem] w-[8rem] drop-shadow-xl' /></button>
        <button onTouchStart={handleRightOn} onTouchEnd={handleRightOff}><img src="../public/arrowIcon.svg" alt="right" className='object-cover h-[8rem] w-[8rem] drop-shadow-xl rotate-180' /></button>
      </div>
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
      <Effects />
      {/* <OrbitControls /> */}
      {/* <axesHelper args={[5]} position={[0, 0.5, 0]}/> */}
    </Canvas>
    </>
  )
}
