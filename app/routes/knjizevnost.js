import Route from '@ember/routing/route';

export default class KnjizevnostRoute extends Route {
  model() {
    localStorage.setItem('1.lit', 'ans2');
    localStorage.setItem('2.lit', 'ans3');
    localStorage.setItem('3.lit', 'ans4');

    localStorage.setItem('4.lit', 'ans4');
    localStorage.setItem('5.lit', 'ans1');
    localStorage.setItem('6.lit', 'ans2');
    localStorage.setItem('7.lit', 'ans1');
    localStorage.setItem('8.lit', 'ans3');
    localStorage.setItem('9.lit', 'ans3');

    localStorage.setItem('10.lit', 'ans2');
    localStorage.setItem('11.lit', 'ans4');
    localStorage.setItem('12.lit', 'ans1');

    return {
      data: [
        {
          id: 1,
          question: '1. Ko je napisao roman "Rat i mir"?',
          answer2: 'Lav Tolstoj',
          answer1: 'Fjodor Dostojevski',
          answer4: 'Anton Čehov',
          answer3: 'Franc Kafka',
        },
        {
          id: 2,
          question: '2. Koji je najpoznatiji roman Šarla Baudelera?',
          answer3: '"Cvetovi zla"',
          answer1: '"Priče o crvenom sirku"',
          answer2: '"Nebeski oganj"',
          answer4: '"Začarani smrću"',
        },
        {
          id: 3,
          question: '3. Ko je autor knjige "Sto godina samoće"?',
          answer4: 'Gabriel Garsia Markes',
          answer1: 'Leo Peruc',
          answer2: 'Ivo Andrić',
          answer3: 'Milorad Pavić',
        },
        {
          id: 4,
          question: '4. Koji je nacionalni ep Grčke?',
          answer4: 'Ilijada',
          answer1: 'Kiparska pesma',
          answer2: 'Etiopida',
          answer3: 'Telegonija',
        },
        {
          id: 5,
          question: '5. Ko je autor knjige "Ana Karenjina"?',
          answer1: 'Lav Tolstoj',
          answer4: 'Aleksandar Puškin',
          answer2: 'Vladimir Nabokov',
          answer3: 'Mihail Bulgakov',
        },
        {
          id: 6,
          question: '6. Ko je autor tragedije "Hamlet"?',
          answer2: 'Vilijam Šekspir',
          answer1: 'Oskar Vajld',
          answer4: 'Džordž Orvel',
          answer3: 'Čarls Dikens',
        },
        {
          id: 7,
          question: '7. Ko je napisao roman "Gospodar prstenova"?',
          answer1: 'Dž.R.R. Tolkien',
          answer4: 'Semjuel Džonson',
          answer2: 'Čarls Buxton',
          answer3: 'Douglas Adams',
        },
        {
          id: 8,
          question: '8. Ko je autor knjige "Lovac u žitu"?',
          answer3: 'J.D.Selinger',
          answer1: 'Ernest Hemingvej',
          answer2: 'Nikolaj Gogolj',
          answer4: 'Ivan Turgenjev',
        },
        {
          id: 9,
          question: '9. Koji je najpoznatiji roman Fjodora Dostojevskog?',
          answer3: '"Zločin i kazna"',
          answer1: '"Mladić"',
          answer2: '"Kockar"',
          answer4: '"Idiot"',
        },
        {
          id: 10,
          question: '10. Koji od sledećih romana je napisao Ivan Turgenjev?',
          answer2: 'Očevi i deca',
          answer1: 'Stranac',
          answer4: 'Deset Cezara',
          answer3: 'Čovek u futroli',
        },
        {
          id: 11,
          question:
            '11. Iz kog romana je sledeći odlomak: "Nikad nije bilo lakše voditi bitku kada se gubi"?',
          answer4: '"Ponos i predrasude" Džejn Ostin',
          answer1: '"Zeleni Anđeo" Alis Hofman',
          answer2: '"Amor delirija" Loren Oliver',
          answer3: '"Maks Havelar" Edvarda Dauvesa',
        },
        {
          id: 12,
          question: '12. Koji roman počinje rečenicom: "Luda noć, luda kuća."?',
          answer1: '"Veliki Getsbi" F. Skot Ficdžeralda',
          answer4: '"Dnevnik o Čarnojeviću" Miloša Crnjanskog',
          answer2: '"Moravska noć" Petera Handkea',
          answer3: '"Doktor Faust" Tomas Mana',
        },
      ],
    };
  }
}
