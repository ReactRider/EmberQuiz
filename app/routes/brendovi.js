import Route from '@ember/routing/route';

export default class BrendoviRoute extends Route {
  model() {
    localStorage.setItem('1.bra', 'ans4');
    localStorage.setItem('2.bra', 'ans3');
    localStorage.setItem('3.bra', 'ans3');
    localStorage.setItem('4.bra', 'ans2');
    localStorage.setItem('5.bra', 'ans2');
    localStorage.setItem('6.bra', 'ans4');
    localStorage.setItem('7.bra', 'ans4');
    localStorage.setItem('8.bra', 'ans1');
    localStorage.setItem('9.bra', 'ans1');
    localStorage.setItem('10.bra', 'ans4');
    localStorage.setItem('11.bra', 'ans3');
    localStorage.setItem('12.bra', 'ans4');

    return {
      data: [
        {
          id: 1,
          question: '1. Čiji logo se nalazi na slici ispod?',
          answer1: 'mercedes',
          answer2: 'mclaren',
          answer3: 'ferrari',
          answer4: 'bentley',
          src: 'assets/images/brendovi/bentley.avif',
        },
        {
          id: 2,
          question: '2. Čiji logo se nalazi na slici ispod?',
          answer1: 'volkswagen',
          answer2: 'audi',
          answer4: 'volvo',
          answer3: 'bmw',
          src: 'assets/images/brendovi/bmw.avif',
        },
        {
          id: 3,
          question: '3. Čiji logo se nalazi na slici ispod?',
          answer3: 'greygoose',
          answer1: 'jack daniels',
          answer2: 'aperol',
          answer4: 'cuba libre',
          src: 'assets/images/brendovi/greygoose.png',
        },
        {
          id: 4,
          question: '4. Čiji logo se nalazi na slici ispod?',
          answer2: 'instagram',
          answer1: 'vimeo',
          answer3: 'youtube',
          answer4: 'google',
          src: 'assets/images/brendovi/instagram.avif',
        },
        {
          id: 5,
          question: '5. Čiji logo se nalazi na slici ispod?',
          answer2: 'mcdonalds',
          answer1: 'kfc',
          answer3: 'burger king',
          answer4: 'pizza hut',
          src: 'assets/images/brendovi/mcdonalds.avif',
        },
        {
          id: 6,
          question: '6. Čiji logo se nalazi na slici ispod?',
          answer4: 'mercedes',
          answer1: 'lexus',
          answer2: 'peugeout',
          answer3: 'dacia',
          src: 'assets/images/brendovi/mercedes.avif',
        },
        {
          id: 7,
          question: '7. Čiji logo se nalazi na slici ispod?',
          answer4: 'moncler',
          answer1: 'gucci',
          answer2: 'rayban',
          answer3: 'fendi',
          src: 'assets/images/brendovi/moncler.jpeg',
        },
        {
          id: 8,
          question: '8. Čiji logo se nalazi na slici ispod?',
          answer1: 'newbalance',
          answer3: 'nike',
          answer2: 'adidas',
          answer4: 'raulph lauren',
          src: 'assets/images/brendovi/newbalance.avif',
        },
        {
          id: 9,
          question: '9. Čiji logo se nalazi na slici ispod?',
          answer1: 'omega',
          answer3: 'rolex',
          answer2: 'swatch',
          answer4: 'chopard',
          src: 'assets/images/brendovi/omega.avif',
        },
        {
          id: 10,
          question: '10. Čiji logo se nalazi na slici ispod?',
          answer4: 'porsche',
          answer1: 'chevrolet',
          answer2: 'kia',
          answer3: 'toyota',
          src: 'assets/images/brendovi/porsche.avif',
        },
        {
          id: 11,
          question: '11. Čiji logo se nalazi na slici ispod?',
          answer3: 'starbucks',
          answer1: 'costa coffee',
          answer2: 'lavaza',
          answer4: 'folgers',
          src: 'assets/images/brendovi/starbucks.avif',
        },
        {
          id: 12,
          question: '12. Čiji logo se nalazi na slici ispod?',
          answer4: 'tesla',
          answer1: 'dodge',
          answer2: 'audi',
          answer3: 'opel',
          src: 'assets/images/brendovi/tesla.avif',
        },
      ],
    };
  }
}
