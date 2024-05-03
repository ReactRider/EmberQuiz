import Route from '@ember/routing/route';

export default class PrijateljiRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Koji je glumac glumio lika Chandlera Binga?',
          answer: 'Matthew Perry',
        },
        {
          id: 2,
          question: '2. Gde se odvija većina radnje u seriji "Prijatelji"?',
          answer: 'New York City',
        },
        {
          id: 3,
          question:
            '3. Koja je prva rečenica koju je izgovorio Chandler Bing u seriji?',
          answer:
            '"There is nothing to tell, he is just some guy I work with."',
        },
        {
          id: 4,
          question: '4. Koja je profesija Rossa Gellera?',
          answer: 'Paleontolog',
        },
        {
          id: 5,
          question:
            '5. Koja je najveća planina na svetuKako se zove kafić u kojem "prijatelji" često provode vreme?',
          answer: 'Central Park',
        },
        {
          id: 6,
          question: '6. Koja je glumica glumila lik Rachel Green?',
          answer: 'Jennifer Aniston',
        },
        {
          id: 7,
          question: '7.  Čija svadba se dešava u poslednjoj epizodi serije?',
          answer: 'Chandlara i Monice',
        },
        {
          id: 8,
          question: '8. Koji je lik imao fobiju od ptica?',
          answer: 'Chandler Bing',
        },
        {
          id: 9,
          question: '9. Kako se zove poslednja epizoda serije?',
          answer: '"The Last One"',
        },
      ],
    };
  }
}
