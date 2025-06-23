// GOAL: make 4 tetrahedrons next to each other, making a larger single tetrahedron.

// FIXME: Use inbuilt tetrahedron,
// determine the correct 3 shift vectors.

// Can use this for sierp(x, y, z, edgeLength),
// only add the smallest tetrahedrons to the scene (no need for transparency).

import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TetrahedronGeometry();
const material = new THREE.MeshNormalMaterial({ wireframe: true });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

camera.position.z = 5;

function animate() {
  mesh.rotation.y += 0.0005;
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
