import Route from '@ember/routing/route';

export default class StranifilmoviRoute extends Route {
  model() {
    localStorage.setItem('1.strfilm', 'ans4');
    localStorage.setItem('2.strfilm', 'ans1');
    localStorage.setItem('3.strfilm', 'ans4');

    localStorage.setItem('4.strfilm', 'ans2');
    localStorage.setItem('5.strfilm', 'ans2');
    localStorage.setItem('6.strfilm', 'ans4');
    
    localStorage.setItem('7.strfilm', 'ans3');
    localStorage.setItem('8.strfilm', 'ans1');
    localStorage.setItem('9.strfilm', 'ans3');

    return {
      data: [
        {
          id: 1,
          question: '1. Iz kog filma je citat: "May the Force be with you."?',
          answer4: '"Star Wars"',
          answer1: '"Sharper"',
          answer2: '"Sound of Freedom"',
          answer3: '"Spider-Man: Across the Spider-Verse"',
        },
        {
          id: 2,
          question: '2. Iz kog filma je citat: "Here is looking at you, kid."?',
          answer1: '"Casablanca"',
          answer4: '"Mission: Impossible - Deas Reckoning Part One"',
          answer2: '"John Wick: Chapter 4"',
          answer3: '"Reptile"',
        },
        {
          id: 3,
          question:
            '3. iz kog filma je citat: "You can not handle the truth!?"?',
          answer4: '"A Few Good Men"',
          answer1: '"The Holdovers"',
          answer2: '"The Hunger Games: The Ballad of Songbirds & Snakes"',
          answer3: '"Society of the Snow"',
        },
        {
          id: 4,
          question: '4. Iz kog filma je citat: "I will be back."?',
          answer2: '"The Terminator" ',
          answer1: '"Black Mirror"',
          answer4: '"Kelce"',
          answer3: '"Guardians of the Galaxy Vol. 3"',
        },
        {
          id: 5,
          question: '5. Iz kog filma je citat: "Hasta la vista, baby."?',
          answer2: '"Terminator 2: Judgment Day"',
          answer1: '"Killers of the Flower Moon"',
          answer4: '"No Hard Feelings"',
          answer3: '"Air"',
        },
        {
          id: 6,
          question:
            '6. Iz kog filma je citat: "Keep your friends close, but your enemies closer."?',
          answer4: '"The Godfather Part II" ',
          answer1: '"Dumb Money"',
          answer2: '"The Godfather Part I"',
          answer3: '"Creed III"',
        },
        {
          id: 7,
          question:
            '7. Iz kog crtanog filma je citat: "To infinity and beyond!"?',
          answer3: '"Toy Story"',
          answer1: '"The Flash"',
          answer2: '"The Iron Claw"',
          answer4: '"No Country for Old Men"',
        },
        {
          id: 8,
          question:
            '8. Iz kog filma je citat: "You are gonna need a bigger boat."?',
          answer1: '"Jaws"',
          answer3: '"Knock at the Cabin"',
          answer2: '"Rocky 2"',
          answer4: 'Shazam! Furz of the Gods',
        },
        {
          id: 9,
          question:
            '9. Ko je režirao film "Titanic" iz 1997. godine?',
          answer3: 'James Cameron',
          answer1: 'Spike Lee',
          answer2: 'David Fincher',
          answer4: 'Stanley Kubrick',
        },
      ],
    };
  }
}
