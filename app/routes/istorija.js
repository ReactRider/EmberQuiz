import Route from '@ember/routing/route';

export default class IstorijaRoute extends Route {
  model() {
    localStorage.setItem("1.ist","ans2");
    localStorage.setItem("2.ist","ans3"); 
    localStorage.setItem("3.ist","ans4");
    localStorage.setItem("4.ist","ans4");
    localStorage.setItem("5.ist","ans2");
    localStorage.setItem("6.ist","ans1");
    localStorage.setItem("7.ist","ans4");
    localStorage.setItem("8.ist","ans3");
    localStorage.setItem("9.ist","ans3")
    localStorage.setItem("10.ist","ans2");
    localStorage.setItem("11.ist","ans4");
    localStorage.setItem("12.ist","ans2");
    localStorage.setItem("13.ist","ans4");
    localStorage.setItem("14.ist","ans3");
    localStorage.setItem("15.ist","ans2");
    localStorage.setItem("16.ist","ans1");

    return {
      data: [
        {
          id: 1,
          question: '1. Ko je bio prvi rimski car?',
          answer2: 'Gaj Oktavijan Avgust',
          answer1:'Tiberije Tiranin',
          answer4:'Gaj Julije Cezar',
          answer3:'Neron',
        },
        {
          id: 2,
          question: '2. Kada je počeo Prvi svetski rat?',
          answer3: '28. jula 1914. godine',
          answer1:'28.juna 1914. godine',
          answer2:'28.septembra 1914. godine',
          answer4:'28.jula 1904. godine',
        },
        {
          id: 3,
          question: '3. Ko je bio vođa Francuske tokom Francuske revolucije?',
          answer4: 'Napoleon Bonaparta',
          answer1:'Luj XIV',
          answer2:'Luj XVI',
          answer3:'Filip III Hrabri',
        },
        {
          id: 4,
          question: '4. Koji datum označava početak američke revolucije?',
          answer4: '22. mart 1765. godine',
          answer1:'19. april 1765. godine',
          answer2:'18. mart 1775. godine',
          answer3:'22. jun 1765. godine',

        },
        {
          id: 5,
          question: '5. Koja je bila najveća imperija u istoriji?',
          answer2: 'Mongolska imperija',
          answer1:'Osmanska imperija',
          answer4:'Ruska imperija',
          answer3:'Habzburška imperija',

        },
        {
          id: 6,
          question: '6. Kada se dogodila Velika depresija?',
          answer1: 'od 1929. do sredine 1930-ih godina',
          answer4:'od 1919. do sredine 1930-ih godina',
          answer2:'od 1925. do sredine 1928. godine',
          answer3:'od 1924. do 1944. godine',

        },
        {
          id: 7,
          question:
            '7. Koja je bila poslednja dinastija koja je vladala Kinezima?',
          answer4: 'dinastija Ćing',
          answer1:'dinastija Ling',
          answer2:'dinastija Ming',
          answer3:'dinastija Si Ćing',

        },
        {
          id: 8,
          question:
            '8. Ko je bio vođa Crvene armije tokom Oktobarske revolucije?',
          answer3: 'Vladimir Lenjin',
          answer1:'Lav Trocki',
          answer2:'Josif Staljin',
          answer4:'Ivan Grozni',

        },
        {
          id: 9,
          question: '9. Koji je bio datum pada Berlinskog zida?',
          answer3: '9. novembra 1989.godine',
          answer1:'29. oktobar 1991. godine',
          answer2:'12.novembar 1992. godine',
          answer4:'11. novembar 1989. godine',

        },
        {
          id: 10,
          question: '10. Koji je bio prvi grad na svetu?',
          answer2: 'Uruk u drevnoj Mezopotamiji',
          answer1:'Vavilon',
          answer4:'Mikena',
          answer3:'Asur',

        },
        {
          id: 11,
          question: '11. Koji događaj je označio kraj Srednjeg veka?',
          answer4: 'Pad Carigrada 1453. godine',
          answer1:'Otkriće Severne Amerike',
          answer2:'Nastanak štampaće mašine',
          answer3:'Francuska revolucija',

        },
        {
          id: 12,
          question: '12. Ko je bio prvi američki predsednik?',
          answer2: 'Džordž Vašington',
          answer1:'Džon Adams',
          answer4:'Endru Džekson',
          answer3:'Tomas Džeferson',

        },
        {
          id: 13,
          question: '13. Koja je bila najduža dinastija u kineskoj istoriji?',
          answer4: 'Dinastija Zhou',
          answer1:'Dinastija Ćing',
          answer2:'Nije utvrđeno',
          answer3:'Dinastija Dong Hou',

        },
        {
          id: 14,
          question: '14. Koji je bio vladar Engleske tokom španske armade?',
          answer3: 'Elizabeta I',
          answer1:'Čarls III',
          answer2:'Elizabeta II',
          answer4:'Džordž V',

        },
        {
          id: 15,
          question:
            '15.  Kako se naziva period u istoriji kada je antička Grčka bila na vrhuncu svoje moći?',
          answer2: 'Zlatno doba Perikla',
          answer1:'Platneno doba Perikla',
          answer4:'Helenizam',
          answer3:'Klasični period pre nove ere',

        },
        {
          id: 16,
          question:
            '16. Ko je bio osnivač Islamske države i poslednji prorok u islamu?',
          answer1: 'Muhamed',
          answer4:'Mojsije',
          answer2:'Ahmet',
          answer3:'Sulejman I',

        },
      ],
    };
  }
}
