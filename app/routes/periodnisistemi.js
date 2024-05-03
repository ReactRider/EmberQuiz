import Route from '@ember/routing/route';

export default class PeriodnisistemiRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Koji je najjednostavniji element u periodnom sistemu?',
          answer: 'Vodonik (H)',
        },
        {
          id: 2,
          question: '2. Koji je najrasprostranjeniji element u svemiru?',
          answer: 'Hidrogen (H)',
        },
        {
          id: 3,
          question: '3. Koja je hemijska oznaka za gvožđe?',
          answer: ' Fe',
        },
        {
          id: 4,
          question:
            '4. Koje dve hemijske oznake su identične sa njihovim latinskim nazivima?',
          answer: 'Kalijum (K) i Natrijum (Na)',
        },
        {
          id: 5,
          question: '5. Koji element je najlakši metal?',
          answer: 'Litijum (Li)',
        },
        {
          id: 6,
          question:
            '6. Koji element je najviše koristan za proizvodnju energije u nuklearnim reakcijama?',
          answer: 'Uranijum (U)',
        },
        {
          id: 7,
          question: '7.  Koja je hemijska oznaka za srebro?',
          answer: 'Ag',
        },
        {
          id: 8,
          question: '8. Koja je hemijska oznaka za olovo?',
          answer: 'Pb',
        },
        {
          id: 9,
          question: '9.  Koja je hemijska oznaka za zlato?',
          answer: 'Au',
        },
        {
          id: 10,
          question: '10. Koja je hemijska oznaka za kiseonik?',
          answer: 'O',
        },
      ],
    };
  }
}
