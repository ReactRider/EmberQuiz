import Route from '@ember/routing/route';

export default class MuzikaRoute extends Route {
  model() {
    localStorage.setItem('1.muz', 'ans4');
    localStorage.setItem('2.muz', 'ans2');
    localStorage.setItem('3.muz', 'ans4');

    localStorage.setItem('4.muz', 'ans3');
    localStorage.setItem('5.muz', 'ans1');
    localStorage.setItem('6.muz', 'ans3');

    localStorage.setItem('7.muz', 'ans1');
    localStorage.setItem('8.muz', 'ans4');
    localStorage.setItem('9.muz', 'ans1');

    localStorage.setItem('10.muz', 'ans2');

    return {
      data: [
        {
          id: 1,
          question:
            '1. Koja je pesma u pitanju: "You are my fire, the one desire. Believe when I say, I want it that way."?',
          answer4: '"I Want It That Way" - Backstreet Boys',
          answer1: '"One" - U2',
          answer2: '"Dancing Queen" - ABBA',
          answer3: '"For the roses" - Johny Mitchel',
        },
        {
          id: 2,
          question:
            '2. Koja je pemsa u pitanju: "I came in like a wrecking ball, I never hit so hard in love. All I wanted was to break your walls, all you ever did was wreck me."?',
          answer2: '"Wrecking Ball" - Miley Cyrus',
          answer1: '"Lola" - The Kinks',
          answer4: '"The river" - Brus Springstin',
          answer3: '"We will meet again" - Vera Lin',
        },
        {
          id: 3,
          question:
            '3. Koja pesma je u pitanju:  "Cause baby, you are a firework. Come on, show them what you are worth. Make them go, oh, oh, oh. As you shoot across the sky."?',
          answer4: '"Firework" - Katy Perry',
          answer1: '"One for my baby" - Frank Sinatra',
          answer2: '"Waterloo Sunset" - The Kinks',
          answer3: '"When doves cry" - Prince',
        },
        {
          id: 4,
          question:
            '4. Koja je pesma u pitanju: "You are a shooting star I see, a vision of ecstasy. When you hold me, I am alive, we are like diamonds in the sky."?',
          answer3: '"Diamonds" - Rihanna',
          answer1: '"In my life" - The Beatles',
          answer2: '"Losing my religion" - REM',
          answer4: '"Alison" - Elvis Kostela',
        },
        {
          id: 5,
          question:
            '5. Koja je pesma u pitanju: "And I will always love you. I will always love you. You, my darling, you. Hmm."?',
          answer1: '"I Will Always Love You" - Whitney Houston',
          answer4: '"Imagine" - John Lenon',
          answer2: '"Let it be" - The Beatles',
          answer3: '"Skin" - Frank Sinatra',
        },
        {
          id: 6,
          question:
            '6. Koja je pesma u pitanju: "Cause you are amazing just the way you are. And when you smile, the whole world stops and stares for a while."?',
          answer3: '"Just the Way You Are" - Bruno Mars',
          answer1: '"Hallelujah" - Jeff Bakly',
          answer2: '"God only knows" - The Beach Boys',
          answer4: '"Creep" - Radiohead',
        },
        {
          id: 7,
          question:
            '7. Koja je pesma u pitanju: "You can dance, you can jive, having the time of your life. See that girl, watch that scene, digging the dancing queen."?',
          answer1: '"Dancing Queen" - ABBA',
          answer4: '"I say a little prayer" - Areta Franklin',
          answer2: '"Somebody to love" - Queen',
          answer3: '"Space oddity" - David Bowie',
        },
        {
          id: 8,
          question:
            '8. Koja pesma je u pitanju:"Don ot stop believing, hold on to that feeling. Streetlight, people."?',
          answer4: '"Do not Stop Believing" - Journey',
          answer1: '"The Scientist" - Coldplay',
          answer2: '"Why" - Eny Lenox',
          answer3: '"Feel" - Robby Williams',
        },
        {
          id: 9,
          question:
            '9. Koja je pesma u pitanju: "I wanna hold them like they do in Texas plays. Fold them, let them, hit me, raise it baby stay with me."?',
          answer1: '"Poker Face" - Lady Gaga',
          answer4: '"1000 dollar wedding" - Gram Parsons',
          answer2: '"One day I will fly away" - Rendy Krafford',
          answer3: '"Stand by me" - Ben E King',
        },
        {
          id: 10,
          question:
            '10. Koja je pesma u pitanju: "I am walking on sunshine, whoa-oh. I am walking on sunshine, whoa-oh. I am walking on sunshine, whoa-oh. And do not it feel good?"?',
          answer2: '"Walking on Sunshine" - Katrina and the Waves',
          answer1: '"The Boxer" - Simon and Garfunkel',
          answer4: '"Gods song" - Randy Newman',
          answer3: '"Saint James Infirmary" - Lui Armstrong',
        },
      ],
    };
  }
}
