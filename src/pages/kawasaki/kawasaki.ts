import Component from '../../core/component';

class Kawasaki extends Component {
  constructor () {
    super();

    this.landingButton.addEventListener('click', () => this.scroll('.main .title'));
  }
}

var kawasaki = new Kawasaki();