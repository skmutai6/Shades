// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// function Model({ url }) {
//   const { scene } = useGLTF(url);
//   const modelRef = useRef();

//   // Rotate the model
//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.rotation.y += 0.01;
//     }
//   });

//   return <primitive object={scene} ref={modelRef} scale={2} />;
// }

// function Profile3D() {
//   return (
//     <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <Model url="/image.jpg" />
//       <OrbitControls enableZoom={false} />
//     </Canvas>
//   );
// }

// export default Profile3D;
