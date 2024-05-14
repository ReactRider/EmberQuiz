import Route from '@ember/routing/route';

export default class MenadzmentRoute extends Route {
  model() {
    localStorage.setItem('1.mng', 'ans1');
    localStorage.setItem('2.mng', 'ans4');
    localStorage.setItem('3.mng', 'ans4');

    localStorage.setItem('4.mng', 'ans2');
    localStorage.setItem('5.mng', 'ans1');
    localStorage.setItem('6.mng', 'ans4');

    localStorage.setItem('7.mng', 'ans3');
    localStorage.setItem('8.mng', 'ans3');
    localStorage.setItem('9.mng', 'ans3');

    localStorage.setItem('10.mng', 'ans2');
    localStorage.setItem('11.mng', 'ans4');

    return {
      data: [
        {
          id: 1,
          question: '1. Šta je projekat?',
          answer1:
            'Projekat je privremeni napor usmeren ka stvaranju jedinstvenog proizvoda, usluge ili rezultata u ograničenom vremenskom periodu',
          answer4:
            'Projekat je trajni napor usmeren ka stvaranju isključivo proizvoda u ograničenom vremenskom periodu',
          answer2:
            'Projekat je privremeni napor usmeren ka stvaranju nejedinstvenog proizvoda, usluge ili rezultata u neograničenom vremenskom periodu',
          answer3:
            'Projekat je trajni napor usmeren ka stvaranju nejedinstvenog proizvoda, usluge u neograničenom vremenskom periodu',
        },
        {
          id: 2,
          question: '2. Koje su osnovne faze u upravljanju projektima?',
          answer4:
            'Osnovne faze u upravljanju projektima su inicijacija, planiranje, izvršenje, praćenje i kontrola, kao i zatvaranje projekta',
          answer1:
            'Osnovne faze u upravljanju projektima su inicijacija, planiranje, izvršenje, praćenje, kao i kontrola projekta',
          answer2:
            'Osnovne faze u upravljanju projektima su planiranje, praćenje i kontrola, kao i zatvaranje projekta',
          answer3:
            'Osnovne faze u upravljanju projektima su inicijacija, izvršenje, praćenje, kao i zatvaranje projekta',
        },
        {
          id: 3,
          question: '3. Koje su ključne komponente projektnog plana?',
          answer4:
            'Ključne komponente projektnog plana uključuju opis projekta, ciljeve, raspored aktivnosti, alokaciju resursa, budžet, rizike i kvalitetne ciljeve',
          answer1:
            'Ključne komponente projektnog plana uključuju opis projekta, ciljeve, raspored aktivnosti, alokaciju resursa, budžet, rizike i kvalitetan ljudski kadar',
          answer2:
            'Ključne komponente projektnog plana uključuju opis projekta, ciljeve, alokaciju resursa, budžet',
          answer3:
            'Ključne komponente projektnog plana uključuju opis projekta, ciljeve, alokaciju resursa, budžet, i rizike',
        },
        {
          id: 4,
          question: '4. Kako se upravlja resursima u projektu?',
          answer2:
            'Upravljanje resursima u projektu obuhvata identifikaciju, alokaciju i upravljanje ljudskim, materijalnim, finansijskim i vremenskim resursima',
          answer1:
            'Upravljanje resursima u projektu obuhvata upravljanje ljudskim, vremenskim i finansijskim resursima',
          answer4:
            'Upravljanje resursima u projektu obuhvata identifikaciju i upravljanje materijalnim, finansijskim i vremenskim resursima',
          answer3:
            'Upravljanje resursima u projektu obuhvata identifikaciju, alokaciju i upravljanje ljudskim, finansijskim i vremenskim resursima',
        },
        {
          id: 5,
          question:
            '5. Procena rizika u projektu podrazumeva identifikaciju potencijalnih pretnji i prilika koje mogu uticati na uspešnost projekta, kao i analizu njihovih verovatnoća i uticaja, kako bi se razvile strategije za njihovo upravljanje',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 6,
          question: '6. Šta je agilni menadžment?',
          answer4:
            'Agilni menadžment je pristup upravljanju koji se fokusira na brzu adaptaciju, fleksibilnost i kontinuiranu komunikaciju radi postizanja ciljeva',
          answer1:
            'Agilni menadžment je pristup upravljanju koji se fokusira na brzu adaptaciju, fleksibilnost i diskontinuiranu komunikaciju radi postizanja ciljeva',
          answer2:
            'Agilni menadžment je pristup upravljanju koji se fokusira na brzo postizanje ciljeva, fleksibilnost i kontinuiranu komunikaciju',
          answer3:
            'Agilni menadžment je pristup upravljanju koji se fokusira na relativno sporo ali kvalitetno postizanje predviđenih ciljeva i kontinuiranu komunikaciju ćlanova tima',
        },
        {
          id: 7,
          question: '7. Koje su ključne vrednosti agilnog menadžmenta?',
          answer3:
            'Ključne vrednosti agilnog menadžmenta uključuju pojednostavljenje, brzu adaptaciju, saradnju sa klijentima i timovima, kao i kontinuiranu isporuku vrednosti',
          answer1:
            'Ključne vrednosti agilnog menadžmenta uključuju brzu adaptaciju, saradnju sa klijentima i timovima, kao i povremenu isporuku vrednosti ( sa prekidima )',
          answer2:
            'Ključne vrednosti agilnog menadžmenta uključuju pojednostavljenje, relativno brzu adaptaciju, saradnju isključivo sa klijentima, kao i kontinuiranu isporuku vrednosti',
          answer4:
            'Ključne vrednosti agilnog menadžmenta uključuju pojednostavljenje, saradnju isključivo na nivou tima, kao i povremenu isporuku vrednosti ( sa prekidima, po potrebi )',
        },
        {
          id: 8,
          question: '8. Koja je glavna funkcija menadžmenta?',
          answer3: 'Sve navedeno',
          answer1: 'Planiranje',
          answer2: 'Kontrola',
          answer4: 'Organizovanje',
        },
        {
          id: 9,
          question:
            '9.Koji stil liderstva karakteriše vođa koji delegira odgovornosti i omogućava zaposlenima samostalnost?',
          answer3: 'Laissez-faire stil',
          answer1: 'Demokratski stil',
          answer2: 'Autokratski stil',
          answer4: 'Transformacioni stil',
        },
        {
          id: 10,
          question:
            '10. Prednosti primene agilnog menadžmenta uključuju bržu adaptaciju na promene, veću fleksibilnost, povećano zadovoljstvo klijenata i timova, kao i bolju isporuku vrednosti?',
          answer2: 'Tačno',
          answer1: 'Netačno',
        },
        {
          id: 11,
          question: '11. Šta podrazumeva SWOT analiza?',
          answer4: 'Strengths, Weaknesses, Opportunities, Threats',
          answer1: 'Strategies, Weaknesses, Opportunities, Tactics',
          answer2: 'Strengths, Workload, Opportunities, Threats',
          answer3: 'Streams, Workload, Opportunities, Threats',
        },
      ],
    };
  }
}
