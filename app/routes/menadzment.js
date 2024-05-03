import Route from '@ember/routing/route';

export default class MenadzmentRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Šta je projekat?',
          answer:
            'Projekat je privremeni napor usmeren ka stvaranju jedinstvenog proizvoda, usluge ili rezultata u ograničenom vremenskom periodu',
        },
        {
          id: 2,
          question: '2. Koje su osnovne faze u upravljanju projektima?',
          answer:
            'Osnovne faze u upravljanju projektima su inicijacija, planiranje, izvršenje, praćenje i kontrola, kao i zatvaranje projekta',
        },
        {
          id: 3,
          question: '3. Koje su ključne komponente projektnog plana?',
          answer:
            'Ključne komponente projektnog plana uključuju opis projekta, ciljeve, raspored aktivnosti, alokaciju resursa, budžet, rizike i kvalitetne ciljeve',
        },
        {
          id: 4,
          question: '4. Kako se upravlja resursima u projektu?',
          answer:
            'Upravljanje resursima u projektu obuhvata identifikaciju, alokaciju i upravljanje ljudskim, materijalnim, finansijskim i vremenskim resursima radi efikasne realizacije projektnih aktivnosti',
        },
        {
          id: 5,
          question: '5. Kako se vrši procena rizika u projektu?',
          answer:
            'Procena rizika u projektu podrazumeva identifikaciju potencijalnih pretnji i prilika koje mogu uticati na uspešnost projekta, kao i analizu njihovih verovatnoća i uticaja, kako bi se razvile strategije za njihovo upravljanje',
        },
        {
          id: 6,
          question: '6. Šta je agilni menadžment?',
          answer:
            'Agilni menadžment je pristup upravljanju koji se fokusira na brzu adaptaciju, fleksibilnost i kontinuiranu komunikaciju radi postizanja ciljeva',
        },
        {
          id: 7,
          question: '7. Koje su ključne vrednosti agilnog menadžmenta?',
          answer:
            'Ključne vrednosti agilnog menadžmenta uključuju pojednostavljenje, brzu adaptaciju, saradnju sa klijentima i timovima, kao i kontinuiranu isporuku vrednosti',
        },
        {
          id: 8,
          question: '8. Koji su ključni principi agilnog menadžmenta?',
          answer:
            'Ključni principi agilnog menadžmenta obuhvataju kontinuiranu isporuku vrednosti, adaptivnost, transparentnost, saradnju, samorganizaciju timova i refleksiju',
        },
        {
          id: 9,
          question: '9. Kako se sprovodi agilni pristup u projektima?',
          answer:
            'Agilni pristup u projektima se sprovodi kroz iterativni proces razvoja, rad u malim inkrementima, redovne stand-up sastanke, retrospektive i kontinuiranu komunikaciju sa klijentima',
        },
        {
          id: 10,
          question: '10. Koje su prednosti primene agilnog menadžmenta?',
          answer:
            'Prednosti primene agilnog menadžmenta uključuju bržu adaptaciju na promene, veću fleksibilnost, povećanu zadovoljstvo klijenata i timova, kao i bolju isporuku vrednosti',
        },
        {
          id: 11,
          question: '11. Kako se upravlja promenama u agilnom okruženju?',
          answer:
            'Upravljanje promenama u agilnom okruženju podrazumeva brzu adaptaciju na nove zahteve, transparentnu komunikaciju sa timovima i klijentima, kao i fleksibilnost u planiranju i izvršenju projektnih aktivnosti',
        },
      ],
    };
  }
}
