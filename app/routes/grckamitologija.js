import Route from '@ember/routing/route';

export default class GrckamitologijaRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Ko je bio vrhovni bog u grčkoj mitologiji?',
          answer: 'Zevs',
        },
        {
          id: 2,
          question: '2. Ko je bio bog rata u grčkoj mitologiji?',
          answer: 'Ares',
        },
        {
          id: 3,
          question: '3. Ko je bio bog mora u grčkoj mitologiji?',
          answer: 'Posejdon',
        },
        {
          id: 4,
          question: '4. Ko je bila boginja mudrosti u grčkoj mitologiji?',
          answer: 'Atina',
        },
        {
          id: 5,
          question: '5. Ko je bio bog Sunca u grčkoj mitologiji?',
          answer: 'Helios',
        },
        {
          id: 6,
          question: '6. Ko je bio bog podzemnog sveta u grčkoj mitologiji',
          answer: 'Had',
        },
        {
          id: 7,
          question: '7. Koja je boginja ljubavi i lepote u grčkoj mitologiji?',
          answer: 'Afrodita',
        },
        {
          id: 8,
          question: '8. Ko je bio junak koji je ubio Minotaura?',
          answer: 'Tezej',
        },
        {
          id: 9,
          question: '9. Ko je bio heroj poznat po svojoj snazi i hrabrosti?',
          answer: 'Herkules',
        },
        {
          id: 10,
          question: '10. Ko je bio trojanski princ koji je bio junak Ilijade?',
          answer: 'Hektor',
        },
        {
          id: 11,
          question: '11. Ko je bio kralj Itake i junak Odiseje?',
          answer: 'Odisej',
        },
        {
          id: 12,
          question: '12. Ko je bio titan koji je ukrao vatru i dao ga ljudima?',
          answer: 'Prometej',
        },
      ],
    };
  }
}
