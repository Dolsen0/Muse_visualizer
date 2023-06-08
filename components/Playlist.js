export default class Playlist {
    constructor(songs, path) {
      this.songs = songs;
      this.path = path;
      this.currentIndex = 0;
    }
  
    getCurrentSong() {
      return this.path + this.songs[this.currentIndex];
    }

    nextSong() {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;  // Loop back to the start
        }
        return this.getCurrentSong();
    }

    previousSong() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;  // Loop back to the end
        }
        return this.getCurrentSong();
    }
}
