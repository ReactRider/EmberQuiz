import Route from '@ember/routing/route';

export default class NaucniciRoute extends Route {
  model() {
    localStorage.setItem('1.nau', 'ans2');
    localStorage.setItem('2.nau', 'ans1');
    localStorage.setItem('3.nau', 'ans4');

    localStorage.setItem('4.nau', 'ans4');
    localStorage.setItem('5.nau', 'ans1');
    localStorage.setItem('6.nau', 'ans3');

    localStorage.setItem('7.nau', 'ans3');
    localStorage.setItem('8.nau', 'ans3');
    localStorage.setItem('9.nau', 'ans4');

    localStorage.setItem('10.nau', 'ans1');
    localStorage.setItem('11.nau', 'ans2');

    return {
      data: [
        {
          id: 1,
          question: '1. Koji naučnik je postavio teoriju relativiteta?',
          answer2: 'Albert Einstein',
          answer1: 'Nikola Tesla',
          answer4: 'Mileva Ajnštajn',
          answer3: 'Jurij Gagarin',
        },
        {
          id: 2,
          question:
            '2.  Koji italijanski fizičar je poznat po svojoj ulozi u modernoj nuklearnoj fizici i kvantnoj mehanici?',
          answer1: 'Enrico Fermi',
          answer4: 'Leonardo da Vinči',
          answer2: 'Nikola Kopernik',
          answer3: 'Đovani Bokačo',
        },
        {
          id: 3,
          question: '3. Koji engleski fizičar je formulisao zakon gravitacije?',
          answer4: 'Isak Newton',
          answer1: 'Karl Fridrih Gaus',
          answer2: 'Sigmund Frojd',
          answer3: 'Galileo Galilej',
        },
        {
          id: 4,
          question:
            '4. Koja poljska naučnica je bila prva žena koja je osvojila Nobelovu nagradu, a radila je na radijaciji?',
          answer4: 'Marija Kiri',
          answer1: 'Mileva Ajnštajn',
          answer2: 'Nadežda Petrović',
          answer3: 'Ništa od navedenog',
        },
        {
          id: 5,
          question:
            '5. Koji indijski fizičar je poznat po svojim radovima na kvantnoj mehanici, posebno na boz-ajnštajnovoj kondenzaciji?',
          answer1: 'Satyendra Nath Bose',
          answer4: 'Marilin vos Savant',
          answer2: 'Rik Rosner',
          answer3: 'Ejnan Kavli',
        },
        {
          id: 6,
          question:
            '6. Koji švedski fizičar je izumio dinamit i ostavio svoje bogatstvo za osnivanje Nobelove nagrade?',
          answer3: 'Alfred Nobel',
          answer1: 'Hanes Alven',
          answer2: 'Johanes Ridberg',
          answer4: 'Karl Vilhelm Šele',
        },
        {
          id: 7,
          question:
            '7. Koja italijanska fizičarka je bila prva žena koja je postala profesor na Univerzitetu u Rimu, a radila je na istraživanju radioaktivnosti?',
          answer3: 'Maria Goeppert-Mayer',
          answer1: 'Meri Aning',
          answer2: 'Liza Majtner',
          answer4: 'Irena Kiri',
        },
        {
          id: 8,
          question:
            '8.  Koji engleski biolog je poznat po svojim radovima na teoriji prirodne selekcije?',
          answer3: 'Charles Darwin',
          answer1: 'Alan Turing',
          answer2: 'Fransis Krik',
          answer4: 'Artur Harden',
        },

        {
          id: 9,
          question:
            '9.  Koji austrijski fizičar je bio jedan od osnivača kvantne mehanike i poznat po nesigurnosti principa?',
          answer4: 'Werner Heisenberg',
          answer1: 'Simon von Stampfer',
          answer2: 'Alexander Tollmann',
          answer3: 'Gregor Mendel',
        },
        {
          id: 10,
          question:
            '10. Koji američki fizičar i inženjer je bio ključni član projekta "Apollo" koji je doveo do sletanja na Mesec?',
          answer1: 'Wernher von Braun',
          answer4: 'Alexandar Graham Bell',
          answer2: 'Tomas Edison',
          answer3: 'Jessy Wallter',
        },
        {
          id: 11,
          question:
            '11.  Koji škotski fizičar je poznat po svom radu na otkrivanju elektromagnetnog indukcije i elektromagnetnih talasa?',
          answer2: 'James Clerk Maxwell',
          answer1: 'James Pajet',
          answer4: 'Halford Makinder',
          answer3: 'Tomas Jang',
        },
      ],
    };
  }
}
