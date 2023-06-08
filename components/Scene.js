export default class Scene {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.z = 50;

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x202020);

    document.body.appendChild(this.renderer.domElement);
  }

  // Method to add an object to the scene
  add(object) {
    this.scene.add(object);
  }

  // Method to render the scene
  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
