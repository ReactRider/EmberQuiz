import Route from '@ember/routing/route';

export default class OlimpijskeigreRoute extends Route {
  model() {
    localStorage.setItem('1.oi', 'ans4');
    localStorage.setItem('2.oi', 'ans2');
    localStorage.setItem('3.oi', 'ans4');

    localStorage.setItem('4.oi', 'ans1');
    localStorage.setItem('5.oi', 'ans2');
    localStorage.setItem('6.oi', 'ans4');

    localStorage.setItem('7.oi', 'ans1');
    localStorage.setItem('8.oi', 'ans1');
    localStorage.setItem('9.oi', 'ans3');

    localStorage.setItem('10.oi', 'ans3');
    localStorage.setItem('11.oi', 'ans4');
    localStorage.setItem('11.oi', 'ans3');

    return {
      data: [
        {
          id: 1,
          question: '1. Gde su održane Letnje olimpijske igre 2000. godine?',
          answer4: 'Sidnej, Australija',
          answer1: 'Los Anđeles, SAD',
          answer2: 'London, Engleska',
          answer3: 'Berlin, Nemačka',
        },
        {
          id: 2,
          question:
            '2. Koja zemlja je domaćin Zimskih olimpijskih igara 2002. godine?',
          answer2: 'SAD',
          answer1: 'Francuska',
          answer4: 'Italija',
          answer3: 'Japan',
        },
        {
          id: 3,
          question: '3. Koje su godine Letnje olimpijske igre održane u Atini?',
          answer4: '2004. godine',
          answer1: '2002. godine',
          answer2: '2012. godine',
          answer3: '1998. godine',
        },
        {
          id: 4,
          question:
            '4. Koja zemlja je bila domaćin Zimskih olimpijskih igara 2006. godine?',
          answer1: 'Italija',
          answer4: 'Švajcarska',
          answer2: 'Engleska',
          answer3: 'Rusija',
        },
        {
          id: 5,
          question: '5. Gde su održane Letnje olimpijske igre 2008. godine?',
          answer2: 'Peking, Kina',
          answer1: 'Brazilija, Brazil',
          answer4: 'Atina, Grčka',
          answer3: 'Madrid, Španija',
      
        },
        {
          id: 6,
          question:
            '6. Koja zemlja je domaćin Zimskih olimpijskih igara 2010. godine?',
          answer4: 'Kanada',
          answer1: 'SAD',
          answer2: 'Rusija',
          answer3: 'Bosna i Hercegovina',
      
        },
        {
          id: 7,
          question:
            '7. Letnje olimpijske igre održane su u Londonu 2012. godine?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 8,
          question:
            '8. Koja zemlja je bila domaćin Letnjih olimpijskih igara 2016. godine?',
          answer1: 'Brazil',
          answer4: 'Argentina',
          answer2: 'Meksiko',
          answer3: 'Izrael',
        },
        {
          id: 9,
          question:
            '9. Koje su godine Zimske olimpijske igre održane u Južnoj Koreji?',
          answer3: '2018. godine',
          answer1: '2016. godine',
          answer2: '2008. godine',
          answer4: 'Ništa od navedenog',
        },
        {
          id: 10,
          question:
            '10. Koja zemlja je bila domaćin Zimskih olimpijskih igara 2022. godine?',
          answer3: 'Kina',
          answer1: 'Japan',
          answer2: 'Indija',
          answer4: 'Južna Koreja',
      
        },
        {
          id: 11,
          question:
            '11.  Gde će biti održane Zimske olimpijske igre 2026. godine?',
          answer4: 'Italija',
          answer1: 'Švedska',
          answer2: 'Švajcarska',
          answer3: 'Češka',
      
        },
        {
          id: 12,
          question:
            '12. Koja zemlja će biti domaćin Letnjih olimpijskih igara 2028. godine?',
          answer3: 'SAD',
          answer1: 'Francuska',
          answer2: 'Australija',
          answer4: 'Norveška',
      
        },
      ],
    };
  }
}
