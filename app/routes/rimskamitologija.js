import Route from '@ember/routing/route';

export default class RimskamitologijaRoute extends Route {
  model() {
    localStorage.setItem('1.rim', 'ans2');
    localStorage.setItem('2.rim', 'ans4');
    localStorage.setItem('3.rim', 'ans1');

    localStorage.setItem('4.rim', 'ans1');
    localStorage.setItem('5.rim', 'ans4');
    localStorage.setItem('6.rim', 'ans4');

    localStorage.setItem('7.rim', 'ans3');
    localStorage.setItem('8.rim', 'ans1');
    localStorage.setItem('9.rim', 'ans4');

    localStorage.setItem('10.rim', 'ans2');

    return {
      data: [
        {
          id: 1,
          question: '1. Ko je vrhovni bog u rimskoj mitologiji?',
          answer2: 'Jupiter',
          answer1: 'Saturn',
          answer4: 'Apolon',
          answer3: 'Kupidon',
        },
        {
          id: 2,
          question: '2. Ko je bog rata u rimskoj mitologiji?',
          answer4: 'Mars',
          answer1: 'Merkur',
          answer2: 'Neptun',
          answer3: 'Ceres',
        },
        {
          id: 3,
          question:
            '3. Ko je boginja lepote u rimskoj mitologiji?',
          answer1: 'Venera',
          answer4: 'Minerva',
          answer2: 'Vesta',
          answer3: 'Ništa od navedenog',
        },
        {
          id: 4,
          question:
            '4. Ko je bog trgovine i putovanja rimskoj mitologiji?',
          answer1: 'Merkur',
          answer4: 'Uran',
          answer2: 'Saturn',
          answer3: 'Neptun',
        },
        {
          id: 5,
          question:
            '5. Kako se zove Jupiterov otac, bog vremena prema rimskoj mitologiji?',
          answer4: 'Saturn',
          answer1: 'Pluton',
          answer2: 'Vulkan',
          answer3: 'Mars',
        },
        {
          id: 6,
          question: '6. Ko je osnivač Rima prema rimskoj mitologiji?',
          answer4: 'Romul i Rem',
          answer1: 'Gaj Julije Cezar',
          answer2: 'Neron',
          answer3: 'Oktavijan Avgust',
        },
        {
          id: 7,
          question: '7. Ko je bog mora u rimskoj mitologiji?',
          answer3: 'Neptun',
          answer1: 'Kupidon',
          answer2: 'Pluton',
          answer4: 'Zevs',
        },
        {
          id: 8,
          question: '8. Koji je rimski bog zaštitnik putnika i puteva?',
          answer1: 'Merkur',
          answer4: 'Uran',
          answer2: 'Neptun',
          answer3: 'Minerva',
        },
        {
          id: 9,
          question:
            '9. Ko je, prema rimskoj mitologija, bila Jupiterova žena, vrhovna boginja?',
          answer4: 'Junona',
          answer1: 'Afrodita',
          answer2: 'Atina',
          answer3: 'Venera',
        },
        {
          id: 10,
          question:
            '10. Ko je bog svetla, umetnosti i istine u rimskoj mitologiji?',
          answer2: 'Apolon',
          answer1: 'Jupiter',
          answer4: 'Hermes',
          answer3: 'Ares',
        },
      ],
    };
  }
}
