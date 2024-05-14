import Route from '@ember/routing/route';

export default class DomacifilmoviRoute extends Route {
  model() {
    localStorage.setItem('1.df', 'ans1');
    localStorage.setItem('2.df', 'ans2');
    localStorage.setItem('3.df', 'ans2');
    localStorage.setItem('4.df', 'ans1');
    localStorage.setItem('5.df', 'ans1');
    localStorage.setItem('6.df', 'ans2');
    localStorage.setItem('7.df', 'ans2');
    localStorage.setItem('8.df', 'ans1');
    localStorage.setItem('9.df', 'ans2');
    localStorage.setItem('10.df', 'ans1');
    localStorage.setItem('11.df', 'ans1');
    localStorage.setItem('12.df', 'ans1');
    

    return {
      data: [
        {
          id: 1,
          question:
            '1. Film "Underground" je srpski film koji je dobio Zlatnu palmu na Kanskom filmskom festivalu?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 2,
          question: '2. Slobodan Šijan nije režirao film "Ko to tamo peva"?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 3,
          question:
            '3. Ljubav i moda iz 1990. godine je prvi srpski film u boji?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 4,
          question:
            '4. Technotise: Edit i ja je prvi dugometražni srpski animirani film?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 5,
          question:
            '5. Balkanski špijun je najpoznatiji film reditelja Ivana Nikolića?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 6,
          question:
            '6. Mirjana Jovanović je dobila nagradu za najbolju glavnu žensku ulogu na Kanskom filmskom festivalu za film "Otac na službenom putu"?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 7,
          question: '7. Miloš Radojević je režirao film "Mrtav ladan"?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 8,
          question:
            '8. Zona Zamfirova reditelja Zdravka Šotre je drugi srpski film koji je nominovan za Oskara u kategoriji za najbolji strani film?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 9,
          question:
            '9. Dragan Bjelogrlić nije režirao film "Montevideo, Bog te video"?',
          answer2: 'Tačno',
          answer1: 'Netačno',
        },
        {
          id: 10,
          question:
            '10. Čudna devojka iz 1935. je prva srpska zvučna filmska komedija?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 11,
          question:
            '11. Biljana Čekić je osvojila nagradu za najbolju glavnu žensku ulogu na Venecijanskom filmskom festivalu za film "Dara iz Jasenovca"?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 12,
          question:
            '12. Lepa sela lepo gore je najgledanija srpska drama svih vremena?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
      ],
    };
  }
}
