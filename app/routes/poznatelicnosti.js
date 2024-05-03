import Route from '@ember/routing/route';

export default class PoznatelicnostiRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question:
            '1. Ko je bio američki predsednik za vreme Američkog građanskog rata?',
          answer: 'Abraham Linkoln',
        },
        {
          id: 2,
          question: '2. Ko je bio kralj Engleske tokom Španskog armadnog rata?',
          answer: 'Kralj Filip II Španski',
        },
        {
          id: 3,
          question:
            '3. Ko je bio lider Sovjetskog Saveza tokom Drugog svetskog rata?',
          answer: 'Josif Staljin',
        },
        {
          id: 4,
          question:
            '4. Koja žena je bila prva žena premijer u Velikoj Britaniji?',
          answer: 'Margaret Thatcher',
        },
        {
          id: 5,
          question:
            '5. Ko je osnovao Mongolsko carstvo i bio poznat po svojoj osvajačkoj kampanji?',
          answer: 'Džingis Kan',
        },
        {
          id: 6,
          question:
            '6. Ko je bio vođa francuske revolucije i vođa Francuske tokom većeg dela ratova sa Evropom?',
          answer: ' Napoleon Bonaparta',
        },
        {
          id: 7,
          question: '7. Ko je bio osnivač islamske vere?',
          answer: 'Muhamed',
        },
        {
          id: 8,
          question:
            '8. Ko je bio filozof i naučnik čiji su radovi postavili osnove moderne nauke i empirizma?',
          answer: 'Isak Njutn',
        },
        {
          id: 9,
          question:
            '9. Ko je bio vođa antiapartheidskog pokreta u Južnoj Africi i prvi crni predsednik te zemlje?',
          answer: 'Nelson Mandela',
        },
        {
          id: 10,
          question:
            '10. Ko je bio poznati istraživač i moreplovac koji je otvorio put za evropsko osvajanje Amerike?',
          answer: 'Kristofor Kolumbo',
        },
        {
          id: 11,
          question: '11. Ko je bio lider Sovjetskog Saveza tokom Hladnog rata?',
          answer: 'Mihail Gorbačov',
        },
      ],
    };
  }
}
