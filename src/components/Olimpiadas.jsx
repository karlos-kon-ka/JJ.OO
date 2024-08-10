import  { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Olimpiada(props) {
  const { nodes, materials } = useGLTF('/modelDraco.gltf')

  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Ajusta la velocidad de rotación según sea necesario
    }
  });
  return (
    <group ref={meshRef} position={[-5,-10 ,0]} scale={8} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Material.013']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 3.015, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials['Material.011']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 2.953, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials['Material.011']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 2.953, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials['Material.011']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 2.953, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials['Material.011']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 2.953, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials['Material.011']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 2.953, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials['Material.011']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 2.953, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials['Material.011']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 2.953, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials['Material.011']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 2.953, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials['Material.011']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 2.953, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials['Material.011']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 2.953, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_26.geometry}
        material={materials['Material.014']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 3.015, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_28.geometry}
        material={materials['Material.012']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 2.953, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_30.geometry}
        material={materials['Material.010']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 2.953, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_32.geometry}
        material={materials['Material.011']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 2.953, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_34.geometry}
        material={materials['Material.011']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 2.953, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_36.geometry}
        material={materials['Material.015']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 2.953, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_38.geometry}
        material={materials['Material.015']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 2.953, 35.291]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_40.geometry}
        material={materials['Material.015']}
        position={[-0.85, 0, -0.04]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[35.291, 2.953, 35.291]}
      />
    </group>
  )
}

useGLTF.preload('/modelDraco.gltf')


