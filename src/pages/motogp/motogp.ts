import Component from '../../core/component';

class MotoGP extends Component {
  countdownTimer: HTMLElement;
  champions: HTMLElement;
  pageHeader: HTMLElement;
  audio: HTMLMediaElement;

  championList: any[] = [
    { id: 1, name: 'Marc Marquez', team: 'Repsol Honda Team', country: 'es', number: 93, points: 95 },
    { id: 2, name: 'Valentino Rossi', team: 'Movistar Yamaha MotoGP', country: 'it', number: 46, points: 72 },
    { id: 3, name: 'Maverick Viñales', team: 'Movistar Yamaha MotoGP', country: 'es', number: 25, points: 67 },
    { id: 4, name: 'Andrea Dovizioso', team: 'Ducati Team', country: 'it', number: 4, points: 66 },
    { id: 5, name: 'Johann Zarco', team: 'Monster Yamaha Tech 3', country: 'fr', number: 5, points: 64 },
    { id: 6, name: 'Danilo Petrucci', team: 'Alma Pramac Racing', country: 'it', number: 9, points: 63 },
    { id: 7, name: 'Andrea Iannone', team: 'Team SUZUKI ECSTAR', country: 'it', number: 29, points: 60 },
    { id: 8, name: 'Cal Crutchlow', team: 'LCR Honda CASTROL', country: 'gb', number: 35, points: 56 },
    { id: 9, name: 'Jack Miller', team: 'Alma Pramac Racing', country: 'nz', number: 43, points: 49 },
    { id: 10, name: 'Jorge Lorenzo', team: 'Ducati Team', country: 'es', number: 99, points: 41 },
    { id: 11, name: 'Alex Rins', team: 'Team SUZUKI ECSTAR', country: 'es', number: 42, points: 33 },
    { id: 12, name: 'Dani Pedrosa', team: 'Repsol Honda Team', country: 'es', number: 26, points: 29 },
    { id: 13, name: 'Tito Rabat', team: 'Reale Avintia Racing', country: 'es', number: 53, points: 27 },
    { id: 14, name: 'Pol Espargaro', team: 'Red Bull KTM Factory Racing', country: 'es', number: 44, points: 23 },
    { id: 15, name: 'Alvaro Bautista', team: 'Angel Nieto Team', country: 'es', number: 19, points: 19 },
    { id: 16, name: 'Hafizh Syahrin', team: 'Monster Yamaha Tech 3', country: 'my', number: 55, points: 17 },
    { id: 17, name: 'Franco Morbidelli', team: 'EG 0,0 Marc VDS', country: 'it', number: 21, points: 17 },
    { id: 18, name: 'Aleix Espargaro', team: 'Aprilia Racing Team Gresini', country: 'es', number: 41, points: 13 },
    { id: 19, name: 'Takaaki Nakagami', team: 'LCR Honda IDEMITSU', country: 'jp', number: 30, points: 10 },
    { id: 20, name: 'Bradley Smith', team: 'Red Bull KTM Factory Racing', country: 'gb', number: 38, points: 7 },
    { id: 21, name: 'Mika Kallio', team: 'Red Bull KTM Factory Racing', country: 'fi', number: 36, points: 6 },
    { id: 22, name: 'Scott Redding', team: 'Aprilia Racing Team Gresini', country: 'gb', number: 45, points: 5 },
    { id: 23, name: 'Karel Abraham', team: 'Angel Nieto Team', country: 'cz', number: 17, points: 1 },
    { id: 24, name: 'Thomas Luthi', team: 'EG 0,0 Marc VDS', country: 'ch', number: 12, points: 0 },
    { id: 25, name: 'Xavier Simeon', team: 'Reale Avintia Racing', country: 'be', number: 10, points: 0 }
  ];

  constructor () {
    super();

    this.countdownTimer = document.querySelector('#timer');
    this.champions = document.querySelector('#champions tbody');
    this.pageHeader = document.querySelector('.page-header .container');
    let date = new Date('Jun 17, 2018 11:00:00').getTime();

    setInterval(() => {
      let now = new Date().getTime();

      let span = date - now;

      let days = Math.floor(span / (1000 * 60 * 60 * 24));
      let hours = Math.floor((span % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((span % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((span % (1000 * 60)) / 1000);

      this.countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);

    this.audio = new Audio('assets/audio/motogp.wav');
    this.audio.loop = true;

    this.pageHeader.addEventListener('click', () => {
      if (this.audio.paused)
        this.audio.play();
      else
        this.audio.pause();
    });

    window.addEventListener('scroll', () => this.affectTitleVolume());

    this.generateChampionsTable();

  }

  generateChampionsTable(): void {
    this.champions.innerHTML = '';

    this.championList.forEach(cha => {
      let node = `
        <tr>
          <td class="text-center" style="vertical-align: middle;">${ cha.id }</td>
          <td style="width: 101px;"><img src="assets/img/motogp_champions/${ cha.id }.jpg" class="rounded" /></td>
          <td style="vertical-align: middle;">
            <div style="vertical-align: middle;">${ cha.name }</div>
            <div style="vertical-align: middle;">${ cha.team }</div>
            <div style="vertical-align: middle;"><i class="flag-icon flag-icon-${ cha.country }"></i> ${ cha.number }</div>
          </td>
          <td class="text-center" style="vertical-align: middle;">${ cha.points } pkt</td>
        </tr>
      `;
      this.champions.innerHTML += node;
    });
  }

  affectTitleVolume (): void {
    this.audio.volume = (1 - ($(window).scrollTop() / this.maxPageScroll) * this.fadeMultiplier);
  }
}

var motogp = new MotoGP();