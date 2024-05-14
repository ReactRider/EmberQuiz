import Route from '@ember/routing/route';

export default class PeriodnisistemiRoute extends Route {
  model() {
    
    localStorage.setItem('1.persis', 'ans4');
    
    localStorage.setItem('2.persis', 'ans1');
    localStorage.setItem('3.persis', 'ans4');
    localStorage.setItem('4.persis', 'ans3');
    
    localStorage.setItem('5.persis', 'ans1');
    localStorage.setItem('6.persis', 'ans2');
    localStorage.setItem('7.persis', 'ans4');
    
    localStorage.setItem('8.persis', 'ans3');
    localStorage.setItem('9.persis', 'ans2');
    localStorage.setItem('10.persis', 'ans4');

    return {
      data: [
        {
          id: 1,
          question: '1. Koji od navedenih elemanata je halogen hemijski element?',
          answer4: 'Jod',
          answer1: 'Azot',
          answer2: 'Fosfor',
          answer3: 'Sumpor',
        },
        {
          id: 2,
          question: '2. Koji je najrasprostranjeniji element u svemiru?',
          answer1: 'Vodonik',
          answer4: 'Ugljenik',
          answer2: 'Kiseonik',
          answer3: 'Azot',
        },
        {
          id: 3,
          question: '3. Koja je hemijska oznaka za gvožđe?',
          answer4: 'Fe',
          answer1: 'Cr',
          answer2: 'Cu',
          answer3: 'He',
          
        },
        {
          id: 4,
          question:
            '4. Koji od navedenih ne spada u alkalne metale?',
          answer3: 'Bor',
          answer1: 'Natrijum',
          answer2: 'Kalijum',
          answer4: 'Cezijum',
          
        },
        {
          id: 5,
          question: '5. Koji element je najlakši metal?',
          answer1: 'Litijum',
          answer4: 'Hrom',
          answer2: 'Osmijum',
          answer3: 'Natrijum',
          
        },
        {
          id: 6,
          question:
            '6. Koji element je najviše koristan za proizvodnju energije u nuklearnim reakcijama?',
          answer2: 'Uranijum',
          answer1: 'Galijum',
          answer4: 'Mangan',
          answer3: 'Itrijum',
          
        },
        {
          id: 7,
          question: '7.  Koja je hemijska oznaka za srebro?',
          answer4: 'Ag',
          answer1: 'S',
          answer2: 'Fe',
          answer3: 'Li',
          
        },
        {
          id: 8,
          question: '8. Koja je hemijska oznaka za olovo?',
          answer3: 'Pb',
          answer1: 'Nb',
          answer2: 'Mo',
          answer4: 'O',
          
        },
        {
          id: 9,
          question: '9.  Koja je hemijska oznaka za zlato?',
          answer2: 'Au',
          answer1: 'Ag',
          answer4: 'Pb',
          answer3: 'Zn',
          
        },
        {
          id: 10,
          question: '10. Koja je hemijska oznaka za kiseonik?',
          answer4: 'O',
          answer1: 'K',
          answer2: 'Ca',
          answer3: 'Ništa od navedenog',
          
        },
      ],
    };
  }
}
