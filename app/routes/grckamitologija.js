import Route from '@ember/routing/route';

export default class GrckamitologijaRoute extends Route {
  model() {
    localStorage.setItem('1.gr', 'ans2');
    localStorage.setItem('2.gr', 'ans3');
    localStorage.setItem('3.gr', 'ans1');
    localStorage.setItem('4.gr', 'ans1');
    localStorage.setItem('5.gr', 'ans4');
    localStorage.setItem('6.gr', 'ans2');
    localStorage.setItem('7.gr', 'ans4');
    localStorage.setItem('8.gr', 'ans3');
    localStorage.setItem('9.gr', 'ans3');
    localStorage.setItem('10.gr', 'ans2');
    localStorage.setItem('11.gr', 'ans1');
    localStorage.setItem('12.gr', 'ans4');

    return {
      data: [
        {
          id: 1,
          question: '1. Ko je bio vrhovni bog u grčkoj mitologiji?',
          answer2: 'Zevs',
          answer1: 'Posejdon',
          answer4: 'Alfej',
          answer3: 'Eol',
        },
        {
          id: 2,
          question: '2. Ko je bio bog rata u grčkoj mitologiji?',
          answer3: 'Ares',
          answer1: 'Dionis',
          answer2: 'Hermes',
          answer4: 'Hefest',
        },
        {
          id: 3,
          question: '3. Ko je bio bog mora u grčkoj mitologiji?',
          answer1: 'Posejdon',
          answer4: 'Demetar',
          answer2: 'Tetida',
          answer3: 'Ništa od navedenog',
        },
        {
          id: 4,
          question: '4. Ko je bila boginja mudrosti u grčkoj mitologiji?',
          answer1: 'Atina',
          answer4: 'Ahila',
          answer2: 'Afrika',
          answer3: 'Evropa',
        },
        {
          id: 5,
          question: '5. Ko je bio bog Sunca u grčkoj mitologiji?',
          answer4: 'Helios',
          answer1: 'Sizif',
          answer2: 'Zevs',
          answer3: 'Ništa od navedenog',
        },
        {
          id: 6,
          question: '6. Ko je bio bog podzemnog sveta u grčkoj mitologiji',
          answer2: 'Had',
          answer1: 'Herkul',
          answer4: 'Mars',
          answer3: 'Ništa od navedenog',
        },
        {
          id: 7,
          question: '7. Ko je boginja ljubavi i lepote u grčkoj mitologiji?',
          answer4: 'Afrodita',
          answer1: 'Rea',
          answer2: 'Nereja',
          answer3: 'Atina',
        },
        {
          id: 8,
          question: '8. Ko je bio junak koji je ubio Minotaura?',
          answer3: 'Tezej',
          answer1: 'Apolon',
          answer2: 'Odisej',
          answer4: 'Posejdon',
        },
        {
          id: 9,
          question:
            '9. Ko je bio grčki heroj poznat po svojoj snazi i hrabrosti?',
          answer3: 'Herkules',
          answer1: 'Had',
          answer2: 'Ahilej',
          answer4: 'Ništa od navedenog',
        },
        {
          id: 10,
          question: '10. Ko je bio trojanski princ koji je bio junak Ilijade?',
          answer2: 'Hektor',
          answer1: 'Eol',
          answer4: 'Ahilej',
          answer3: 'Posejdon',
        },
        {
          id: 11,
          question: '11. Ko je bio kralj Itake i junak Odiseje?',
          answer1: 'Odisej',
          answer4: 'Rea',
          answer2: 'Nefertiti',
          answer3: 'Ništa od navedenog',
        },
        {
          id: 12,
          question:
            '12. Ko je bio grčki titan koji je ukrao vatru i dao je ljudima?',
          answer4: 'Prometej',
          answer1: 'Had',
          answer2: 'Herkules',
          answer3: 'Posejdon',
        },
      ],
    };
  }
}
