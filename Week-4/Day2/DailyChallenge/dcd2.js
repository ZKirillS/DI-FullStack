class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
  }
}

const video1 = new Video("How to make an ice cream in 10 Minutes", "Alice", 600);
video1.watch();

const video2 = new Video("How to walk under water", "Bridget", 420);
video2.watch();


const videoData = [
  { title: "Funny Dogs", uploader: "Sam", time: 300 },
  { title: "JavaScript for Newbies", uploader: "Donna", time: 900 },
  { title: "Meditation in the forest", uploader: "Elliot", time: 1200 },
  { title: "Travel cheap", uploader: "Frank", time: 480 },
  { title: "DIY everything", uploader: "Garry", time: 360 }
];

const videoObjects = [];

videoData.forEach(video => {
  const vid = new Video(video.title, video.uploader, video.time);
  videoObjects.push(vid);
  vid.watch();
});
