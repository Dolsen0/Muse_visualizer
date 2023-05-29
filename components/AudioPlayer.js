export default class AudioPlayer {
    constructor() {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.analyser = this.audioContext.createAnalyser();
      this.analyser.fftSize = 64; // This needs to be a power of 2 and determines the number of bars
      this.source = this.audioContext.createBufferSource();
      this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
    }
  
    fetchAudio(audioFileUrl) {
      return fetch(audioFileUrl)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => this.audioContext.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
          this.source.buffer = audioBuffer;
          this.source.connect(this.analyser);
          this.analyser.connect(this.audioContext.destination);
          this.source.start();
          return audioBuffer;
        });
    }
  
    getFrequencyData() {
      this.analyser.getByteFrequencyData(this.frequencyData);
      return this.frequencyData;
    }
  }
  