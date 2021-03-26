var MusicPlayer = {
  trackList: ["song1.mp3", "song2.mp3", "song3.mp3"],
  trackTime: ["0:21", "0:41", "1:11"],
  currentTrack: "song1.mp3",
  status: "pause",
  display: function () {
    return (
      "Track: " +
      this.currentTrack +
      " Status: " +
      this.status +
      " Time: " +
      this.time
    );
  },
  // TIMER
  second: 0,
  minute: 0,
  timer: 0,
  time: 0,

  startTimer: function () {
    var th = this;
    th.timer = setInterval(function () {
      th.timeIsOver();
      th.second++;
      if (th.second < 10) {
        th.second = "0" + th.second;
      }
      th.time = th.minute + ":" + th.second;
      if (th.second == 60) {
        th.second = 0;
        th.minute++;
        // console.log(th.time);
      }
      // else {
      //   console.log(th.time);
      // }
    }, 1000);
  },
  stopTimer: function () {
    clearInterval(this.timer);
  },
  restartTimer: function () {
    this.second = 0;
    this.minute = 0;
  },
  timeIsOver: function () {
    if (
      this.time === this.trackTime[this.trackList.indexOf(this.currentTrack)]
    ) {
      this.stopTimer();
      this.next();
    }
  },
  // END TIMER

  play: function () {
    this.status = "play";
    this.startTimer();
  },
  pause: function () {
    this.status = "pause";
    this.stopTimer();
  },
  next: function () {
    if (this.trackList.indexOf(this.currentTrack) < this.trackList.length - 1) {
      this.currentTrack = this.trackList[
        this.trackList.indexOf(this.currentTrack) + 1
      ];
    } else {
      this.currentTrack = this.trackList[0];
    }
    this.restartTimer();
    this.startTimer();
    this.status = "play";
    console.log("next track");
  },
  prev: function () {
    if (this.trackList.indexOf(this.currentTrack) > 0) {
      this.currentTrack = this.trackList[
        this.trackList.indexOf(this.currentTrack) - 1
      ];
    } else {
      this.currentTrack = this.trackList[2];
    }
    this.restartTimer();
    this.startTimer();
    this.status = "play";
    console.log("prev track");
  },
  showTracks: function () {
    for (i = 0; i < this.trackList.length; i++) {
      if (this.trackList[i] === this.currentTrack) {
        console.log(
          `${i + 1}. ${this.trackList[i]}` +
            " - играет сейчас, Time: " +
            `${this.time}`
        );
      } else {
        console.log(`${i + 1}. ${this.trackList[i]}`);
      }
    }
  },
};
// MusicPlayer.display(); // "Track: song1.mp3, Status: pause"
// MusicPlayer.play();
// MusicPlayer.display(); // "Track: song1.mp3, Status: play"
// MusicPlayer.next(); // переключает другой трек
// MusicPlayer.display(); // "Track: song2.mp3, Status: play"
// MusicPlayer.showTracks(); // вывести в консоль список доступных треков
