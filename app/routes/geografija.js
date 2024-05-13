import Route from '@ember/routing/route';

export default class GeografijaRoute extends Route {
  model() {
    localStorage.setItem("1.geo","ans3");
    localStorage.setItem("2.geo","ans2"); 
    localStorage.setItem("3.geo","ans3");
    localStorage.setItem("4.geo","ans2");
    localStorage.setItem("5.geo","ans4");
    localStorage.setItem("6.geo","ans1");
    localStorage.setItem("7.geo","ans4");
    localStorage.setItem("8.geo","ans1");
    localStorage.setItem("9.geo","ans3");
    localStorage.setItem("10.geo","ans4");
    localStorage.setItem("11.geo","ans1");
    localStorage.setItem("12.geo","ans2");
    localStorage.setItem("13.geo","ans4");
    localStorage.setItem("14.geo","ans2");

    return {
      data: [
        {
          id: 1,
          question: '1. Koja je najveća planina na svetu?',
          answer3: 'Mont Everest u lancu Himalaja',
          answer1: 'Mon Blan na Alpima',
          answer2: 'Akonkagva na Andima',
          answer4: 'Ništa od ponuđenog',
        },
        {
          id: 2,
          question: '2. Koja je najduža reka na svetu?',
          answer2: 'Nil',
          answer1: 'Amazon',
          answer4: 'Po',
          answer3: 'Vltava',
        },
        {
          id: 3,
          question: '3. Koja je najveća pustinja na svetu?',
          answer3: 'Sahara',
          answer1: 'Namibijska pustinja',
          answer2: 'Gobi',
          answer4: 'Kalahari',
        },
        {
          id: 4,
          question: '4. Koja je najviša kontinentalna planina?',
          answer2: 'Akonkagva',
          answer1: 'Makalu',
          answer4: 'Matterhorn',
          answer3: 'Maglić',
        },

        {
          id: 5,
          question: '5.  Koja je najgušće naseljena zemlja na svetu?',
          answer4: 'Monako',
          answer1: 'Italija',
          answer2: 'Australija',
          answer3: 'SAD',
        },
        {
          id: 6,
          question: '6. Koja je najveća ostrvska država na svetu?',
          answer1: 'Indonezija',
          answer4: 'Island',
          answer2: 'Madagskar',
          answer3: 'Novi Zeland',
        },
        {
          id: 7,
          question: '7. Koji je najveći kontinent na svetu?',
          answer4: 'Azija',
          answer1: 'Evropa',
          answer2: 'Severna Amerika',
          answer3: 'Afrika',
        },
        {
          id: 8,
          question: '8. Koja je najmanja država na svetu po površini?',
          answer1: 'Vatikan',
          answer4: 'Andora',
          answer2: 'San Marino',
          answer3: 'Luksemburg',
        },
        {
          id: 9,
          question: '9. Koja je najdublja tačka na Zemlji?',
          answer3: ' Marijanski rov u Tihom okeanu',
          answer1: 'Braunson Dip u Atlantiku',
          answer2: 'Ništa navedeno',
          answer4: 'Meteor Dip',
        },
        {
          id: 10,
          question: '10. Koje tri zemlje dele najdužu granicu na svetu?',
          answer2:
            'Najdužu granicu na svetu dele Rusija, Kanada i Sjedinjene Američke Države',
          answer1: 'Najdužu granicu na svetu dele Kina, Rusija i Indija',
          answer4: 'Najdužu granicu na svetu dele Rusija, Finska i Švedska',
          answer3: 'Najdužu granicu na svetu dele Saudijska Arabija, Irak i Azerbejdžan',
        },
        {
          id: 11,
          question: '11. Velika Britanija je najveća ostrvska država u Evropi?',
          answer1: 'Tačno',
          answer2: 'Netačno',
        },
        {
          id: 12,
          question: '12. Koja je najveća zemlja na svetu po površini?',
          answer2: 'Rusija',
          answer1: 'Argentina',
          answer4: 'Australija',
          answer3: 'DR Kongo',
        },
        {
          id: 13,
          question: '13. Koji je najviši vodopad na svetu?',
          answer4: 'Anđeoski vodopad u Venecueli',
          answer1: 'Nijagarini vodopadi u SAD/Kanadi',
          answer2: 'Igazu vodopadi u Argentini/Brazilu',
          answer3: 'Viktorijini vodopadi',
        },
        {
          id: 14,
          question: '14. Koji je najveći arhipelag na svetu?',
          answer2: 'Indonezijski arhipelag',
          answer1: 'Japanski arhipelag',
          answer4: 'Filipinski arhipelag',
          answer3: 'Bahamski arhipelag',
        },

      ],
    };
  }
}
