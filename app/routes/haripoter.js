import Route from '@ember/routing/route';

export default class HaripoterRoute extends Route {
  model() {
    localStorage.setItem('1.hp', 'ans4');
    localStorage.setItem('2.hp', 'ans3');
    localStorage.setItem('3.hp', 'ans2');
    localStorage.setItem('4.hp', 'ans1');
    localStorage.setItem('5.hp', 'ans3');
    localStorage.setItem('6.hp', 'ans2');
    localStorage.setItem('7.hp', 'ans2');
    localStorage.setItem('8.hp', 'ans1');
    localStorage.setItem('9.hp', 'ans1');
    localStorage.setItem('10.hp', 'ans4');
    localStorage.setItem('11.hp', 'ans2');
    localStorage.setItem('12.hp', 'ans2');
    localStorage.setItem('13.hp', 'ans4');

    return {
      data: [
        {
          id: 1,
          question: '1. Ko je autor serijala knjiga "Harry Potter"?',
          answer4: 'J.K. Rowling',
          answer1: 'J.R.R. Tolkin',
          answer2: 'Fjodor Dostojevski',
          answer3: 'Oskar Vajld',
        },
        {
          id: 2,
          question: '2. Koliko knjiga ima originalni serijal "Harry Potter"?',
          answer3: 'Sedam knjiga',
          answer1: 'Pet knjiga',
          answer2: 'Šest knjiga',
          answer4: 'Devet knjiga',
        },
        {
          id: 3,
          question: '3. Ko je režirao prvi film u serijalu "Harry Potter"?',
          answer2: 'Chris Columbus',
          answer1: 'Monte Piano',
          answer4: 'J.K. Rowling',
          answer3: 'Ništa od navedenog',
        },
        {
          id: 4,
          question:
            '4. Kako se zove najstrašniji i najčuvaniji zatvor u čarobnom svetu?',
          answer1: 'Azkaban',
          answer3: 'Azkabam',
          answer2: 'Azbakan',
          answer4: 'Azbakam',
        },
        {
          id: 5,
          question:
            '5. Koja škola za veštičarenje i čarobnjaštvo je domaćin radnje u serijalu "Harry Potter"?',
          answer3: 'Hogwarts',
          answer1: 'Hufflepuff',
          answer2: 'Ravenclaw',
          answer4: 'Ništa od navedenog',
        },
        {
          id: 6,
          question: '6. Ko je bio glavni negativac u serijalu "Harry Potter"?',
          answer2: 'Voldemort (Tom Riddle)',
          answer1: 'Dumbledore',
          answer4: 'Hagrid',
          answer3: 'Ron Weasley',
        },
        {
          id: 7,
          question: '7. Najbolji prijatelji Harry Pottera zovu se?',
          answer2: 'Ron Weasley i Hermiona Granger',
          answer1: 'Ron Werasley i Hermiona Ganger',
          answer4: 'Sereus Black i Sirius Block',
          answer3: 'Ništa od navedenog',
        },
        {
          id: 8,
          question: '8. Kako se zove kućni duh u Gryffindoru?',
          answer1: 'Fat Lady',
          answer4: 'Lat Fady',
          answer2: 'Voldemort',
          answer3: 'Ginny',
        },
        {
          id: 9,
          question:
            '9. Koji je glavni rekvizit koji koristi Harry Potter kao čarobnjak?',
          answer1: 'Čarobni štap',
          answer4: 'Čarobna metla',
          answer2: 'Magična kapa',
          answer3: 'Vilenjak u rukavu',
        },
        {
          id: 10,
          question: '10.  Ko je bio glumac koji je igrao lika Severusa Snapea?',
          answer4: 'Alan Rickman',
          answer1: 'Alan Hickhar',
          answer2: 'Donald Rickman',
          answer3: 'Ništa od navedenog',
        },
        {
          id: 11,
          question: '11. Koji se sport igra u čarobnjačkom svetu?',
          answer2: 'Metloboj',
          answer1: 'Tenis',
          answer4: 'Fudbal',
          answer3: 'Igre Veštičarenja',
        },
        {
          id: 12,
          question: '12. Kako se zove ujak Hari Potera?',
          answer2: 'Dursley',
          answer1: 'Dumbledore',
          answer4: 'Darsley',
          answer3: 'Ništa od navedenog',
        },
        {
          id: 13,
          question: '13. Zadnji nastavak romana Harry Potter zove se?',
          answer4: 'Harry Potter i darovi smrti',
          answer1: 'Harry Potter i princ mešane krvi',
          answer2: 'Harry Potter i Red feniksa',
          answer3: 'Ništa od navedenog',
        },
      ],
    };
  }
}
