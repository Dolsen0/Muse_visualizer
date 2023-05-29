import Scene from './components/Scene.js';
import Bars from './components/Bars.js';
import AudioPlayer from './components/AudioPlayer.js';
import Waveform from './components/Waveform.js';
import Visualizer from './components/Visualizer.js';
import Metadata from './components/Metadata.js';
import PlayPauseButton from './components/PlayPauseButton.js';

// Instantiate the components
let scene = new Scene();
let audioPlayer = new AudioPlayer();
let bars = new Bars(scene, audioPlayer.analyser);
let waveform = new Waveform(scene, audioPlayer.analyser);
let metadata = new Metadata();
let playPauseButton = new PlayPauseButton(audioPlayer);

// Fetch the audio file
const audioFileUrl = './assets/swan.mp3';
audioPlayer.fetchAudio(audioFileUrl)
  .then(audioBuffer => {
    metadata.update(audioBuffer, audioFileUrl);

    // Enable play and pause buttons
    playPauseButton.enableButtons();

    // Start the visualizer render loop
    let visualizer = new Visualizer(audioPlayer, bars, waveform, scene);
    visualizer.render();
  })
  .catch(error => console.error('Error:', error));
