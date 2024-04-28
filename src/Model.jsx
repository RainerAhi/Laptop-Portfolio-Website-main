import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Html, OrbitControls, useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from '@react-three/fiber'
gsap.registerPlugin(ScrollTrigger)

export default function Model(props) {
  const { nodes, materials } = useGLTF('./computermodel.gltf')

  const { camera } = useThree();

  const model = useRef();
  const iframeRef = useRef();
  const initialCameraPosition = useRef({ x: camera.position.x, y: camera.position.y, z: camera.position.z });

  const tl = gsap.timeline();

  // Function to animate camera position
  const animateCamera = (x, y, z) => {
    gsap.to(camera.position, {
      duration: 1,
      x,
      y,
      z,
      ease: 'power3.out'
    });
  };

  // Hover event handler
  const handleHover = () => {
    const newPosition = { x: 0, y: 1, z: 4 };
    animateCamera(newPosition.x, newPosition.y, newPosition.z);
  };

  // Mouse leave event handler
  const handleMouseLeave = () => {
    const { x, y, z } = initialCameraPosition.current;
    animateCamera(x, y, z);
  };


  return (
    <group ref={model} >
    <OrbitControls enableRotate={ false } enableZoom={ false } maxPolarAngle={ Math.PI / 2 } />
    <Html transform wrapperClass="htmlScreen" distanceFactor={ 1.17 } position={ [ 0, 0.36, -1.4 ] } rotation-x={ - 0.256 } >
        <iframe ref={iframeRef} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} src="https://rainerahi.vercel.app/" />
    </Html>
    <group {...props} dispose={null}>
      <group position={[0, 0.519, 0]} scale={0.103}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials['Frame.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials['Frame.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials.HeadPhoneHole}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_3.geometry}
          material={materials.USB_C_INSIDE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_4.geometry}
          material={materials['Frame.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_5.geometry}
          material={materials.TouchbarBorder}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_6.geometry}
          material={materials.Keyboard}
        />
        <group position={[0, -0.509, 0]} scale={5.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle006.geometry}
            material={materials['Frame.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle006_1.geometry}
            material={materials.USB_C_INSIDE}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrontCameraRing001.geometry}
          material={materials['CameraRIngBlack.002']}
          position={[-0.155, 19.571, -16.151]}
          scale={5.796}
        />
        <group position={[-11.786, -0.15, -8.301]} scale={5.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials['Keyboard.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_1.geometry}
            material={materials.Key}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_2.geometry}
            material={materials.Touchbar}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KeyboardKeyHole.geometry}
          material={materials['Keyboard.001']}
          position={[-11.786, -0.152, -8.301]}
          scale={5.796}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RubberFoot.geometry}
          material={materials.DarkRubber}
          position={[-11.951, -0.751, 7.857]}
          scale={5.796}
        />
        <group position={[0.011, -0.211, -10.559]} scale={5.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle012.geometry}
            material={materials.HingeBlack}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle012_1.geometry}
            material={materials.HingeMetal}
          />
        </group>
        <group position={[-15.026, 0.031, 0.604]} scale={5.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009.geometry}
            material={materials['Frame.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009_1.geometry}
            material={materials.SpeakerHole}
          />
        </group>
        <group position={[12.204, 0.031, 0.604]} scale={5.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003.geometry}
            material={materials['Frame.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_1.geometry}
            material={materials.SpeakerHole}
          />
        </group>
        <group position={[0.007, -0.472, -10.412]} rotation={[1.311, 0, 0]} scale={5.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002.geometry}
            material={materials['Frame.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_1.geometry}
            material={materials.Screen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_2.geometry}
            material={materials.ScreenGlass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_3.geometry}
            material={materials.Rubber}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_4.geometry}
            material={materials.DisplayGlass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.AppleLogo000.geometry}
            material={materials['AppleLogo.004']}
            position={[0.005, -0.111, -1.795]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0.579}
          />
        </group>
      </group>
    </group>
    </group>
  )
}

useGLTF.preload('./computermodel.gltf')