import Route from '@ember/routing/route';

export default class PrijateljiRoute extends Route {
  model() {
    localStorage.setItem('1.prij', 'ans4');
    localStorage.setItem('2.prij', 'ans3');
    localStorage.setItem('3.prij', 'ans1');

    localStorage.setItem('4.prij', 'ans2');
    localStorage.setItem('5.prij', 'ans1');
    localStorage.setItem('6.prij', 'ans4');

    localStorage.setItem('7.prij', 'ans3');
    localStorage.setItem('8.prij', 'ans3');
    localStorage.setItem('9.prij', 'ans4');

    return {
      data: [
        {
          id: 1,
          question: '1. Koji je glumac glumio lika Chandlera Binga?',
          answer4: 'Matthew Perry',
          answer1: 'Matt LeBlanc',
          answer2: 'David Schwimmer',
          answer3: 'Elliot Gould',
        },
        {
          id: 2,
          question: '2. Gde se odvija većina radnje u seriji "Prijatelji"?',
          answer3: 'New York City',
          answer1: 'Los Angeles',
          answer2: 'Washington',
          answer4: 'Toronto',
        },
        {
          id: 3,
          question:
            '3. Koje godine je počelo snimanje serije?',
          answer1:
            '1994. godine',
            answer4: '1995. godine',
          answer2: '1993. godine',
          answer3: '2001. godine',
        },
        {
          id: 4,
          question: '4. Koja je profesija Rossa Gellera?',
          answer2: 'Paleontolog',
          answer1: 'Arheolog',
          answer4: 'Humanolog',
          answer3: 'Pisac',
        },
        {
          id: 5,
          question:
            '5. Kako se zove kafić u kojem "prijatelji" često provode vreme?',
          answer1: 'Central Park',
          answer4: 'Caffe Central',
          answer2: 'Central Caffe',
          answer3: 'NY Caffe',
        },
        {
          id: 6,
          question: '6. Koja je glumica glumila lik Rachel Green?',
          answer4: 'Jennifer Aniston',
          answer1: 'Vourteney Cox',
          answer2: 'Lisa Kudrow',
          answer3: 'Pamela Anderson',
        },
        {
          id: 7,
          question: '7.  Čija svadba se dešava u poslednjoj epizodi serije?',
          answer3: 'Chandlera i Monike',
          answer1: 'Rosa i Rachel',
          answer2: 'Chandlera i Rachel',
          answer4: 'Joey i Monike',
        },
        {
          id: 8,
          question: '8. Koji je lik imao fobiju od ptica?',
          answer3: 'Chandler Bing',
          answer1: 'Ross Geller',
          answer2: 'Joey Tribbiani',
          answer4: 'Rachel Green',
        },
        {
          id: 9,
          question: '9. Kako se zove poslednja epizoda serije?',
          answer4: 'Ništa od navedenog',
          answer1: '"The one with the proposal pt. 2"',
          answer2: '"The one with the baby shower"',
          answer3: '"The one at the Beach"',
        },
      ],
    };
  }
}
