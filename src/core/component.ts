export default class Component {
  fadeMultiplier: number = 2.5;
  scrollToOffset: number = 100;

  landingContainer: HTMLElement;
  landingButton: HTMLElement;
  
  maxPageScroll: number;

  constructor () {
    this.landingContainer = document.querySelector('.page-header > .container');
    this.landingButton = document.querySelector('#landingButton');
    this.maxPageScroll = $(document).height() - $(window).height();

    window.addEventListener('scroll', () => this.affectTitleOpacity());
  }

  scroll (element: string | HTMLElement): void {
    $('html, body').animate({
      scrollTop: $(element).offset().top - this.scrollToOffset
    }, 2000);

    let audio: HTMLMediaElement = new Audio('assets/audio/rev.wav');
    audio.play();
  }

  affectTitleOpacity (): void {
    this.landingContainer.style.opacity = (1 - ($(window).scrollTop() / this.maxPageScroll) * this.fadeMultiplier).toString();
  }
}