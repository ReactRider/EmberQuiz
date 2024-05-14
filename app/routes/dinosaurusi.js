import Route from '@ember/routing/route';

export default class DinosaurusiRoute extends Route {
  model() {
    localStorage.setItem('1.dino', 'ans4');
    localStorage.setItem('2.dino', 'ans3');
    localStorage.setItem('3.dino', 'ans2');
    localStorage.setItem('4.dino', 'ans3');
    localStorage.setItem('5.dino', 'ans1');
    localStorage.setItem('6.dino', 'ans2');
    localStorage.setItem('7.dino', 'ans1');
    localStorage.setItem('8.dino', 'ans3');
    localStorage.setItem('9.dino', 'ans1');
    localStorage.setItem('10.dino', 'ans2');

    return {
      data: [
        {
          id: 1,
          question: '1. Koja je najveća poznata vrsta dinosaurusa?',
          answer4:
            'Najveća poznata vrsta dinosaurusa je Argentinosaurus, koji je bio dug oko 30 metara i težak oko 70 tona.',
          answer2: 'Najveća poznata vrsta dinosaurusa je grupa Sauropoda.',
          answer3: 'Najveća poznata vrsta dinosaurusa je grupa Pterosaurusa.',
          answer1: 'Najveća poznata vrsta dinosaurusa je grupa Teropoda.',
        },
        {
          id: 2,
          question: '2. Koji je najmanji poznati dinosaur?',
          answer1:
            'Najmanji poznati dinosaur je vrsta nazvana Ankzlosaurusi, koji je bio dug oko 3 metra i težio oko 2 kilograma.',
          answer2:
            'Najmanji poznati dinosaur je vrsta nazvana Ornithopodi, koji je bio dug oko 2 metra i težio oko 5 kilograma.',
          answer3:
            'Najmanji poznati dinosaur je vrsta nazvana Microraptor, koji je bio dug oko 2 metra i težio oko 1 kilogram.',
          answer4:
            'Najmanji poznati dinosaur je vrsta nazvana Teropodi, koji je bio dug oko 1 metra i težio oko 3 kilograma.',
        },
        {
          id: 3,
          question:
            '3. Kada su dinosauri prvi put počeli da se pojavljuju na Zemlji?',
          answer2:
            'Dinosauri su prvi put počeli da se pojavljuju na Zemlji pre otprilike 230 miliona godina.',
          answer1:
            'Dinosauri su prvi put počeli da se pojavljuju na Zemlji pre otprilike 130 miliona godina.',
          answer3:
            'Dinosauri su prvi put počeli da se pojavljuju na Zemlji pre otprilike 180 miliona godina.',
          answer4:
            'Dinosauri su prvi put počeli da se pojavljuju na Zemlji pre otprilike 330 miliona godina.',
        },
        {
          id: 4,
          question: '4. Koja je vrsta dinosaurusa bila najbrža?',
          answer3:
            'Najbrži poznati dinosaur bio je Velociraptor, koji je mogao trčati brzinom do 64 km/h.',
          answer2: 'Najbrži poznati dinosaur bio je Sauripodus.',
          answer1:
            'Najbrži poznati dinosaur bio je Teropodius, koji je mogao trčati brzinom do 94 km/h.',
          answer4:
            'Najbrži poznati dinosaur bio je Velociraptor, koji je mogao trčati brzinom do 74 km/h.',
        },
        {
          id: 5,
          question: '5. Koji je najpoznatiji dinosaur koji leti?',
          answer3: 'Najpoznatiji dinosaur koji leti je Pteranodon.',
          answer1:
            'Najpoznatiji dinosaur koji leti je Pteranodon, koji je pripadao grupi ptica dinosaura nazvanoj Pterosauri.',
          answer2: 'Najpoznatiji dinosaur koji leti je Steranodon.',
        },
        {
          id: 6,
          question:
            '6. Dinosauri su dominirali Zemljom oko 205 miliona godina?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 7,
          question: '7. Koje su tri glavne grupe dinosaurusa?',
          answer2: 'Grupe kreda, jura, trijas',
          answer1:
            'teropodi (mesožderi), sauropodi (biljojedi sa dugim vratovima) i ornitopodi (biljojedi sa kopitama)',
          answer3: 'Ništa od ponuđenog',
        },
        {
          id: 8,
          question:
            '8. Proučavajući fosile, očuvane kosti i tragove stopala, kao i analizom stena i sedimenta, naučnici su saznali dosta toga o načinu života dinosaurusa?',
          answer3: 'Tačno',
          answer2: 'Netačno',
          answer1: 'Ne može se reći sa sigurnošću',
        },
        {
          id: 9,
          question: '9. Koji je najpoznatiji dinosaur koji je bio mesožder?',
          answer1:
            'Najpoznatiji je Tyrannosaurus rex, poznat po svojoj ogromnoj veličini i moćnim čeljustima',
          answer2:
            'Najpoznatiji je Triceratops, poznat po prepoznatljivom rogu na nosu',
          answer3: 'Najpoznatiji je Brahiosaurs, karakterističnog dugog vrata',
          answer4:
            'Najpoznatiji je Spinosaurus,poznat po svojoj velikoj i prepoznatljivoj kresti',
        },
        {
          id: 10,
          question: '10. Kako su se dinosauri razmnožavali?',
          answer2:
            'Dinosauri su se razmnožavali polaganjem jaja, slično kao i današnje ptice.',
          answer1: 'Dinosauri se nisu razmnožavali polaganjem jaja.',
          answer3: 'Nije poznato kako su se dinosaurusi razmnožavali.',
        },
      ],
    };
  }
}
