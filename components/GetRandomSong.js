export default function getRandomSong() {
    // Fetch the audio file
    const songPath = './assets/';
    const songs = ['swan.mp3', 'fur.mp3', 'moonlightFirst.mp3', 'moonlightThird.mp3', 'Nocturne.mp3', 'pathetique_full.mp3'];  // Add as many songs as you have
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songPath + songs[randomIndex];
  }
  