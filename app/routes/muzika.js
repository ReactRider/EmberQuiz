import Route from '@ember/routing/route';

export default class MuzikaRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question:
            '1. Koja je pesma u pitanju: "You are my fire, the one desire. Believe when I say, I want it that way."?',
          answer: '"I Want It That Way" - Backstreet Boys',
        },
        {
          id: 2,
          question:
            '2. Koja je pemsa u pitanju: "I came in like a wrecking ball, I never hit so hard in love. All I wanted was to break your walls, all you ever did was wreck me."?',
          answer: '"Wrecking Ball" - Miley Cyrus',
        },
        {
          id: 3,
          question:
            '3. Koja pesma je u pitanju:  "Cause baby, you are a firework. Come on, show them what you are worth. Make them go, oh, oh, oh. As you shoot across the sky."?',
          answer: '"Firework" - Katy Perry',
        },
        {
          id: 4,
          question:
            '4. Koja je pesma u pitanju: "You are a shooting star I see, a vision of ecstasy. When you hold me, I am alive, we are like diamonds in the sky."?',
          answer: ' "Diamonds" - Rihanna',
        },
        {
          id: 5,
          question:
            '5. Koja je pesma u pitanju: "And I will always love you. I will always love you. You, my darling, you. Hmm."?',
          answer: '"I Will Always Love You" - Whitney Houston',
        },
        {
          id: 6,
          question:
            '6. Koja je pesma u pitanju: "Cause you are amazing just the way you are. And when you smile, the whole world stops and stares for a while."?',
          answer: '"Just the Way You Are" - Bruno Mars',
        },
        {
          id: 7,
          question:
            '7. Koja je pesma u pitanju: "You can dance, you can jive, having the time of your life. See that girl, watch that scene, digging the dancing queen."?',
          answer: '"Dancing Queen" - ABBA',
        },
        {
          id: 8,
          question:
            '8. Koja pesma je u pitanju:"Don ot stop believing, hold on to that feeling. Streetlight, people."?',
          answer: ' "Don ot Stop Believing" - Journey',
        },
        {
          id: 9,
          question:
            '9. Koja je pesma u pitanju: "I wanna hold them like they do in Texas plays. Fold them, let them, hit me, raise it baby stay with me."?',
          answer: '"Poker Face" - Lady Gaga',
        },
        {
          id: 10,
          question:
            '10. Koja je pesma u pitanju: "I am walking on sunshine, whoa-oh. I am walking on sunshine, whoa-oh. I am walking on sunshine, whoa-oh. And do not it feel good?"?',
          answer: ' "Walking on Sunshine" - Katrina and the Waves',
        },
      ],
    };
  }
}
