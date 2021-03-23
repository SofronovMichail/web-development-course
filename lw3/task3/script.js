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
    if (this.trackList.indexOf(this.currentTrack) < this.trackList.length - 1) {
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
    var t = this;
    t.trackList.forEach(function (item, i) {
      if (item === t.currentTrack) {
        console.log(`${i + 1}. ${item}` + " - играет сейчас");
      } else {
        console.log(`${i + 1}. ${item}`);
      }
    });
  },
};
// MusicPlayer.display(); // "Track: song1.mp3, Status: pause"
// MusicPlayer.play();
// MusicPlayer.display(); // "Track: song1.mp3, Status: play"
// MusicPlayer.next(); // переключает другой трек
// MusicPlayer.display(); // "Track: song2.mp3, Status: play"
// MusicPlayer.showTracks(); // вывести в консоль список доступных треков
