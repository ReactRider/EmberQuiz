import Route from '@ember/routing/route';

export default class EgipatskamitologijaRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Ko je bio najvažniji bog u egipatskoj mitologiji?',
          answer: 'Ra',
        },
        {
          id: 2,
          question: '2. Koji je bio grad bogova u egipatskoj mitologiji?',
          answer: 'Teba',
        },
        {
          id: 3,
          question:
            '3. Koja je bila božica ljubavi, plodnosti i lepote u egipatskoj mitologiji?',
          answer: 'Izida',
        },
        {
          id: 4,
          question:
            '4. Koji je bio bog mumifikacije i podzemlja u egipatskoj mitologiji?',
          answer: 'Anubis',
        },
        {
          id: 5,
          question:
            '5. Ko je bio poslednji faraon starog Egipta pre nego što je zemlja postala deo Rimskog carstva?',
          answer: 'Kleopatra VII',
        },
        {
          id: 6,
          question:
            '6. Koja je bila glavna reka koja je oblikovala život u starom Egiptu?',
          answer: 'Nil',
        },
        {
          id: 7,
          question:
            '7. Koja je egipatska kraljica postala poznata po svom moćnom i intrigantnom vladavini?',
          answer: 'Hatišepsut',
        },
        {
          id: 8,
          question:
            '8. Koji je bio najpoznatiji faraon koji je izgradio Veliku piramidu u Gizi?',
          answer: 'Keops',
        },
        {
          id: 9,
          question:
            '9. Ko je bio bog nila, plodnosti i mudrosti u egipatskoj mitologiji?',
          answer: 'Oziris',
        },
        {
          id: 10,
          question:
            '10. Koji je bio naziv za egipatskog faraona koji je nosio "dvostruku krunu" - simbol jedinstva gornjeg i donjeg Egipta?',
          answer: 'Farao dvostrukih kruna',
        },
      ],
    };
  }
}
