import Route from '@ember/routing/route';

export default class EgipatskamitologijaRoute extends Route {
  model() {
    localStorage.setItem('1.egipat', 'ans2');
    localStorage.setItem('2.egipat', 'ans1');
    localStorage.setItem('3.egipat', 'ans2');
    localStorage.setItem('4.egipat', 'ans1');
    localStorage.setItem('5.egipat', 'ans2');
    localStorage.setItem('6.egipat', 'ans2');
    localStorage.setItem('7.egipat', 'ans2');
    localStorage.setItem('8.egipat', 'ans1');
    localStorage.setItem('9.egipat', 'ans2');
    localStorage.setItem('10.egipat', 'ans1');

    return {
      data: [
        {
          id: 1,
          question: '1. Ra je bila najvažnija boginja u egipatskoj mitologiji?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 2,
          question: '2. Teba je bio grad bogova u egipatskoj mitologiji?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 3,
          question:
            '3. Izida je bila boginja ljubavi, plodnosti i lepote u grčkoj mitologiji?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 4,
          question:
            '4. Anubis je bio bog mumifikacije i podzemlja u egipatskoj mitologiji?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 5,
          question:
            '5. Kleopatra V je bila poslednji faraon starog Egipta pre nego što je zemlja postala deo Rimskog carstva?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 6,
          question:
            '6. Nil je bila sporedna reka koja je oblikovala život u starom Egiptu?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 7,
          question:
            '7. Hatišepsut je persijska kraljica koja je postala poznata po svojoj moćnoj i intrigantnoj vladavini?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 8,
          question:
            '8. Keops je bio najpoznatiji faraon koji je izgradio Veliku piramidu u Gizi?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 9,
          question:
            '9. Oziris je bio bog rata,razuma i hrabrosti u egipatskoj mitologiji?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 10,
          question:
            '10. Faraon dvostrukih kruna je bio naziv za egipatskog faraona koji je nosio "dvostruku krunu" - simbol jedinstva gornjeg i donjeg Egipta?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
      ],
    };
  }
}
