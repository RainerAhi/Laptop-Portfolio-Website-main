import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import React, { useState, useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Load audio file
    const sound = new Audio('/sound.mp3');
    setAudio(sound);
    return () => {
      // Clean up audio
      if (sound) {
        sound.pause();
        sound.currentTime = 0;
      }
    };
  }, []);

  const handleClick = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
        audio.currentTime = 0;
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <Canvas
        camera={ {
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [ -1, 1.5, 5 ]
        } }
      >
        <Experience />
      </Canvas>
      <div className="background-div" ></div>
      <div className="overlay" >
        <div className="overlay-container" >
          <h1>Rainer Ahi</h1>
        </div>
        <div className="overlay-container" >
          <h1>Entrepreneur</h1>
        </div>
        <div className="overlay-container-row" >
          <div className="overlay-container">
            <h1>{currentTime.toLocaleTimeString()}</h1>
          </div>
          <div className="overlay-container-sound" >
            <i className={`fa-solid ${isPlaying ? 'fa-volume-mute' : 'fa-volume-high'}`} onClick={handleClick}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
