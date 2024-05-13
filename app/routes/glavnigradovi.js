import Route from '@ember/routing/route';

export default class GlavnigradoviRoute extends Route {
  model() {
    localStorage.setItem("1.grad","ans2");
    localStorage.setItem("2.grad","ans1"); 
    localStorage.setItem("3.grad","ans4");
    localStorage.setItem("4.grad","ans3");
    localStorage.setItem("5.grad","ans4");
    localStorage.setItem("6.grad","ans2");
    localStorage.setItem("7.grad","ans2");
    localStorage.setItem("8.grad","ans1");
    localStorage.setItem("9.grad","ans2");
    localStorage.setItem("10.grad","ans3");
    localStorage.setItem("11.grad","ans4");
    localStorage.setItem("12.grad","ans1");
    localStorage.setItem("13.grad","ans2");
    localStorage.setItem("14.grad","ans3");
    localStorage.setItem("15.grad","ans2");
    localStorage.setItem("16.grad","ans1");

    return {
      data: [
        {
          id: 1,
          question: '1. Koji je glavni gard Singapura?',
          answer2: 'Singapur',
          answer1: 'Donbas',
          answer4: 'Hanoj',
          answer3: 'Moskva',
        },
        {
          id: 2,
          question: '2. Koji je glavni grad Gane?',
          answer1: 'Akra',
          answer4: 'Kongo',
          answer2: 'Kairo',
          answer3: 'Dublin',
        },
        {
          id: 3,
          question: '3. Koji je glavni grad Kenije?',
          answer4: 'Nairobi',
          answer1: 'Kongo',
          answer2: 'Nairi',
          answer3: 'Kalenji',
        },
        {
          id: 4,
          question: '4. Koji je glavni grad Kambodže?',
          answer3: 'Phnom Penh',
          answer1: 'Kambodža',
          answer2: 'Pir',
          answer4: 'London',
        },
        {
          id: 5,
          question: '5.Koji je glavni grad Vijetnama? ',
          answer4: 'Hanoj',
          answer1: 'Kabul',
          answer2: 'Tripoli',
          answer3: 'Ništa od navedenog',
        },
        {
          id: 6,
          question: '6. Koji je glavni grad Libana?',
          answer2: 'Beirut',
          answer1: 'Tripoli',
          answer4: 'Kairo',
          answer3: 'Mauricijus',
        },
        {
          id: 7,
          question: '7. Koji je glavni grad Rusije?',
          answer2: 'Moskva',
          answer1: 'Sankt Peterburg',
          answer4: 'Kijev',
          answer3: 'Minsk',
        },
        {
          id: 8,
          question: ' 8.Koji je glavni grad Sjedinjenih Američkih Država?',
          answer1: 'Vašington D.C.',
          answer4: 'Atlanta',
          answer2: 'Oregon',
          answer3: 'San Francisko',
        },
        {
          id: 9,
          question: '9. Koji je glavni grad Francuske?',
          answer2: 'Ništa od navedenog',
          answer1: 'Lion',
          answer4: 'Mardelj',
          answer3: 'Tulon',
        },
        {
          id: 10,
          question: '10. Koji je glavni grad Kine?',
          answer3: 'Peking',
          answer1: 'Šangaj',
          answer2: 'Aksu',
          answer4: 'Bengbu',
        },
        {
          id: 11,
          question: '11.Koji je glavni grad Japana? ',
          answer4: 'Tokio',
          answer1: 'Osaka',
          answer2: 'Nara',
          answer3: 'Kjoto',
        },
        {
          id: 12,
          question: '12. Koji je glavni grad Indije?',
          answer1: 'Nju Delhi',
          answer4: 'Mumbaj',
          answer2: 'Kolkata',
          answer3: 'Laknau',
        },
        {
          id: 13,
          question: '13. Koji je glavni grad Nemačke?',
          answer2: 'Berlin',
          answer1: 'Hamburg',
          answer4: 'Lajpzig',
          answer3: 'Keln',
        },
        {
          id: 14,
          question: '14. Koji je glavni grad Velike Britanije?',
          answer3: 'London',
          answer1: 'Dublin',
          answer2: 'Liverpul',
          answer4: 'Mančester',
        },
        {
          id: 15,
          question: '15. Koji je glavni grad Italije?',
          answer2: 'Rim',
          answer1: 'Napulj',
          answer4: 'Torino',
          answer3: 'Lugano',
        },
        {
          id: 16,
          question: '16. Koji je glavni grad Brazila?',
          answer1: 'Brazilija',
          answer4: 'Rio de Žaneiro',
          answer2: 'San Paulo',
          answer3: 'Manaus',
        },
      ],
    };
  }
}
