class Index {
  video: HTMLMediaElement;
  button: HTMLElement;

  constructor () {
    this.video = document.querySelector('#header-video');
    this.button = document.querySelector('#bg-volume-control');

    this.button.addEventListener('click', this.toggleBgAudio.bind(this));
  }

  toggleBgAudio (): void {
    if (this.video.muted) {
      this.button.querySelector('i').classList.remove('fa-volume-off');
      this.button.querySelector('i').classList.add('fa-volume-up');
    } else {
      this.button.querySelector('i').classList.remove('fa-volume-up');
      this.button.querySelector('i').classList.add('fa-volume-off');
    }

    this.video.muted = !this.video.muted;
  }
}

var app = new Index();