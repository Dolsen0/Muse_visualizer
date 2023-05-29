export default class Visualizer {
    constructor(audioPlayer, bars, waveform, scene) {
      this.audioPlayer = audioPlayer;
      this.bars = bars;
      this.waveform = waveform;
      this.scene = scene;
    }
  
    render() {
      requestAnimationFrame(() => this.render());
  
      // Get the frequency data
      let frequencyData = this.audioPlayer.getFrequencyData();
    
      // Update the height of each bar
      this.bars.updateBars(frequencyData);
    
      // Update the waveform
      this.waveform.updateWaveform();
    
      // Render the scene
      this.scene.render();
    }
  }
  