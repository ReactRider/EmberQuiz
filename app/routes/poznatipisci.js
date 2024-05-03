import Route from '@ember/routing/route';

export default class PoznatipisciRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Ko je napisao roman "Na Drini Ćuprija"?',
          answer: 'Ivo Andrić',
        },
        {
          id: 2,
          question:
            '2. Koji je roman Dostojevskog smatran jednim od najvažnijih dela svetske književnosti?',
          answer: 'Zločin i kazna',
        },
        {
          id: 3,
          question:
            '3. Koja je najpoznatija knjiga koju je napisao Mark Twain?',
          answer:
            '"Pustolovine Tom Sawyera" ili "Pustolovine Huckleberryja Finna"',
        },
        {
          id: 4,
          question: '4. Ko je autor knjige "Mali princ"?',
          answer: 'Antoine de Saint-Exupéry',
        },
        {
          id: 5,
          question: '5. Ko je napisao roman "Ana Karenjina"?',
          answer: 'Lav Tolstoj',
        },
        {
          id: 6,
          question: '6. Ko je autor knjige "100 godina samoće"?',
          answer: 'Gabriel Garsia Markes',
        },
        {
          id: 7,
          question: '7. Ko je napisao delo "Gorski vijenac"?',
          answer: 'Petar II Petrović Njegoš',
        },
        {
          id: 8,
          question:
            '8. Koji je poznati roman Alberta Camusa osvojio Nobelovu nagradu za književnost?',
          answer: '"Stranac" ili "Neprilagođeni"',
        },
        {
          id: 9,
          question:
            '9. Koja je knjiga J. D. Salingera postala klasik američke književnosti?',
          answer: 'Lovac u žitu',
        },
        {
          id: 10,
          question: '10. Ko je napisao roman "Vreme smrti"?',
          answer: 'Dobrica Ćosić',
        },
        {
          id: 11,
          question: '11. Ko je autor knjige "Rat i mir"?',
          answer: 'Lav Tolstoj',
        },
        {
          id: 12,
          question: '12. Ko je napisao "Aleksandra Šurbića"?',
          answer: 'Miloš Crnjanski',
        },
        {
          id: 13,
          question: '13. Ko je napisao roman "Krvava bajka"?',
          answer: 'Borisav Stanković',
        },
        {
          id: 14,
          question:
            '14. Koji je poznati roman F. Skota Ficdžeralda prikazan kroz perspektivu Džejmsa Gatsbija?',
          answer: 'Veliki Getsbi',
        },
      ],
    };
  }
}
