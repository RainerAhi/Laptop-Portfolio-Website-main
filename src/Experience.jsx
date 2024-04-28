import { Text, Html, ContactShadows, PresentationControls, Float, useGLTF, OrbitControls, Environment, GradientTexture, PerspectiveCamera } from '@react-three/drei';
import Model from './Model';

export const Experience = () => {

  const computer = useGLTF('./computermodel.gltf')

  return (
    <>

      <PresentationControls
        global
        rotation={ [ 0.13, 0.1, 0 ] }
        polar={ [ - 0.4, 0.2 ] }
        azimuth={ [ - 1, 0.75 ] }
        config={ { mass: 2, tension: 400 } }
        snap={ { mass: 4, tension: 400 } }
      >
      <Float rotationIntensity={ 0.4 } >  
        <rectAreaLight
          width={ 2.5 }
          height={ 1.65 }
          intensity={ 65 }
          color={ 'white' }
          rotation={ [ - 0.1, Math.PI, 0 ] }
          position={ [ 0, 0.55, - 1.15 ] }
        />

        <Model position={ [ 0, -1.2, 0 ] }  />
        
      </Float>
      </PresentationControls>

      <ContactShadows
        position-y={ - 1.4 }
        opacity={ 0.4 }
        scale={ 5 }
        blur={ 2.4 }
      />

      <directionalLight scale={ 10 } />

      <ambientLight />

    </>
  );
};
