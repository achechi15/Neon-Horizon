import React, { useContext, useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { UserContext } from '../context/UserContext'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./road2.gltf')
  const { actions, names, mixer } = useAnimations(animations, group)
  const { inGame, speedAnimation } = useContext( UserContext );
  mixer.timeScale = speedAnimation;
  useEffect(() => {
    if (inGame) {
      actions[names[0]].reset().play();
      console.log("empieza la animación")
    }
    else {
      actions[names[0]].stop();
      console.log("Ha entrado aqui")
    }
  }, [inGame])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.004}>
          <group name="9ce20f75ba12449eb72f03dae41b5a24fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Moving" position={[0, 0, 3966.667]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Enviroment" scale={[13, 30, 13.98]}>
                    <mesh name="Enviroment_Material001_0" geometry={nodes.Enviroment_Material001_0.geometry} material={materials['Material.001']} />
                    <mesh name="Enviroment_Material001_0_1" geometry={nodes.Enviroment_Material001_0_1.geometry} material={materials['Material.001']} />
                    <mesh name="Enviroment_Material002_0" geometry={nodes.Enviroment_Material002_0.geometry} material={materials['Material.002']} />
                    <mesh name="Enviroment_Material002_0_1" geometry={nodes.Enviroment_Material002_0_1.geometry} material={materials['Material.002']} />
                    <mesh name="Enviroment_Material002_0_2" geometry={nodes.Enviroment_Material002_0_2.geometry} material={materials['Material.002']} />
                    <mesh name="Enviroment_Material002_0_3" geometry={nodes.Enviroment_Material002_0_3.geometry} material={materials['Material.002']} />
                    <mesh name="Enviroment_Material002_0_4" geometry={nodes.Enviroment_Material002_0_4.geometry} material={materials['Material.002']} />
                    <mesh name="Enviroment_Material002_0_5" geometry={nodes.Enviroment_Material002_0_5.geometry} material={materials['Material.002']} />
                    <mesh name="Enviroment_Material002_0_6" geometry={nodes.Enviroment_Material002_0_6.geometry} material={materials['Material.002']} />
                    <mesh name="Enviroment_Material002_0_7" geometry={nodes.Enviroment_Material002_0_7.geometry} material={materials['Material.002']} />
                    <mesh name="Enviroment_Material002_0_8" geometry={nodes.Enviroment_Material002_0_8.geometry} material={materials['Material.002']} />
                    <mesh name="Enviroment_Material002_0_9" geometry={nodes.Enviroment_Material002_0_9.geometry} material={materials['Material.002']} />
                    <mesh name="Enviroment_Material002_0_10" geometry={nodes.Enviroment_Material002_0_10.geometry} material={materials['Material.002']} />
                    <mesh name="Enviroment_Material002_0_11" geometry={nodes.Enviroment_Material002_0_11.geometry} material={materials['Material.002']} />
                    <mesh name="Enviroment_Material002_0_12" geometry={nodes.Enviroment_Material002_0_12.geometry} material={materials['Material.002']} />
                    <mesh name="Enviroment_Material002_0_13" geometry={nodes.Enviroment_Material002_0_13.geometry} material={materials['Material.002']} />
                    <mesh name="Enviroment_Material002_0_14" geometry={nodes.Enviroment_Material002_0_14.geometry} material={materials['Material.002']} />
                  </group>
                  <group name="PalmTree_Left" position={[-7.713, 0, 0]} scale={0.6}>
                    <group name="PalmTreeTopLeft" position={[1.944, 0, 14.65]} scale={0.572}>
                      <mesh name="PalmTreeTopLeft_Material_0" geometry={nodes.PalmTreeTopLeft_Material_0.geometry} material={materials.Material} />
                      <mesh name="PalmTreeTopLeft_Material008_0" geometry={nodes.PalmTreeTopLeft_Material008_0.geometry} material={materials['Material.008']} />
                      <mesh name="PalmTreeTopLeft_Material008_0_1" geometry={nodes.PalmTreeTopLeft_Material008_0_1.geometry} material={materials['Material.008']} />
                    </group>
                    <mesh name="PalmTree_Left_Material009_0" geometry={nodes.PalmTree_Left_Material009_0.geometry} material={materials['Material.009']} />
                    <mesh name="PalmTree_Left_Material010_0" geometry={nodes.PalmTree_Left_Material010_0.geometry} material={materials['Material.010']} />
                  </group>
                  <group name="Road" position={[0, 0, 0.094]} scale={[2.977, 30, 2.977]}>
                    <group name="CenterLine" position={[0, -0.005, 0.01]} scale={[0.026, 0.1, 0.062]}>
                      <mesh name="CenterLine_Material007_0" geometry={nodes.CenterLine_Material007_0.geometry} material={materials['Material.007']} />
                    </group>
                    <group name="SideRight" position={[1.016, 0, 0.007]} rotation={[-Math.PI, 0, 0]} scale={[-0.016, -1, -1]}>
                      <mesh name="SideRight_Material006_0" geometry={nodes.SideRight_Material006_0.geometry} material={materials['Material.006']} />
                    </group>
                    <group name="SideSideLeft" position={[-1.016, 0, 0.007]} rotation={[-Math.PI, 0, 0]} scale={[-0.016, -1, -1]}>
                      <mesh name="SideSideLeft_Material006_0" geometry={nodes.SideSideLeft_Material006_0.geometry} material={materials['Material.006']} />
                    </group>
                    <mesh name="Road_Material005_0" geometry={nodes.Road_Material005_0.geometry} material={materials['Material.005']} />
                    {/* <mesh name="Road_Material005_0" position={[0.5, 0, 0]} geometry={nodes.Road_Material005_0.geometry} material={materials['Material.005']} /> */}
                    {/* <mesh name="Road_Material005_0" position={[-0.25, 0, 0]} geometry={nodes.Road_Material005_0.geometry} material={materials['Material.005']} /> */}
                  </group>
                  <group name="PalmTree_Left001" position={[7.236, 0, 0]} scale={0.6}>
                    <group name="PalmTreeTopLeft001" position={[1.944, 0, 14.65]} scale={0.572}>
                      <mesh name="PalmTreeTopLeft001_Material_0" geometry={nodes.PalmTreeTopLeft001_Material_0.geometry} material={materials.Material} />
                      <mesh name="PalmTreeTopLeft001_Material008_0" geometry={nodes.PalmTreeTopLeft001_Material008_0.geometry} material={materials['Material.008']} />
                      <mesh name="PalmTreeTopLeft001_Material008_0_1" geometry={nodes.PalmTreeTopLeft001_Material008_0_1.geometry} material={materials['Material.008']} />
                    </group>
                    <mesh name="PalmTree_Left001_Material009_0" geometry={nodes.PalmTree_Left001_Material009_0.geometry} material={materials['Material.009']} />
                    <mesh name="PalmTree_Left001_Material010_0" geometry={nodes.PalmTree_Left001_Material010_0.geometry} material={materials['Material.010']} />
                  </group>
                </group>
                <group name="Camera" position={[0, 367.529, 3844.844]} rotation={[-0.043, Math.PI / 2, 0]} scale={100}>
                  <group name="Object_5" />
                </group>
                <group name="BackGround" position={[681.531, 1870.56, -50454.773]} scale={[-49897.676, -50362.871, -8644.265]}>
                  <mesh name="BackGround_Material004_0" geometry={nodes.BackGround_Material004_0.geometry} material={materials['Material.004']} />
                </group>
                <group name="Sun" position={[103.812, 0, -44959.133]} rotation={[-Math.PI / 2, 0, 0]} scale={3586.33}>
                  <group name="Shade1" position={[-0.029, -1.037, 0.063]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.043, -0.021, -0.181]}>
                    <mesh name="Shade1_Material004_0" geometry={nodes.Shade1_Material004_0.geometry} material={materials['Material.004']} />
                  </group>
                  <group name="Shade2" position={[-0.029, -1.037, 0.137]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.043, -0.03, -0.181]}>
                    <mesh name="Shade2_Material004_0" geometry={nodes.Shade2_Material004_0.geometry} material={materials['Material.004']} />
                  </group>
                  <group name="Shade3" position={[-0.029, -1.025, 0.236]} rotation={[Math.PI / 2, 0, 0]} scale={[-1.043, -0.046, -0.181]}>
                    <mesh name="Shade3_Material004_0" geometry={nodes.Shade3_Material004_0.geometry} material={materials['Material.004']} />
                  </group>
                  <mesh name="Sun_Material003_0" geometry={nodes.Sun_Material003_0.geometry} material={materials['Material.003']} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/road2.gltf')
