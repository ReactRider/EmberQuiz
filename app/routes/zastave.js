import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ZastaveRoute extends Route {
  model() {
    localStorage.setItem('1.zast', 'ans2');
    localStorage.setItem('2.zast', 'ans4');
    localStorage.setItem('3.zast', 'ans2');

    localStorage.setItem('4.zast', 'ans1');
    localStorage.setItem('5.zast', 'ans3');
    localStorage.setItem('6.zast', 'ans3');
    
    localStorage.setItem('7.zast', 'ans2');
    localStorage.setItem('8.zast', 'ans4');
    localStorage.setItem('9.zast', 'ans1');
    
    localStorage.setItem('10.zast', 'ans2');
    localStorage.setItem('11.zast', 'ans1');
    localStorage.setItem('12.zast', 'ans4');
    
    localStorage.setItem('13.zast', 'ans2');
    localStorage.setItem('14.zast', 'ans1');
    localStorage.setItem('15.zast', 'ans3');
    
    localStorage.setItem('16.zast', 'ans3');
    localStorage.setItem('17.zast', 'ans4');
    
    localStorage.setItem('18.zast', 'ans1');
    localStorage.setItem('19.zast', 'ans4');
    localStorage.setItem('20.zast', 'ans2');

    return {
      data: [
        {
          id: 1,
          src: 'assets/images/zastave/australija.jpg',
          question: '1. Zastava koje države se nalazi na slici?',
          answer2: 'Australija',
          answer1: 'Novi Zeland',
          answer4: 'Kanada',
          answer3: 'Velika Britanija',
        },
        {
          id: 2,
          src: 'assets/images/zastave/azerbejdzan.jpg',
          question: '2. Zastava koje države se nalazi na slici?',
          answer4: 'Azerbejdžan',
          answer1: 'Gruzija',
          answer2: 'Jermenija',
          answer3: 'Moldavija',
        },
        {
          id: 3,
          src: 'assets/images/zastave/brazil.jpg',
          question: '3. Zastava koje države se nalazi na slici?',
          answer2: 'Brazil',
          answer1: 'Kolumbija',
          answer4: 'Venezuela',
          answer3: 'Bolivija',
        },
        {
          id: 4,
          src: 'assets/images/zastave/britanija.jpg',
          question: '4. Zastava koje države se nalazi na slici?',
          answer1: 'Velika Britanija',
          answer4: 'Vels',
          answer2: 'Škotska',
          answer3: 'Danska',
        },
        {
          id: 5,
          src: 'assets/images/zastave/cile.jpg',
          question: '5. Zastava koje države se nalazi na slici?',
          answer3: 'Čile',
          answer1: 'Peru',
          answer2: 'Argentina',
          answer4: 'Madagaskar',
        },
        {
          id: 6,
          src: 'assets/images/zastave/danska.jpg',
          question: '6. Zastava koje države se nalazi na slici?',
          answer3: 'Danska',
          answer1: 'Norveška',
          answer2: 'Finska',
          answer4: 'Luksemburg',
        },
        {
          id: 7,
          src: 'assets/images/zastave/estonija.jpg',
          question: '7. Zastava koje države se nalazi na slici?',
          answer2: 'Estonija',
          answer1: 'Letonija',
          answer4: 'Litvanija',
          answer3: 'Belorusija',
        },
        {
          id: 8,
          src: 'assets/images/zastave/kanada.jpg',
          question: '8. Zastava koje države se nalazi na slici?',
          answer4: 'Kanada',
          answer1: 'SAD',
          answer2: 'Velika Britanija',
          answer3: 'Monako',
        },
        {
          id: 9,
          src: 'assets/images/zastave/kina.jpg',
          question: '9. Zastava koje države se nalazi na slici?',
          answer1: 'Kina',
          answer4: 'Japan',
          answer2: 'Severna Koreja',
          answer3: 'Indija',
        },
        {
          id: 10,
          src: 'assets/images/zastave/letonija.jpg',
          question: '10. Zastava koje države se nalazi na slici?',
          answer2: 'Letonija',
          answer1: 'Litvanija',
          answer4: 'Holandija',
          answer3: 'Belgija',
        },
        {
          id: 11,
          src: 'assets/images/zastave/madagaskar.jpg',
          question: '11. Zastava koje države se nalazi na slici?',
          answer1: 'Madagaskar',
          answer4: 'Indija',
          answer2: 'Šri Lanka',
          answer3: 'Maldivi',
        },
        {
          id: 12,
          src: 'assets/images/zastave/maroko.jpg',
          question: '12. Zastava koje države se nalazi na slici?',
          answer4: 'Maroko',
          answer1: 'Monako',
          answer2: 'Nica',
          answer3: 'Ljoret De Mar',
        },
        {
          id: 13,
          src: 'assets/images/zastave/meksiko.jpg',
          question: '13. Zastava koje države se nalazi na slici?',
          answer2: 'Meksiko',
          answer1: 'Brazil',
          answer4: 'Trinidad i Tobago',
          answer3: 'Obala Slonovače',
        },
        {
          id: 14,
          src: 'assets/images/zastave/moldavija.jpg',
          question: '14. Zastava koje države se nalazi na slici?',
          answer1: 'Moldavija',
          answer4: 'Jermenija',
          answer2: 'Albanija',
          answer3: 'Severna Makedonija',
        },
        {
          id: 15,
          src: 'assets/images/zastave/nigerija.png',
          question: '15. Zastava koje države se nalazi na slici?',
          answer3: 'Nigerija',
          answer1: 'Kenija',
          answer2: 'DR Kongo',
          answer4: 'Litvanija',
        },
        {
          id: 16,
          src: 'assets/images/zastave/portugalija.jpg',
          question: '16. Zastava koje države se nalazi na slici?',
          answer3: 'Portugalija',
          answer1: 'Španija',
          answer2: 'Grčka',
          answer4: 'Paragvaj',
        },
        {
          id: 17,
          src: 'assets/images/zastave/rumunija.jpg',
          question: '17. Zastava koje države se nalazi na slici?',
          answer4: 'Rumunija',
          answer1: 'Belgija',
          answer2: 'Bugarska',
          answer3: 'Kazahstan',
        },
        {
          id: 18,
          src: 'assets/images/zastave/rusija.jpg',
          question: '18. Zastava koje države se nalazi na slici?',
          answer1: 'Rusija',
          answer4: 'Italija',
          answer2: 'Finska',
          answer3: 'Srbija',
        },
        {
          id: 19,
          src: 'assets/images/zastave/singapur.jpg',
          question: '19. Zastava koje države se nalazi na slici?',
          answer4: 'Singapur',
          answer1: 'Norveška',
          answer2: 'Kuvajt',
          answer3: 'UAE',
        },
        {
          id: 20,
          src: 'assets/images/zastave/srbija.png',
          question: '20. Zastava koje države se nalazi na slici?',
          answer2: 'Srbija',
          answer1: 'Rusija',
          answer4: 'Island',
          answer3: 'Izrael',
        },
      ],
    };
  }
}
