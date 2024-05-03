import Route from '@ember/routing/route';

export default class GeografijaRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Koja je najveća planina na svetu?',
          answer: 'Mont Everest u lancu Himalaja',
        },
        {
          id: 2,
          question: '2. Koji je najduži reka na svetu?',
          answer: 'Nil',
        },
        {
          id: 3,
          question: '3. Koja je najveća pustinja na svetu?',
          answer: 'Sahara',
        },
        {
          id: 4,
          question: '4. Koja je najviša kontinentalna planina?',
          answer: 'Akonkagva',
        },
        {
          id: 5,
          question: '5.  Koja je najgušće naseljena zemlja na svetu?',
          answer: 'Monako',
        },
        {
          id: 6,
          question: '6. Koja je najveća ostrvska država na svetu?',
          answer: 'Indonezija',
        },
        {
          id: 7,
          question: '7. Koji je najveći kontinent na svetu?',
          answer: 'Azija',
        },
        {
          id: 8,
          question: '8. Koja je najmanja država na svetu po površini?',
          answer: 'Vatikan',
        },
        {
          id: 9,
          question: '9. Koja je najdublja tačka na Zemlji?',
          answer: ' Marinska brazda u Tihom okeanu',
        },
        {
          id: 10,
          question: '10. Koje tri zemlje dele najdužu granicu na svetu?',
          answer:
            'Najdužu granicu na svetu dele Rusija, Kanada i Sjedinjene Američke Države',
        },
        {
          id: 11,
          question: '11. Koja je najveća ostrvska država u Evropi?',
          answer: 'Velika Britanija',
        },
        {
          id: 12,
          question: '12. Koja je najveća zemlja na svetu po površini?',
          answer: 'Rusija',
        },
        {
          id: 13,
          question: '13. Koji je najviši vodopad na svetu?',
          answer: 'Anđeonsi vodopad u Venecueli',
        },
        {
          id: 14,
          question: '14. Koji je najveći arhipelag na svetu?',
          answer: 'Indonezijski arhipelag',
        },
        {
          id: 15,
          question: '15.  Koja zemlja ima najdužu obalu na svetu?',
          answer: 'Kanada',
        },
      ],
    };
  }
}
