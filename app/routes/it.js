import Route from '@ember/routing/route';

export default class ItRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Šta je operativni sistem?',
          answer:
            'Operativni sistem je softverski sistem koji omogućava upravljanje hardverom računara i pruža osnovne usluge korisnicima, kao što su pokretanje programa i upravljanje resursima',
        },
        {
          id: 2,
          question: '2. Koji su glavni tipovi operativnih sistema?',
          answer:
            'Glavni tipovi operativnih sistema su Windows, macOS, Linux i Unix',
        },
        {
          id: 3,
          question: '3. Šta je programski jezik?',
          answer:
            'Programski jezik je formalni jezik koji se koristi za pisanje instrukcija koje računar može da izvrši radi obavljanja određenih zadataka',
        },
        {
          id: 4,
          question: '4. Koji su najpopularniji programski jezici?',
          answer:
            'Najpopularniji programski jezici uključuju Java, Python, JavaScript, C++, C# i PHP',
        },
        {
          id: 5,
          question: '5. Šta je algoritam?',
          answer:
            'Algoritam je precizan set instrukcija ili pravila koji se koriste za rešavanje određenog problema ili izvršavanje određene operacije',
        },
        {
          id: 6,
          question: '6. Kako se definiše baza podataka?',
          answer:
            'Baza podataka je organizovana kolekcija podataka koja se koristi za efikasno čuvanje, upravljanje i pristupanje informacijama',
        },
        {
          id: 7,
          question: '7. Koji su tipovi baza podataka?',
          answer:
            'Tipovi baza podataka uključuju relacijske, hijerarhijske, mrežne i objektno-orijentisane baze podataka',
        },
        {
          id: 8,
          question: '8. Šta je cloud computing?',
          answer:
            'Cloud computing je model dostupnosti računarskih resursa putem interneta, omogućavajući korisnicima pristup deljenim resursima kao što su serveri, skladištenje podataka i softverske aplikacije',
        },
        {
          id: 9,
          question: '9. Šta je cyber security?',
          answer:
            'Cyber security je oblast koja se bavi zaštitom računarskih sistema, mreža i podataka od sajber napada, hakovanja i drugih bezbednosnih pretnji',
        },
        {
          id: 10,
          question: '10. Kako se definiše veštačka inteligencija?',
          answer:
            'Veštačka inteligencija je grana računarstva koja se bavi razvojem sistema koji mogu da imitiraju ljudsku inteligenciju i obavljaju zadatke kao što su prepoznavanje slika, obrada prirodnog jezika i donošenje odluka',
        },
        {
          id: 11,
          question: '11. Šta je internet of things (IoT?',
          answer:
            'Internet of Things (IoT) je koncept koji se odnosi na povezivanje svakodnevnih uređaja sa internetom radi razmene podataka i automatizacije procesa',
        },
        {
          id: 12,
          question:
            '12. Šta je program zaštite od zlonamernog softvera (antivirusni program)?',
          answer:
            'Antivirusni program je softver koji se koristi za zaštitu računara od zlonamernih programa kao što su virusi, crvi, trojanci i spyware',
        },
        {
          id: 13,
          question: '13. Koje su osnovne komponente računarske mreže?',
          answer:
            'Osnovne komponente računarske mreže uključuju računare, rutere, prekidače, mrežne kablove i bežične pristupne tačke',
        },
        {
          id: 14,
          question:
            '14. Šta je softver za upravljanje projektima (Project Management Software)?',
          answer:
            'Softver za upravljanje projektima je alat koji se koristi za planiranje, praćenje i upravljanje projektima, uključujući raspoređivanje resursa, praćenje napretka i upravljanje zadacima',
        },
        {
          id: 15,
          question: '15. Šta je blockchain tehnologija?',
          answer:
            'Blockchain tehnologija je distribuirani sistem za čuvanje podataka koji omogućava bezbedno čuvanje i prenos digitalnih transakcija putem decentralizovane i sigurne platforme',
        },
        {
          id: 16,
          question: '16. Šta je big data?',
          answer:
            'Big data se odnosi na velike i kompleksne skupove podataka koji zahtevaju napredne tehnike analize radi otkrivanja obrazaca, trendova i informacija koje nisu vidljive tradicionalnim metodama obrade podataka',
        },
        {
          id: 17,
          question:
            '17. Kako se definiše veštačka realnost (Augmented Reality - AR)?',
          answer:
            'Veštačka realnost je tehnologija koja omogućava interakciju sa stvarnim svetom putem digitalnih elemenata, poput grafike, zvuka i video zapisa, koji su dodati u stvarni svet',
        },
        {
          id: 18,
          question: '18. Koji su osnovni principi softverskog razvoja?',
          answer:
            'Osnovni principi softverskog razvoja uključuju planiranje, analizu, dizajn, implementaciju, testiranje i održavanje softvera',
        },
      ],
    };
  }
}
