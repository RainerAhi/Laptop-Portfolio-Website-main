import { Text, Html, ContactShadows, PresentationControls, Float, useGLTF, OrbitControls, Environment, GradientTexture, PerspectiveCamera } from '@react-three/drei';
import Model from './Model';
import { easing } from 'maath'
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const Experience = () => {

  return (
    <>
    <CameraRig>
      <Float rotationIntensity={ 0.4 } >  
        <rectAreaLight width={ 2.5 } height={ 1.65 } intensity={ 65 } color={ 'white' } rotation={ [ - 0.1, Math.PI, 0 ] } position={ [ 0, 0.55, - 1.15 ] } />
        <Model position={ [ 0, -1.2, 0 ] }  />
      </Float>
    </CameraRig>
      <ContactShadows position-y={ - 1.4 } opacity={ 0.4 } scale={ 5 } blur={ 2.4 } />
      <directionalLight scale={ 10 } />
      <ambientLight />

    </>
  );
};

function CameraRig({ children }) {
  const group = useRef()
  useFrame((state, delta) => {
    easing.dampE(group.current.rotation, [0, -state.pointer.x / 1.75, 0], 0.5, delta)
    // easing.dampE(group.current.position, [0, state.pointer.y / 10, 0], 1, delta)
  })
  return <group ref={group}>{children}</group>
}

