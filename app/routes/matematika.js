import Route from '@ember/routing/route';

export default class MatematikaRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1.  Šta je Goldbachova hipoteza?',
          answer:
            'Goldbachova hipoteza tvrdi da svaki paran broj veći od 2 može biti napisan kao zbir dva prosta broja',
        },

        {
          id: 2,
          question: '2. Koje su osnovne operacije u aritmetici?',
          answer: 'Sabiranje, oduzimanje, množenje, deljenje',
        },

        {
          id: 3,
          question:
            '3. Kako se zove broj koji se može napisati kao količnik dva cijela broja?',
          answer: 'Celobrojni broj',
        },
        {
          id: 4,
          question: '4. Šta je Riemannova hipoteza?',
          answer:
            'Riemannova hipoteza je jedno od najpoznatijih neriješenih problema u matematici, koja tvrdi da svi nule Riemannove zeta funkcije (osim trivijalnih) imaju realni dio jednak 1/2',
        },
        {
          id: 5,
          question: '5. Koliko je korijen iz 25?',
          answer: '5',
        },
        {
          id: 6,
          question: '6. Koliko je 7 x 8?',
          answer: '56',
        },
        {
          id: 7,
          question: '7. Koja je definicija prostog broja?',
          answer:
            'Prosti broj je prirodan broj veći od 1 koji nema pozitivne djelitelje osim 1 i sebe samog',
        },
        {
          id: 8,
          question:
            '8. Koja je definicija skupa moćnosti (eng. power set) skupa?',
          answer:
            ' Skup moćnosti skupa S je skup koji sadrži sve podskupove skupa S, uključujući prazan skup i sam skup S',
        },
        {
          id: 9,
          question:
            '9. Kako se zove geometrijsko tijelo koje ima sve strane iste dužine?',
          answer: 'Kocka',
        },
        {
          id: 10,
          question: '10. Koja je formula za izračunavanje obima kruga?',
          answer: ' Obim = 2 * π * poluprečnik',
        },
        {
          id: 11,
          question: '11. Šta je rezultat 3² + 4²?',
          answer: '25',
        },
        {
          id: 12,
          question:
            '12. Koja je vrijednost π (pi) zaokružena na dvije decimale?',
          answer: '3.14',
        },
      ],
    };
  }
}
