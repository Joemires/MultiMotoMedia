import Component from '../../core/component';

class Yamaha extends Component {
  constructor () {
    super();

    this.landingButton.addEventListener('click', () => this.scroll('.main .title'));
  }
}

var yamaha = new Yamaha();