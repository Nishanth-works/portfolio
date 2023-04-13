var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container").appendChild(renderer.domElement);

var diamondGeometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);

// Define the material for the diamond
var diamondMaterial = new THREE.MeshStandardMaterial({
	color: 0xffffff,
	roughness: 0.2,
	metalness: 1.0,
	envMapIntensity: 1.0,
	transparent: true,
	opacity: 0.8
});

// Create the diamond mesh and add it to the scene
var diamondMesh = new THREE.Mesh(diamondGeometry, diamondMaterial);
scene.add(diamondMesh);

// Animate the diamond
function animate() {
	requestAnimationFrame(animate);

	diamondMesh.rotation.x += 0.01;
	diamondMesh.rotation.y += 0.01;

	renderer.render(scene, camera);
}

animate();