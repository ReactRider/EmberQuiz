import Route from '@ember/routing/route';

export default class DomacifilmoviRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question:
            '1. Koji srpski film je dobio Zlatnu palmu na Kanskom filmskom festivalu?',
          answer: 'Film "Underground" reditelja Emira Kusturice',
        },
        {
          id: 2,
          question: '2. Ko je režirao film "Ko to tamo peva"?',
          answer: 'Slobodan Šijan',
        },
        {
          id: 3,
          question: '3. Koji je prvi srpski film u boji?',
          answer: '"Ljubav i moda" iz 1960. godine, reditelja Ratka Draževića',
        },
        {
          id: 4,
          question: '4. Koji je prvi dugometražni srpski animirani film?',
          answer: '"Technotise: Edit i ja"',
        },
        {
          id: 5,
          question: '5. Koji je najpoznatiji film reditelja Živka Nikolića?',
          answer: '"Balkanski špijun"',
        },
        {
          id: 6,
          question:
            '6. Koja glumica je dobila nagradu za najbolju glavnu žensku ulogu na Kanskom filmskom festivalu za film "Otac na službenom putu"?',
          answer: 'Mirjana Karanović',
        },
        {
          id: 7,
          question: '7. Ko je režirao film "Mrtav ladan"?',
          answer: 'Miloš Radivojević',
        },
        {
          id: 8,
          question:
            '8. Koji je prvi srpski film koji je nominovan za Oskara u kategoriji za najbolji strani film?',
          answer: ' "Zona Zamfirova" reditelja Zdravka Šotre',
        },
        {
          id: 9,
          question: '9. Ko je režirao film "Montevideo, Bog te video"?',
          answer: 'Dragan Bjelogrlić',
        },
        {
          id: 10,
          question: '10. Koja je prva srpska zvučna filmska komedija?',
          answer: '"Čudna devojka" iz 1935. godine',
        },
        {
          id: 11,
          question:
            '11. Koja glumica je osvojila nagradu za najbolju glavnu žensku ulogu na Venecijanskom filmskom festivalu za film "Dara iz Jasenovca"?',
          answer: ' Biljana Čekić',
        },
        {
          id: 12,
          question: '12. Koja je najgledanija srpska drama svih vremena?',
          answer: '"Lepa sela lepo gore"',
        },
      ],
    };
  }
}
