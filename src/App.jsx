import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";

function App() {
  return (
    <>
      <Canvas
        camera={ {
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [ -3, 1.5, 5 ]
        } }
      >
        <Experience />
      </Canvas>
      <div className="background-div" ></div>
    </>
  );
}

export default App;
