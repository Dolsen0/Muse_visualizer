export default class PlayPauseButton {
  constructor(audioPlayer) {
    this.audioPlayer = audioPlayer;
    this.playButton = document.getElementById('play-button');
    this.pauseButton = document.getElementById('play-button');
    this.addEventListeners();
  }

  addEventListeners() {
    this.playButton.addEventListener('click', () => {
      if (this.audioPlayer.audioContext.state === 'suspended') {
        this.audioPlayer.audioContext.resume();
      }
    });

    this.pauseButton.addEventListener('click', () => {
      if (this.audioPlayer.audioContext.state === 'running') {
        this.audioPlayer.audioContext.suspend();
      }
    });
  }

  enableButtons() {
    this.playButton.disabled = false;
    this.pauseButton.disabled = false;
  }
}
