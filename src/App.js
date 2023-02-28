import React from "react";
import { Canvas } from "@react-three/fiber";
import { Planet } from "./assets/Planet";
import { Airplane } from "./assets/Airplane";
import { Cloud } from "./assets/Cloud";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas style={{ height: "100vh", backgroundColor: "#11101B" }}>
      <OrbitControls
        keys={{
          BOTTOM: "ArrowDown",
          UP: "ArrowUp",
          LEFT: "ArrowLeft",
          RIGHT: "ArrowRight",
        }}
      />
      <scene>
        <fog color="#11101B" near={0.1} far={1000} />
        <ambientLight color="rgb(72, 64, 104)" intensity={1} />
        <Planet />
        <Airplane />
        <Cloud castShadow />
        <axesHelper />
        <pointLight
          color="#1BFFEF"
          position={[0, 8, -16]}
          intensity={2}
          castShadow
        />
        <directionalLight
          shadow={{ mapSize: { height: 2048, width: 2048 } }}
          position={[[0, 2, 4]]}
          intensity={1}
          castShadow
        />
      </scene>
    </Canvas>
  );
}

export default App;
