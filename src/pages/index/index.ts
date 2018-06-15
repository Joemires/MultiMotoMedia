import Component from '../../core/component';

class Index extends Component {
  video: HTMLMediaElement;
  button: HTMLElement;

  brandsButton: HTMLElement;
  brandsRow: HTMLElement;

  constructor () {
    super();

    this.video = document.querySelector('#header-video');
    this.button = document.querySelector('#bg-volume-control');
    this.brandsButton = document.querySelector('#goToMotoBrands');
    this.brandsRow = document.querySelector('#motoBrands');

    this.button.addEventListener('click', () => this.toggleBgAudio());
    this.landingButton.addEventListener('click', () => this.scroll('.main .title'));
    this.brandsButton.addEventListener('click', () => this.showMotoBrands());
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

  showMotoBrands(): void {
    $(this.brandsRow).fadeIn('slow');
    this.scroll(this.brandsRow);
  }

}

var index = new Index();