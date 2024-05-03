import Route from '@ember/routing/route';

export default class HaripoterRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Ko je autor serijala knjiga "Harry Potter"?',
          answer: 'J.K. Rowling',
        },
        {
          id: 2,
          question: '2. Koliko knjiga ima originalni serijal "Harry Potter"?',
          answer: 'Sedam knjiga',
        },
        {
          id: 3,
          question: '3. Ko je režirao prvi film u serijalu "Harry Potter"?',
          answer: 'Chris Columbus',
        },
        {
          id: 4,
          question: '4. Kako se zove glumac koji igra lika Harryja Pottera?',
          answer: 'Daniel Radcliffe',
        },
        {
          id: 5,
          question:
            '5. Koja škola za veštičarenje i čarobnjaštvo je domaćin radnje u serijalu "Harry Potter"?',
          answer: 'Hogwarts',
        },
        {
          id: 6,
          question: '6. Ko je bio glavni negativac u serijalu "Harry Potter"?',
          answer: 'Voldemort (Tom Riddle)',
        },
        {
          id: 7,
          question: '7. Koje su tri glavne kuće u Hogwartsu?',
          answer: 'Gryffindor, Slytherin, Ravenclaw, Hufflepuff',
        },
        {
          id: 8,
          question: '8. Kako se zove kućni duh u Gryffindoru?',
          answer: 'Fat Lady',
        },
        {
          id: 9,
          question:
            '9. Koji je glavni rekvizit koji koristi Harry Potter kao čarobnjak?',
          answer: 'Čarobni štap',
        },
        {
          id: 10,
          question: '10.  Ko je bio glumac koji je igrao lika Severusa Snapea?',
          answer: 'Alan Rickman',
        },
        {
          id: 11,
          question:
            '11. Koje su tri osnovne magične komponente za izradu eliksira u svetu "Harry Pottera"?',
          answer: 'Baza, sredstvo i dodatak',
        },
        {
          id: 12,
          question:
            '12. Koje je zanimanje Ron Weasleyja nakon završetka škole?',
          answer: 'Auror',
        },
        {
          id: 13,
          question: '13. Koja je profesorica za transfiguraciju u serijalu?',
          answer: 'Profesor McGonagall',
        },
      ],
    };
  }
}
