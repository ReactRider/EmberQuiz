import Route from '@ember/routing/route';

export default class StranifilmoviRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Iz kog filma je citat: "May the Force be with you."?',
          answer: ' "Star Wars"',
        },
        {
          id: 2,
          question: '2. Iz kog filma je citat: "Here is looking at you, kid."?',
          answer: ' "Casablanca"',
        },
        {
          id: 3,
          question:
            '3. iz kog filma je citat: "You can not handle the truth!?"?',
          answer: '"A Few Good Men"',
        },
        {
          id: 4,
          question: '4. Iz kog filma je citat: "I will be back."?',
          answer: '"The Terminator" ',
        },
        {
          id: 5,
          question: '5. Iz kog filma je citat: "Hasta la vista, baby."?',
          answer: '"Terminator 2: Judgment Day"',
        },
        {
          id: 6,
          question:
            '6. Iz kog filma je citat: "Keep your friends close, but your enemies closer."?',
          answer: '"The Godfather Part II" ',
        },
        {
          id: 7,
          question:
            '7. Iz kog crtanog filma je citat: "To infinity and beyond!"?',
          answer: ' "Toy Story" ',
        },
      ],
    };
  }
}
