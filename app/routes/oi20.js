import Route from '@ember/routing/route';

export default class Ol20Route extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question:
            '1. Gde su održane prve moderne Letnje olimpijske igre 1896. godine?',
          answer: 'Atina, Grčka',
        },
        {
          id: 2,
          question: '2. Ko je bio osnivač modernih Olimpijskih igara?',
          answer: 'Pierre de Coubertin',
        },
        {
          id: 3,
          question:
            '3. Koji grad je bio domaćin Letnjih olimpijskih igara 1900. godine?',
          answer: 'Pariz, Francuska',
        },
        {
          id: 4,
          question:
            '4. Koje godine su prvi put uvedene Zimske olimpijske igre?',
          answer: '1924. godine',
        },
        {
          id: 5,
          question: '5. Gde su održane prve Zimske olimpijske igre?',
          answer: 'Chamonix, Francuska',
        },
        {
          id: 6,
          question:
            '6. Ko je bio domaćin Letnjih olimpijskih igara 1936. godine?',
          answer: 'Berlin, Nemačka',
        },
        {
          id: 7,
          question:
            '7. Koje su godine održane Letnje olimpijske igre u Londonu pre nego što su se ponovo održale 2012. godine?',
          answer: '1908. i 1948. godine',
        },
        {
          id: 8,
          question:
            '8. Koja je zemlja bila domaćin Zimskih olimpijskih igara 1936. godine?',
          answer: 'Nemačka',
        },
        {
          id: 9,
          question:
            '9. Koji je grad bio domaćin Letnjih olimpijskih igara 1948. godine?',
          answer: 'London, Velika Britanija',
        },
        {
          id: 10,
          question:
            '10. Ko je bio domaćin Letnjih olimpijskih igara 1964. godine?',
          answer: 'Tokio, Japan',
        },
      ],
    };
  }
}
