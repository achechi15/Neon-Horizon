import { Canvas, useFrame } from '@react-three/fiber'
import Car from '../models/Car'
import { OrbitControls, Environment, Lightformer } from '@react-three/drei'
import Home from '../models/Home';
import { Effects } from '../Effects';

// const CameraMove = () => {
//     useFrame((state, delta) => {
//         const camera = state.camera;
        
//     }) 
// }

export const HomeScene = () => {

    const setCamera = (state) => {
        console.log(state)
        state.camera.position.x = 7;
        state.camera.position.y = 2;
        state.camera.position.z = 1;
    }

    return (
        <Canvas onCreated={setCamera}>
            <Car position={[0, 0.5, 0]} rotation={[0, Math.PI/4, 0]} />
            <Home />
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
            <OrbitControls />
            {/* <axesHelper args={[5]} position={[0, 0.5, 0]}/> */}
            <Effects />
            {/* <CameraMove /> */}
        </Canvas>
    )
}
