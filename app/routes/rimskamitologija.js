import Route from '@ember/routing/route';

export default class RimskamitologijaRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Koji je bog bio vrhovni bog u rimskoj mitologiji?',
          answer: 'Jupiter',
        },
        {
          id: 2,
          question: '2. Ko je bio bog rata u rimskoj mitologiji?',
          answer: 'Mars',
        },
        {
          id: 3,
          question:
            '3. Koja je boginja bila zaštitnica domaćinstva i porodice u rimskoj mitologiji?',
          answer: 'Venera',
        },
        {
          id: 4,
          question:
            '4. Ko je bio bog trgovine, putovanja i lopovluka u rimskoj mitologiji?',
          answer: 'Merkur',
        },
        {
          id: 5,
          question:
            '5. Ko je bio bog trgovine, putovanja i lopovluka u rimskoj mitologiji?',
          answer: 'Jupiter',
        },
        {
          id: 6,
          question: '6. Ko je bio osnivač Rima prema rimskoj mitologiji?',
          answer: 'Romul i Rem',
        },
        {
          id: 7,
          question: '7. Ko je bio bog mora u rimskoj mitologiji?',
          answer: 'Neptun',
        },
        {
          id: 8,
          question: '8. Koji je rimski bog bio zaštitnik putnika i puteva?',
          answer: 'Merkur',
        },
        {
          id: 9,
          question:
            '9. Koja je boginja bila zaštitnica braka i rođenja u rimskoj mitologiji ?',
          answer: 'Junona',
        },
        {
          id: 10,
          question:
            '10. Ko je bio bog svetla, umetnosti i istine u rimskoj mitologiji?',
          answer: 'Apolon',
        },
      ],
    };
  }
}
