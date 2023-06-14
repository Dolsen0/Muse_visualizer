import Scene from './components/Scene.js';
import Bars from './components/Bars.js';
import AudioPlayer from './components/AudioPlayer.js';
import Waveform from './components/Waveform.js';
import Visualizer from './components/Visualizer.js';
import Metadata from './components/Metadata.js';
import PlayPauseButton from './components/PlayPauseButton.js';
import Playlist from './components/Playlist.js';

// Instantiate the components
let scene = new Scene();
let audioPlayer = new AudioPlayer();
let bars = new Bars(scene, audioPlayer.analyser);
let waveform = new Waveform(scene, audioPlayer.analyser);
let metadata = new Metadata();
let playPauseButton = new PlayPauseButton(audioPlayer);

let songs = ['swan.mp3', 'fur.mp3', 'moonlightFirst.mp3', 'moonlightThird.mp3', 'Nocturne.mp3', 'pathetique_full.mp3', 'gypsyjazz.wav', 'ragtime.wav'];
let playlist = new Playlist(songs, './assets/');

function loadSong(songUrl) {
  audioPlayer.fetchAudio(songUrl)
    .then(audioBuffer => {
      metadata.update(audioBuffer, songUrl);

      // Enable play and pause buttons
      playPauseButton.enableButtons();

      // Start the visualizer render loop
      let visualizer = new Visualizer(audioPlayer, bars, waveform, scene);
      visualizer.render();
    })
    .catch(error => console.error('Error:', error));
}

// Load initial song
loadSong(playlist.getCurrentSong());

document.getElementById('next-button').addEventListener('click', () => {
  let nextSongUrl = playlist.nextSong();
  loadSong(nextSongUrl);
});

document.getElementById('prev-button').addEventListener('click', () => {
  let prevSongUrl = playlist.previousSong();
  loadSong(prevSongUrl);
});
