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

function getTetrahedronVectors(triSize) {
  const v0 = new THREE.Vector3(1, 0, -Math.sqrt(2) / 2); // BOTTOM RIGHT
  const v1 = new THREE.Vector3( // BOTTOM UP
    Math.cos((2 * Math.PI) / 3),
    Math.sin((2 * Math.PI) / 3),
    -Math.sqrt(2) / 2
  );
  const v2 = new THREE.Vector3( // BOTTOM LEFT
    Math.cos((4 * Math.PI) / 3),
    Math.sin((4 * Math.PI) / 3),
    -Math.sqrt(2) / 2
  );
  const v3 = new THREE.Vector3(0, 0, Math.sqrt(2) / 2); // TOP
  const vectors = [v0, v1, v2, v3];
  return vectors.map((v) => v.multiplyScalar(triSize));
}

const tetrahedronVectors = getTetrahedronVectors(1);

// All coordinates of vectors:
const tetrahedronCoordinates = [
  tetrahedronVectors[0].x,
  tetrahedronVectors[0].y,
  tetrahedronVectors[0].z,
  tetrahedronVectors[1].x,
  tetrahedronVectors[1].y,
  tetrahedronVectors[1].z,
  tetrahedronVectors[2].x,
  tetrahedronVectors[2].y,
  tetrahedronVectors[2].z,
  tetrahedronVectors[3].x,
  tetrahedronVectors[3].y,
  tetrahedronVectors[3].z,
];

// Counter-clockwise triangles:
const tetrahedronTris = [0, 1, 2, 0, 3, 2, 0, 3, 1, 2, 3, 1];

const tetrahedronGeometry = new THREE.PolyhedronGeometry(
  tetrahedronCoordinates,
  tetrahedronTris,
  1,
  0
);

const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

const tetra = new THREE.Mesh(tetrahedronGeometry, material);
const axis = new THREE.Vector3(1, 1, 1);
tetra.translateOnAxis(axis, 1);
scene.add(tetra);

camera.position.z = 5;

function animate() {
  tetra.rotation.y += 0.0005;
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
