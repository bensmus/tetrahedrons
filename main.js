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

const geometry = new THREE.TetrahedronGeometry(2);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const tetra = new THREE.Mesh(geometry, material);
scene.add(tetra);

camera.position.z = 5;

function animate() {
  tetra.rotation.y += 0.0005;
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
