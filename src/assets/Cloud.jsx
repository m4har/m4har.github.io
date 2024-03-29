/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 cloud.gltf --transform
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function get_random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

let angle = get_random([0.5, 1]) * Math.PI;
let speed = Math.random() / 10;

export function Cloud(props) {
  const { nodes, materials } = useGLTF("/cloud-transformed.glb");
  const ref = useRef();

  useFrame((_, delta) => {
    const radius = Math.abs(-1) + 0.5;
    angle += delta * speed;
    let x = radius * Math.cos(angle);
    let z = radius * Math.sin(angle);
    ref.current.position.x = x;
    ref.current.position.z = z;
    ref.current.rotation.z = -Math.PI / 2;
    ref.current.rotation.y = -angle;
  }, -1);
  return (
    <group {...props} dispose={null} ref={ref}>
      <mesh
        geometry={nodes.Low_Poly_Cloud.geometry}
        material={materials.Material}
      />
    </group>
  );
}

useGLTF.preload("/cloud-transformed.glb");
