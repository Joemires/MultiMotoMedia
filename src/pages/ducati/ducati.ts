import Component from '../../core/component';

class Ducati extends Component {
  constructor () {
    super();

    this.landingButton.addEventListener('click', () => this.scroll('.main .title'));
  }
}

var ducati = new Ducati();