var MusicPlayer = {
  trackList: ["song1.mp3", "song2.mp3", "song3.mp3"],
  currentTrack: "song1.mp3",
  status: "pause",
  display: function () {
    return "Track: " + this.currentTrack + " Status: " + this.status;
  },
  play: function () {
    this.status = "play";
  },
  pause: function () {
    this.status = "pause";
  },
  next: function () {
    if (this.trackList.indexOf(this.currentTrack) < 2) {
      this.currentTrack = this.trackList[
        this.trackList.indexOf(this.currentTrack) + 1
      ];
    } else {
      this.currentTrack = this.trackList[0];
    }
    this.status = "play";
  },
  prev: function () {
    if (this.trackList.indexOf(this.currentTrack) > 0) {
      this.currentTrack = this.trackList[
        this.trackList.indexOf(this.currentTrack) - 1
      ];
    } else {
      this.currentTrack = this.trackList[2];
    }
    this.status = "play";
  },
  showTracks: function () {
    // TODO: вывести в console.log список треков
    // в формате:
    // 1. song1.mp3
    // 2. song2.mp3 - играет сейчас
    // 3. song3.mp3
  },
};

// MusicPlayer.display(); // "Track: song1.mp3, Status: pause"
// MusicPlayer.play();
// MusicPlayer.display(); // "Track: song1.mp3, Status: play"

// MusicPlayer.next(); // переключает другой трек
// MusicPlayer.display(); // "Track: song2.mp3, Status: play"

// MusicPlayer.showTracks(); // вывести в консоль список доступных треков
