export default class Metadata {
    constructor() {
      this.titleElement = document.getElementById('title');
      this.artistElement = document.getElementById('artist');
      this.filenameElement = document.getElementById('filename');
    }
  
    update(audioBuffer, audioFileUrl) {
      // Access metadata
      const artist = audioBuffer.artist;
      const title = audioBuffer.title;
  
      // Update HTML content
      this.artistElement.textContent = artist || '';
      this.titleElement.textContent = title || '';
  
      // Extract the filename from the URL
      const filename = audioFileUrl.substring(audioFileUrl.lastIndexOf('/') + 1);
  
      // Update HTML content with the filename
      this.filenameElement.textContent = filename;
    }
  }
  