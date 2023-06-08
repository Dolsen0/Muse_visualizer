export default class PlayPauseButton {
  constructor(audioPlayer) {
    this.audioPlayer = audioPlayer;
    this.playPauseButton = document.getElementById('play-button');
    this.addEventListeners();
  }

  addEventListeners() {
    this.playPauseButton.addEventListener('click', () => {
      if (this.audioPlayer.audioContext.state === 'suspended') {
        this.audioPlayer.audioContext.resume();
        this.playPauseButton.textContent = '⏸'; // Pause symbol
      } else if (this.audioPlayer.audioContext.state === 'running') {
        this.audioPlayer.audioContext.suspend();
        this.playPauseButton.textContent = '▶'; // Play symbol
      }
    });
  }

  enableButtons() {
    this.playPauseButton.disabled = false;
  }
}
