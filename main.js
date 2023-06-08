import Scene from './components/Scene.js';
import Bars from './components/Bars.js';
import AudioPlayer from './components/AudioPlayer.js';
import Waveform from './components/Waveform.js';
import Visualizer from './components/Visualizer.js';
import Metadata from './components/Metadata.js';
import PlayPauseButton from './components/PlayPauseButton.js';
import getRandomSong from './components/GetRandomSong.js';

// Instantiate the components
let scene = new Scene();
let audioPlayer = new AudioPlayer();
let bars = new Bars(scene, audioPlayer.analyser);
let waveform = new Waveform(scene, audioPlayer.analyser);
let metadata = new Metadata();
let playPauseButton = new PlayPauseButton(audioPlayer);

// Fetch the audio file
const songPath = './assets/';
const songs = ['swan.mp3', 'fur.mp3', 'moonlightFirst.mp3', 'moonlightThird,mp3', 'Noctorne.mp3', 'pathetique_full.mp3', 'swan.mp3'];  // Add as many songs as you have


const audioFileUrl = getRandomSong();

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
