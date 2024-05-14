import Route from '@ember/routing/route';

export default class ItRoute extends Route {
  model() {
    localStorage.setItem('1.it', 'ans1');
    localStorage.setItem('2.it', 'ans4');
    localStorage.setItem('3.it', 'ans4');
    localStorage.setItem('4.it', 'ans3');
    localStorage.setItem('5.it', 'ans2');
    localStorage.setItem('6.it', 'ans2');
    localStorage.setItem('7.it', 'ans1');
    localStorage.setItem('8.it', 'ans1');
    localStorage.setItem('9.it', 'ans3');
    localStorage.setItem('10.it', 'ans4');
    localStorage.setItem('11.it', 'ans3');
    localStorage.setItem('12.it', 'ans4');
    localStorage.setItem('13.it', 'ans2');
    localStorage.setItem('14.it', 'ans1');
    localStorage.setItem('15.it', 'ans2');
    localStorage.setItem('16.it', 'ans2');

    return {
      data: [
        {
          id: 1,
          question:
            '1. Operativni sistem je softverski sistem koji omogućava upravljanje hardverom računara i pruža osnovne usluge korisnicima, kao što su pokretanje programa i upravljanje resursima',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 2,
          question:
            '2. Japanska multinacionalna kompanija koja se bavi proizvodnjom televizora, laptop racunara, kamera, hard diskova zove se?',
          answer4: 'Toshiba',
          answer1: 'Nvidia',
          answer2: 'Ništa od ponuđenog',
          answer3: 'Intel',
        },
        {
          id: 3,
          question: '3. Koliko ima bajta u 7 kilobajta',
          answer4: '7168 bajta',
          answer1: '70 bajta',
          answer2: '0.7 bajta',
          answer3: '7000 bajta',
        },
        {
          id: 4,
          question: '4. Šta je GUI?',
          answer3: 'Akronim za grafičko okruženje',
          answer1: 'Antivirusni program',
          answer2: 'Proizvodjač procesora',
          answer4: 'Ništa od navedenog',
        },
        {
          id: 5,
          question: '5. Šta je algoritam?',
          answer2:
            'Algoritam je precizan set instrukcija ili pravila koji se koriste za rešavanje određenog problema ili izvršavanje određene operacije.',
          answer1:
            'Algoritam je pojam koji se ne vezuje za oblast informacionih tehnologija.',
          answer4:
            'Algoritam je samo jedan od programskih jezika definisan striktno za Linux platformu.',
          answer3:
            'Algoritam označava neformalan i neprecizan niz instrukcija koji se koriste za otkrivanje tkzv. bugova u source kodu.',
        },
        {
          id: 6,
          question:
            '6. Da li operativni sistem Windows poseduje unificirano grafičko okruženje?',
          answer2: 'OS Windows poseduje unificirani GUI',
          answer1: 'OS Windows ne poseduje unificirani GUI',
          answer4: 'Windows nije OS sa bilo kakvim grafičkim okruženjem',
          answer3:
            'Windows može a i ne mora posedovati unificirano grafičko okruženje',
        },
        {
          id: 7,
          question:
            '7. Kako se naziva univerzalni standard za povezivanje perifernih uređaja na računaru?',
          answer1: 'USB',
          answer4: 'WLAN',
          answer2: 'AGP',
          answer3: 'TCP',
        },
        {
          id: 8,
          question: '8. Šta je cloud computing?',
          answer1:
            'Cloud computing je model dostupnosti računarskih resursa putem interneta, omogućavajući korisnicima pristup deljenim resursima kao što su serveri, skladištenje podataka i softverske aplikacije',
          answer4:
            'Cloud computing je model dostupnosti računarskih resursa putem interneta, omogućavajući korisnicima isključivo pristup deljenim resursima kao što su serveri, bez mogućnosti skladištenjenja podataka',
          answer2:
            'Cloud computing je tek najavljen operativni sistem za desktop računare i o njemu se još uvek ne zna dovoljno',
          answer3: 'Ništa od navedenog',
        },
        {
          id: 9,
          question:
            '9. Koja tehnologija se koristi za upravljanje verzijama koda?',
          answer3: 'Git',
          answer1: 'SVN',
          answer2: 'CVS',
          answer4: 'Mercurial',
        },
        {
          id: 10,
          question:
            '10. Koja od sledećih platformi je najpoznatija za cloud computing?',
          answer4: 'Azure',
          answer1: 'Android',
          answer2: 'Ubuntu',
          answer3: 'MacOS',
        },
        {
          id: 11,
          question: '11. Šta od navedenog predstavlja napad na IT sistem?',
          answer3: 'DDOS',
          answer1: 'Phishing',
          answer2: 'System Refresh',
          answer4: 'Ništa od navedenog',
        },
        {
          id: 12,
          question:
            '12. Koja od sledećih tehnologija se koristi za enkripciju internet komunikacije?',
          answer4: 'SSL',
          answer1: 'HTTP',
          answer2: 'SMTP',
          answer3: 'TCP',
        },
        {
          id: 13,
          question: '13. Koja od sledećih nije vrsta računarske memorije?',
          answer2: 'JPEG',
          answer1: 'ROM',
          answer4: 'RAM',
          answer3: 'Cache',
        },
        {
          id: 14,
          question: '14. Šta od sledećeg nije vrsta programskog jezika?',
          answer1: 'XML',
          answer4: 'Ruby',
          answer2: 'Python',
          answer3: 'JavaScript',
        },
        {
          id: 15,
          question:
            '15. Blockchain tehnologija je distribuirani sistem za čuvanje podataka koji omogućava bezbedno čuvanje i prenos digitalnih transakcija putem centralizovane i sigurne platforme',
          answer2: 'Netačno',
          answer1: 'Tačno',
        },
        {
          id: 16,
          question:
            '16. Koja od navedenih tehnologija se koristi za izgradnju statičkih web stranica?',
          answer2: 'HTML',
          answer1: 'React',
          answer4: 'Vue.js',
          answer3: 'Django',
        },
      ],
    };
  }
}
