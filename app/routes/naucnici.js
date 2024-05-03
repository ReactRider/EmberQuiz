import Route from '@ember/routing/route';

export default class NaucniciRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Koji naučnik je postavio teoriju relativiteta?',
          answer: 'Albert Einstein',
        },
        {
          id: 2,
          question:
            '2.  Koji italijanski fizičar je poznat po svojoj ulozi u modernoj nuklearnoj fizici i kvantnoj mehanici?',
          answer: 'Enrico Fermi',
        },
        {
          id: 3,
          question: '3. Koji engleski fizičar je formulirao zakon gravitacije?',
          answer: 'Isak Newton',
        },
        {
          id: 4,
          question:
            '4. Koja poljska naučnica je bila prva žena koja je osvojila Nobelovu nagradu, a radila je na radijaciji?',
          answer: 'Marie Curie',
        },
        {
          id: 5,
          question:
            '5. Koji indijski fizičar je poznat po svojim radovima na kvantnoj mehanici, posebno na bose-einsteinovoj kondenzaciji?',
          answer: 'Satyendra Nath Bose',
        },
        {
          id: 6,
          question:
            '6. Koji švedski fizičar je izumio dinamit i ostavio svoje bogatstvo za osnivanje Nobelove nagrade?',
          answer: 'Alfred Nobel',
        },
        {
          id: 7,
          question:
            '7. Koja italijanska fizičarka je bila prva žena koja je postala profesor na Univerzitetu u Rimu, a radila je na istraživanju radioaktivnosti?',
          answer: 'Maria Goeppert-Mayer',
        },
        {
          id: 8,
          question:
            '8.  Koji engleski biolog je poznat po svojim radovima na teoriji prirodne selekcije?',
          answer: 'Charles Darwin',
        },

        {
          id: 9,
          question:
            '9.  Koji austrijski fizičar je bio jedan od osnivača kvantne mehanike i poznat po nesigurnosti principa?',
          answer: 'Werner Heisenberg',
        },
        {
          id: 10,
          question:
            '10. Koji američki fizičar i inženjer je bio ključni član projekta "Apollo" koji je doveo do sletanja na Mesec?',
          answer: 'Wernher von Braun',
        },
        {
          id: 11,
          question:
            '11.  Koji škotski fizičar je poznat po svom radu na otkrivanju elektromagnetnog indukcije i elektromagnetnih talasa?',
          answer: 'James Clerk Maxwell',
        },
      ],
    };
  }
}
