import Route from '@ember/routing/route';

export default class DecijikvizRoute extends Route {
  model() {
    localStorage.setItem('1.deca', 'ans3');
    localStorage.setItem('2.deca', 'ans1');
    localStorage.setItem('3.deca', 'ans4');
    localStorage.setItem('4.deca', 'ans2');
    localStorage.setItem('5.deca', 'ans1');
    localStorage.setItem('6.deca', 'ans2');
    localStorage.setItem('7.deca', 'ans2');
    localStorage.setItem('8.deca', 'ans4');
    localStorage.setItem('9.deca', 'ans1');
    localStorage.setItem('10.deca', 'ans2');
    localStorage.setItem('11.deca', 'ans2');
    localStorage.setItem('12.deca', 'ans3');
    localStorage.setItem('13.deca', 'ans1');
    localStorage.setItem('14.deca', 'ans4');
    localStorage.setItem('15.deca', 'ans3');

    return {
      data: [
        {
          id: 1,
          question: '1. Koja je boja neba tokom dana?',
          answer3: 'Plava',
          answer1: 'Siva',
          answer2: 'Zelena',
          answer4: 'Ljubičasta',
        },
        {
          id: 2,
          question: '2. Šta raste na drvetu: jabuka ili kamen?',
          answer1: 'Jabuka',
          answer2: 'Kamen',
          answer3: 'Ništa od ponuđenog',
        },
        {
          id: 3,
          question: '3. Koliko prstiju imaš na jednoj ruci?',
          answer4: 'Pet prstiju',
          answer1: 'Četiri prstiju',
          answer2: 'Deset prstiju',
          answer3: 'Tri prsta',
        },
        {
          id: 4,
          question: '4. Gde žive ribe: u vodi ili na drvetu?',
          answer2: 'U vodi',
          answer1: 'Na drvetu',
          answer3: 'Ništa od ponuđenog',
        },
        {
          id: 5,
          question: '5. Koja od ponuđenih životinja ima rep?',
          answer1: 'Pas',
          answer2: 'Ajkula',
          answer3: 'Zmija',
          answer4: 'Papagaj',
        },
        {
          id: 6,
          question:
            '6. Koje godišnje doba dolazi posle leta: proleće ili jesen?',
          answer2: 'Jesen',
          answer1: 'Proleće',
          answer3: 'Ništa od ponuđenog',
        },
        {
          id: 7,
          question: '7. Šta koristimo za pranje zuba?',
          answer2: 'Četkicu za zube',
          answer1: 'Viljušku',
          answer3: 'Ništa od ponuđenog',
        },
        {
          id: 8,
          question: '8. Koje vozilo leti u vazduhu?',
          answer1: 'Motor',
          answer3: 'Automobil',
          answer2: 'Kamion',
          answer4: 'Helikopter',
        },
        {
          id: 9,
          question: '9. Koja životinja ima krila?',
          answer1: 'Pingvin',
          answer2: 'Delfin',
          answer3: 'Krtica',
          answer4: 'Ništa od ponuđenog',
        },
        {
          id: 10,
          question: '10. Koje je boje banana?',
          answer2: 'Žute boje',
          answer1: 'Druge boje',
          answer3: 'Zelene boje',
          answer4: 'Roze boje',
        },
        {
          id: 11,
          question: '11. Koja od navedenih životinja ima najduži vrat?',
          answer2: 'Žirafa',
          answer1: 'Lav',
          answer3: 'Nilski konj',
          answer4: 'Ništa od ponuđenog',
        },
        {
          id: 12,
          question: '12. Koliko ima dana u nedelji?',
          answer3: 'Sedam dana',
          answer1: 'Pet dana',
          answer2: 'Tri dana',
          answer4: 'Deset dana',
        },
        {
          id: 13,
          question: '13. Ko je bio prvi čovek na Mesecu?',
          answer1: 'Nil Armstrong',
          answer2: 'Ništa od ponuđenog',
          answer4: 'Momo Kapor',
          answer3: 'Jurij Gagarin',
        },
        {
          id: 14,
          question: '14. Ko je napisao bajku "Crvenkapa"?',
          answer4: 'Braća Grim',
          answer1: 'Hans Kristijan Andersen',
          answer2: 'Danilo Kiš',
          answer3: 'Ljubomir Ršumović',
        },
        {
          id: 15,
          question: '15. Koja životinja ima prugaste šare i živi u Africi?',
          answer3: 'Zebra',
          answer1: 'Lav',
          answer2: 'Konj',
          answer4: 'Magarac',
        },
      ],
    };
  }
}
