import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class BiologijaRoute extends Route {
  model() {
    localStorage.setItem("1.bio","ans2");
    localStorage.setItem("2.bio","ans3"); 
    localStorage.setItem("3.bio","ans2");
    localStorage.setItem("4.bio","ans1");
    localStorage.setItem("5.bio","ans2");
    localStorage.setItem("6.bio","ans2");
    localStorage.setItem("7.bio","ans2");
    localStorage.setItem("8.bio","ans3");
    localStorage.setItem("9.bio","ans1");
    localStorage.setItem("10.bio","ans2");
    localStorage.setItem("11.bio","ans1");
    localStorage.setItem("12.bio","ans2");


    return {
      data: [
        {
          id: 1,
          question: '1. Šta je fotosinteza?',
          answer1:
            'Fotosinteza je proces koji biljke koriste za pretvaranje sunčeve svetlosti, vode i ugljen-dioksida u glukozu (šećer) i kiseonik, uz pomoć hlorofila',
            answer2:
            'Fotosinteza je proces koji bakterije koriste za pretvaranje sunčeve svetlosti, vode i ugljen-dioksida u glukozu (šećer) i kiseonik, uz pomoć hlorofila',
            answer3:
            'Fotosinteza je proces koji biljke koriste za pretvaranje ugljen dioksida, svetlosti i vode u glukozu (šećer) i kiseonik, uz pomoć hlorofila',
            answer4:
            'Ne znam',
        
          },
        {
          id: 2,
          question:
            '2. Kako se nazivaju osnovne jedinice nasleđivanja u organizmima?',
          answer1: 'DNK fragmenti',
          answer2: 'Hromozomi',
          answer3: 'Geni',
          answer4: 'Ne znam',
          
        },
        {
          id: 3,
          question: '3. Koja je funkcija DNK u ćelijama?',
          answer1:
            'DNK određuje isključivo boju očiju, kose i kože.',
            answer2:
            'DNK (deoksiribonukleinska kiselina) nosi genetičku informaciju i kontrolira procese u ćelijama',
            answer3:
            'DNK ne postoji u ljudskom organizmu',
            answer4:
            'Ne znam',
        
          },
        {
          id: 4,
          question:  '4. Mitoza je proces deobe ćelija kojim se formiraju dve identične ćelije sa istim brojem hromozoma kao i početna ćelija',
      
          answer1:
           'Tačno',
          answer2:
            'Netačno',
            
          },
        {
          id: 5,
          question: '5. Šta je mejoza?',
          answer1:
            'Mejoza je proces deobe ćelija koji se javlja u reproduktivnim ćelijama organizma i rezultira stvaranjem haploidnih ćelija',
            answer2:
            'Mejoza je proces deobe ćelija koji se javlja u reproduktivnim ćelijama organizma i rezultira stvaranjem organskih ćelija (ćelija sa polovinom broja hromozoma)',
            answer3:
            'Mejoza je rezultira stvaranjem NADhaploidnih ćelija (ćelija sa celim brojem hromozoma)',

            answer4:
            'Ne znam',

          },
        {
          id: 6,
          question: '6. Koja je razlika između biljnih i životinjskih ćelija?',
          answer1:
            'Biljne ćelije nemaju ćelijski zid, hloroplaste i mali centralni vakuol, dok životinjske ćelije imaju ćelijski zid, hloroplaste i imaju više malih vakuola',
            answer2:
            'Biljne ćelije imaju ćelijski zid, hloroplaste i veliki centralni vakuol, dok životinjske ćelije nemaju ćelijski zid, hloroplaste i imaju više malih vakuola',
            answer3:
            'Biljne ćelije imaju ćelijski zid, hloroplaste i veliki centralni vakuol, dok životinjske imaju nemaju ćelijski zid i imaju više malih vakuola',
          
            answer4:
            'Ne znam',

          },
        {
          id: 7,
          question: '7. Fotosintetski pigmenti su hemijski spojevi koji apsorbuju svetlost i omogućavaju biljkama da obavljaju fotosintezu. Najvažniji fotosintetski pigment nije hlorofil.',
          answer1:
            'Tačno',
            answer2:
            'Netačno',
  },
        {
          id: 8,
          question:
            '8. Kako se zove proces razmnožavanja biljaka putem semena?',
          answer1:
            'Biljke se ne razmnožavaju',
            answer2:
            'Proces razmnožavanja biljaka putem semena naziva se inkrementalno razmnožavanje',
            answer3:
            'Proces razmnožavanja biljaka putem semena naziva se generativno razmnožavanje',
            answer4:
            'Ne znam',
        },
        {
          id: 9,
          question: '9. Enzimi su proteini koji katalizuju (ubrzavaju) hemijske reakcije u ćelijama, omogućavajući im da se odvijaju pri optimalnim brzinama',
          answer1:
            'Tačno',
            answer2:
            'Netačno',
  },
        {
          id: 10,
          question: '10. Koja je uloga ribosoma u ćeliji?',
          answer1:
            'Ribosomi sintetišu vlakna u ćelijama, prema genetičkoj informaciji prenesenoj sa RNK',
            answer2:
            'Ribosomi su mesta gde se sintetišu proteini u ćelijama, prema genetičkoj informaciji prenesenoj sa DNK',
            answer3:
            'Ribosomi sintetišu T-ćelije, prema genetičkoj informaciji prenesenoj sa RNK',
          
            answer4:
            'Ne znam',

          },
        {
          id: 11,
          question: '11. Ekologija je naučna disciplina koja proučava odnose između organizama i njihove okoline',
          answer1:'Tačno',
          answer2:
            'Netačno',

          },
        {
          id: 12,
          question:
            '12. Koja je funkcija ribonukleinske kiseline (RNK) u ćelijama?',
          answer1:
            'Ribonukleinska kiselina je drugi naziv za dezoksiribonukleinsku kiselinu',
            answer2:
            'Ribonukleinska kiselina (RNK) ima ulogu u prenosu genetičke informacije',
            answer3:
            'Ribonukleinska kiselina (RNK) ima ulogu u stvaranju genetičkih informacija',
              
            answer4:
            'Ne znam',

          },
      ],
      
      
    }
  }
}
