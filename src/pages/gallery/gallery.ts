import Component from '../../core/component';

class Gallery extends Component {
  gallery: HTMLElement;

  constructor () {
    super();

    this.gallery = document.querySelector('#gallery');

    for (let i = 1; i <= 32; i++) {
      let div = document.createElement('div');
      let img = document.createElement('img');
      div.classList.add('col-lg-2', 'col-md-3', 'col-sm-3');
      img.classList.add('rounded', 'img-fluid');
      img.src = `assets/img/gallery/${i}.jpg`;
      img.style.margin = '15px auto';
      img.style.filter = 'grayscale(100%)';
      img.style.transition = '0.5s';
      img.style.cursor = 'pointer';
      img.addEventListener('mouseover', () => { img.style.filter = 'grayscale(0%)'; img.style.margin = '0px auto'; });
      img.addEventListener('mouseout', () => { img.style.filter = 'grayscale(100%)'; img.style.margin = '15px auto'; });
      div.addEventListener('click', () => this.displayPhoto(i));
      div.appendChild(img);
      this.gallery.appendChild(div);
    }
  }

  displayPhoto(id: number): void {
    let modal = document.createElement('div');
    modal.id = 'galleryModal';

    let bg = document.createElement('div');
    bg.id = 'modalBG';

    let img = document.createElement('img');
    img.src = `assets/img/gallery/${id}.jpg`;
    img.id = 'modalIMG';

    modal.appendChild(bg);
    modal.appendChild(img);

    document.body.style.overflow = 'hidden';
    document.body.appendChild(modal);
    setTimeout(() => {
      bg.style.opacity = '0.9';
      img.style.opacity = '1';
    }, 100);

    modal.addEventListener('click', () => {
      bg.style.opacity = '0';
      img.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(modal);
        document.body.style.overflow = 'scroll';
      }, 700);
    });
  }
}

var gallery = new Gallery();