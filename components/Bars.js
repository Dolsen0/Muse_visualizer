export default class Bars {
  constructor(scene, analyser) {
    this.scene = scene;
    this.analyser = analyser;
    this.bars = [];
    this.color = new THREE.Color();

    this.createBars();
  }

  createBars() {
    for (let i = 0; i < 32; i++) {
      let geometry = new THREE.BoxGeometry(1, 1, 1);
      this.color.setHSL(i/32, 1, 0.5);
      let material = new THREE.MeshBasicMaterial({ color: this.color });
      let bar = new THREE.Mesh(geometry, material);
      bar.position.set(i - 16, 0, 0);
      this.bars.push(bar);
      this.scene.add(bar);
    }
  }

  updateBars(frequencyData) {
    for (let i = 0; i < this.bars.length; i++) {
      let value = frequencyData[i];
      let percent = value / 256;
      let height = 30 * percent;
      this.bars[i].scale.y = height;
    }
  }
}
