import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './App.css'

function Box() {
  return (
    <mesh rotation={[0.4, 0.4, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#f97316" />
    </mesh>
  )
}

export default function App() {
  return (
    <main className="app">
      <Canvas camera={{ position: [3, 3, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 5]} intensity={1.5} />

        <Box />

        <OrbitControls enableDamping />
      </Canvas>
    </main>
  )
}
