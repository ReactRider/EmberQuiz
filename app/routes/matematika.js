import Route from '@ember/routing/route';

export default class MatematikaRoute extends Route {
  model() {
    localStorage.setItem('1.mat', 'ans2');
    localStorage.setItem('2.mat', 'ans3');
    localStorage.setItem('3.mat', 'ans3');

    localStorage.setItem('4.mat', 'ans1');
    localStorage.setItem('5.mat', 'ans4');
    localStorage.setItem('6.mat', 'ans3');

    localStorage.setItem('7.mat', 'ans2');
    localStorage.setItem('8.mat', 'ans3');
    localStorage.setItem('9.mat', 'ans2');

    localStorage.setItem('10.mat', 'ans2');
    localStorage.setItem('11.mat', 'ans1');
    localStorage.setItem('12.mat', 'ans4');

    return {
      data: [
        {
          id: 1,
          question: '1. Podudarni trouglovi imaju?',
          answer2: 'Međusobno podudarne odgovarajuće stranice i uglove',
          answer1: 'Međusobno podudarne visine trouglova',
          answer4: 'Međusobno podudarne odgovarajuće tačke i težišta',
          answer3: 'Međusobno podudarna težišta',
        },

        {
          id: 2,
          question: '2. Koje su osnovne operacije u aritmetici?',
          answer3: 'Sabiranje, oduzimanje, množenje, deljenje',
          answer1:
            'Sabiranje, oduzimanje, množenje i deljenje polinoma i brojeva',
          answer2: 'Sabiranje, oduzimanje, množenje i logaritmovanje',
          answer4: 'Sabiranje, oduzimanje, množenje, deljenje i integraljenje',
        },

        {
          id: 3,
          question:
            '3. Kako se zove broj koji se može napisati kao količnik dva cela broja?',
          answer3: 'Celobrojni broj',
          answer1: 'Realni broj',
          answer2: 'Prirodni broj',
          answer4: 'Iracionalni broj',
        },
        {
          id: 4,
          question: '4. Šta je Riemannova hipoteza?',
          answer1:
            'Riemannova hipoteza je jedan od najpoznatijih nerešenih problema u matematici, koji tvrdi da sve nule Riemannove zeta funkcije imaju realan deo jednak 1/2',
          answer4:
            'Riemannova hipoteza je jedan od najpoznatijih nerešenih problema u matematici, koji tvrdi da sve nule Riemannove delta funkcije imaju realan deo jednak 1/2',
          answer2:
            'Riemannova hipoteza je jedan od najpoznatijih nerešenih problema u matematici, koji tvrdi da sve nule Riemannove zeta funkcije imaju realan deo jednak 1/3',
          answer3:
            'Riemannova hipoteza je jedan od najpoznatijih nerešenih problema u matematici, koji tvrdi da sve nule Riemannove delta funkcije imaju realan deo jednak 1/3',
        },
        {
          id: 5,
          question: '5. Koji je najmanji prirodan broj skupa N?',
          answer4: '1',
          answer1: '-1',
          answer2: '0',
          answer3: 'Ništa od navedenog',
        },
        {
          id: 6,
          question: '6. Da li je broj 1 prost ili složen broj?',
          answer3: 'Broj 1 nije ni prost, ni složen broj',
          answer1: 'Broj 1 je prost broj',
          answer2: 'Broj 1 je složen broj',
          answer4: 'Broj 1 je prost, ali i složen broj',
        },
        {
          id: 7,
          question: '7. Simetrala ugla deli ugao na koliko delova?',
          answer2: 'Na 2 delova',
          answer1: 'Na 6 delova',
          answer4: 'Na 3 delova',
          answer3: 'Ništa od navedenog',
        },
        {
          id: 8,
          question:
            '8. Ako podelimo prethodnik broja 99 sa sledbenikom broja 13, a taj broj potom kvadriramo dobijamo?',
          answer3: '196',
          answer1: '225',
          answer2: '200',
          answer4: '400',
        },
        {
          id: 9,
          question:
            '9. Kako se zove geometrijsko telo koje ima sve strane iste dužine?',
          answer2: 'Kocka',
          answer1: 'Kvadar',
          answer4: 'Prizma',
          answer3: 'Kupa',
        },
        {
          id: 10,
          question:
            '10. Ukoliko sa a obeležavamo dužinu osnovne ivice, sa H dužinu visine kvadra, sa B površinu baze kvadra, a sa M obeležavamo površinu omotača kvadra, koja je formula za izračunavanje telesne dijagonale kvadra?',
          answer2: 'a*sqrt(3)',
          answer1: '(2*a^2 + M) / (B + H^3)',
          answer4: '(H*sqrt(3))/a^4',
          answer3: '2*(a*M+H)*sqrt(5)',
        },
        {
          id: 11,
          question: '11. Koja je vrednost sledećeg izraza: 1/2+3² + 2*4²+17?',
          answer1: '58.5',
          answer4: '62.5',
          answer2: '72',
          answer3: '54.75',
        },
        {
          id: 12,
          question: '12. Koja je vrijednost π (pi) zaokružena na pet decimala?',
          answer4: '3.14159',
          answer1: '3.14158',
          answer2: '3.14155',
          answer3: '3.14157',
        },
      ],
    };
  }
}
