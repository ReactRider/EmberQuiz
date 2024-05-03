import Route from '@ember/routing/route';

export default class IstorijaRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Ko je bio prvi rimski car?',
          answer: 'Gaj Oktavijan Avgust',
        },
        {
          id: 2,
          question: '2. Kada je počeo Prvi svetski rat?',
          answer: '28. jula 1914. godine',
        },
        {
          id: 3,
          question: '3. Ko je bio vođa Francuske tokom Francuske revolucije?',
          answer: 'Napoleon Bonaparta',
        },
        {
          id: 4,
          question: '4. Koji događaj označava početak američke revolucije?',
          answer: '19. aprila 1775. godine',
        },
        {
          id: 5,
          question: '5. Koja je bila najveća imperija u istoriji?',
          answer: 'Mongolska imperija pod vladavinom Džingis-kana',
        },
        {
          id: 6,
          question: '6. Kada se dogodila Velika depresija?',
          answer: 'od 1929. do sredine 1930-ih godina',
        },
        {
          id: 7,
          question:
            '7. Koja je bila poslednja dinastija koja je vladala Kinezima?',
          answer: 'dinastija Qing',
        },
        {
          id: 8,
          question:
            '8. Ko je bio vođa Crvene armije tokom Oktobarske revolucije?',
          answer: 'Vladimir Lenjin',
        },
        {
          id: 9,
          question: '9. Koji je bio datum pada Berlinskog zida?',
          answer: '9. novembra 1989.godine',
        },
        {
          id: 10,
          question: '10. Koji je bio prvi grad na svetu?',
          answer: 'Uruk u drevnoj Mezopotamiji',
        },
        {
          id: 11,
          question: '11. Koji događaj je označio kraj Srednjeg veka?',
          answer: ' Pad Carigrada 1453. godine',
        },
        {
          id: 12,
          question: '12. Ko je bio prvi američki predsednik?',
          answer: 'Džordž Vašington',
        },
        {
          id: 13,
          question: '13. Koja je bila najduža dinastija u kineskoj istoriji?',
          answer: 'Dinastija Zhou',
        },
        {
          id: 14,
          question: '14. Koji je bio vladar Engleske tokom španske armade?',
          answer: 'Elizabeta I',
        },
        {
          id: 15,
          question:
            '15.  Kako se naziva period u istoriji kada je antička Grčka bila na vrhuncu svoje moći?',
          answer: 'Zlatno doba Perikla',
        },
        {
          id: 16,
          question:
            '16. Ko je bio osnivač Islamske države i poslednji prorok u islamu?',
          answer: 'Muhamed',
        },
      ],
    };
  }
}
