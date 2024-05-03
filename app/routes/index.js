import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  liveSearch() {
    let search_query = document.getElementById('pretraga-kvizova').value;
    let quizes = document.querySelectorAll('.quiz');

    for (var i = 0; i < quizes.length; i++) {
      if (
        quizes[i].innerText.toLowerCase().includes(search_query.toLowerCase())
      ) {
        quizes[i].classList.remove('is-hidden');
        document.querySelector('.quiz-grid').style.alignItems = 'flex-start';
      } else {
        quizes[i].classList.add('is-hidden');
      }
    }
  }

  model() {
    let quizes = document.querySelectorAll('.quiz');

    for (let i = 0; i < quizes.length; i++) {
      let rand = Math.floor(Math.random() * (35 - 20) + 1) + 20;
      quizes[i].style.width = rand + '%';
      quizes[i].style.height = rand + '%';
    }

    document.addEventListener('DOMContentLoaded', function () {
      document
        .getElementById('pretraga-kvizova')
        .addEventListener('keyup', liveSearch);
    });

    return {
      data: [
        {
          title: 'Matematika',
          src: 'assets/images/matematika.jpg',
          route: 'matematika',
        },
        {
          title: 'Biologija',
          src: 'assets/images/biologija.jpg',
          route: 'biologija',
        },
        {
          title: 'Istorija',
          src: 'assets/images/istorija.jpg',
          route: 'istorija',
        },
        {
          title: 'Geografija',
          src: 'assets/images/geografija.jpg',
          route: 'geografija',
        },
        {
          title: 'Književnost',
          src: 'assets/images/knjizevnost.jpg',
          route: 'knjizevnost',
        },
        {
          title: 'IT',
          src: 'assets/images/it.jpg',
          route: 'it',
        },
        {
          title: 'Menadžment',
          src: 'assets/images/menadzment.jpg',
          route: 'menadzment',
        },
        {
          title: 'Dečiji Kviz',
          src: 'assets/images/decijikviz.jpg',
          route: 'decijikviz',
        },
        {
          title: 'Strani Filmovi',
          src: 'assets/images/stranifilmovi.jpg',
          route: 'stranifilmovi',
        },
        {
          title: 'Muzika',
          src: 'assets/images/muzika.jpg',
          route: 'muzika',
        },
        {
          title: 'Glavni Gradovi',
          src: 'assets/images/glavnigradovi.jpg',
          route: 'glavnigradovi',
        },
        {
          title: 'Grčka Mitologija',
          src: 'assets/images/grckamitologija.jpg',
          route: 'grckamitologija',
        },
        {
          title: 'Egipatska Mitologija',
          src: 'assets/images/egipatskamitologija.jpg',
          route: 'egipatskamitologija',
        },
        {
          title: 'Rimska Mitologija',
          src: 'assets/images/rimskamitologija.jpg',
          route: 'rimskamitologija',
        },
        {
          title: 'Zastave',
          src: 'assets/images/zastave.jpg',
          route: 'zastave',
        },
        {
          title: 'Olimpijada 21. Vek',
          src: 'assets/images/ol21.jpg',
          route: 'oi21',
        },
        {
          title: 'Olimpijada 20. Vek',
          src: 'assets/images/ol20.jpg',
          route: 'oi20',
        },
        {
          title: 'Naučnici',
          src: 'assets/images/naucnici.jpg',
          route: 'naucnici',
        },
        {
          title: 'Dinosaurusi',
          src: 'assets/images/dinosaurusi.jpg',
          route: 'dinosaurusi',
        },
        {
          title: 'Periodni Sistemi',
          src: 'assets/images/periodnisistemi.jpg',
          route: 'periodnisistemi',
        },
        {
          title: 'Hari Poter',
          src: 'assets/images/haripoter.jpg',
          route: 'haripoter',
        },
        {
          title: 'Prijatelji',
          src: 'assets/images/prijatelji.jpg',
          route: 'prijatelji',
        },
      ],
    };
  }
}
