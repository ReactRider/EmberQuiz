import Route from '@ember/routing/route';

export default class Ol21Route extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Gde su održane Letnje olimpijske igre 2000. godine?',
          answer: 'Sidnej, Australija',
        },
        {
          id: 2,
          question:
            '2. Koja zemlja je domaćin Zimskih olimpijskih igara 2002. godine?',
          answer: 'Sjedinjene Američke Države',
        },
        {
          id: 3,
          question: '3. Koje su godine Letnje olimpijske igre održane u Atini?',
          answer: '2004. godine',
        },
        {
          id: 4,
          question:
            '4. Koja zemlja je bila domaćin Zimskih olimpijskih igara 2006. godine?',
          answer: 'Italija',
        },
        {
          id: 5,
          question: '5. Gde su održane Letnje olimpijske igre 2008. godine?',
          answer: 'Peking, Kina',
        },
        {
          id: 6,
          question:
            '6. Koja zemlja je domaćin Zimskih olimpijskih igara 2010. godine?',
          answer: 'Kanada',
        },
        {
          id: 7,
          question:
            '7. Koje su godine Letnje olimpijske igre održane u Londonu?',
          answer: '2012. godine',
        },
        {
          id: 8,
          question:
            '8. Koja zemlja je bila domaćin Letnjih olimpijskih igara 2016. godine?',
          answer: 'Brazil',
        },
        {
          id: 9,
          question:
            '9. Koje su godine Zimske olimpijske igre održane u Južnoj Koreji?',
          answer: '2018. godine',
        },
        {
          id: 10,
          question:
            '10. Koja zemlja je domaćin Zimskih olimpijskih igara 2022. godine?',
          answer: 'Kina',
        },
        {
          id: 11,
          question:
            '11.  Gde će biti održane Zimske olimpijske igre 2026. godine?',
          answer: 'Italija',
        },
        {
          id: 12,
          question:
            '12. Koja zemlja će biti domaćin Letnjih olimpijskih igara 2028. godine?',
          answer: 'Sjedinjene  Američke Države',
        },
      ],
    };
  }
}
