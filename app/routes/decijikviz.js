import Route from '@ember/routing/route';

export default class DecijikvizRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Koja boja neba tokom dana?',
          answer: 'Plave',
        },
        {
          id: 2,
          question: '2. Šta raste na drvetu: jabuka ili kamen?',
          answer: 'Jabuka',
        },
        {
          id: 3,
          question: '3. Koliko prstiju imaš na jednoj ruci?',
          answer: 'Pet prstiju',
        },
        {
          id: 4,
          question: '4. Gde žive ribe: u vodi ili na drvetu?',
          answer: 'U vodi',
        },
        {
          id: 5,
          question: '5. Koja životinja ima rep: pas ili riba?',
          answer: 'Pas',
        },
        {
          id: 6,
          question:
            '6. Koje godišnje doba dolazi posle leta: proleće ili jesen?',
          answer: 'Jesen',
        },
        {
          id: 7,
          question:
            '7. Šta koristimo za pranje zuba: viljušku ili četkicu za zube?',
          answer: 'Četkicu za zube',
        },
        {
          id: 8,
          question: '8. Koje vozilo leti u vazduhu: avion ili automobil?',
          answer: 'Avion',
        },
        {
          id: 9,
          question: '9. Koja životinja ima krila: ptica ili zmija?',
          answer: 'Ptica',
        },
        {
          id: 10,
          question: '10. Koje je boje banana: žute ili crvene?',
          answer: 'Žute',
        },
        {
          id: 11,
          question: '11. Koja životinja ima dugu vrat: žirafa ili lav?',
          answer: 'Žirafa',
        },
        {
          id: 12,
          question: '12. Koliko ima dana u nedelji?',
          answer: 'Sedam',
        },
        {
          id: 13,
          question: '13. Ko je bio prvi čovek na Mesecu?',
          answer: 'Nil Armstron',
        },
        {
          id: 14,
          question: '14. Ko je napisao bajku "Crvenkapa"?',
          answer: 'Braća Grim',
        },
        {
          id: 15,
          question:
            '15. Koja životinja ima prugaste šare i slatku hrskavu kožu?',
          answer: 'Zebra',
        },
        {
          id: 16,
          question: '16. Koliko ima godišnjih doba?',
          answer: 'Četiri',
        },
        {
          id: 17,
          question: '17. Kako se zove najveća životinja na Zemlji?',
          answer: 'Plavi kit',
        },
      ],
    };
  }
}
