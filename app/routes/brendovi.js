import Route from '@ember/routing/route';

export default class BrendoviRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Čiji logo se nalazi na slici ispod?',
          answer:
          'bentley',
          src:'assets/images/brendovi/bentley.avif',
        },
        {
          id: 2,
          question:
          '2. Čiji logo se nalazi na slici ispod?',
          answer: 'bmw',
          src:'assets/images/brendovi/bmw.avif',
        },
        {
          id: 3,
          question: '3. Čiji logo se nalazi na slici ispod?',
          answer:
            'greygoose',
            src:'assets/images/brendovi/greygoose.png',
        },
        {
          id: 4,
          question: '4. Čiji logo se nalazi na slici ispod?',
          answer:
            'instagram',
            src:'assets/images/brendovi/instagram.avif',
        },
        {
          id: 5,
          question: '5. Čiji logo se nalazi na slici ispod?',
          answer:
            'mcdonalds',
            src:'assets/images/brendovi/mcdonalds.avif',
        },
        {
          id: 6,
          question: '6. Čiji logo se nalazi na slici ispod?',
          answer:
            'mercedes',
            src:'assets/images/brendovi/mercedes.avif',
        },
        {
          id: 7,
          question: '7. Čiji logo se nalazi na slici ispod?',
          answer:
            'moncler',
            src:'assets/images/brendovi/moncler.jpeg',
        },
        {
          id: 8,
          question:
            '8. Čiji logo se nalazi na slici ispod?',
          answer:
            'newbalance',
            src:'assets/images/brendovi/newbalance.avif',
        },
        {
          id: 9,
          question: '9. Čiji logo se nalazi na slici ispod?',
          answer:
            'omega',
            src:'assets/images/brendovi/omega.avif',
        },
        {
          id: 10,
          question: '10. Čiji logo se nalazi na slici ispod?',
          answer:
            'porsche',
            src:'assets/images/brendovi/porsche.avif',
        },
        {
          id: 11,
          question: '11. Čiji logo se nalazi na slici ispod?',
          answer:
            'starbucks',
          src:'assets/images/brendovi/starbucks.avif',
        },
        {
          id: 12,
          question:
            '12. Čiji logo se nalazi na slici ispod?',
          answer:
            'tesla',
          src: 
          'assets/images/brendovi/tesla.avif',
        },
      ],
    };
  }
}
