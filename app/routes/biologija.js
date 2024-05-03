import Route from '@ember/routing/route';

export default class BiologijaRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Šta je fotosinteza?',
          answer:
            'Fotosinteza je proces koji biljke koriste za pretvaranje sunčeve svetlosti, vode i ugljen-dioksida u glukozu (šećer) i kiseonik, uz pomoć hlorofila',
        },
        {
          id: 2,
          question:
            '2. Kako se nazivaju osnovne jedinice nasleđivanja u organizmima?',
          answer: 'Geni',
        },
        {
          id: 3,
          question: '3. Koja je funkcija DNK u ćelijama?',
          answer:
            'DNK (deoksiribonukleinska kiselina) nosi genetičku informaciju i kontrolira procese u ćelijama',
        },
        {
          id: 4,
          question: '4. Šta je mitoza?',
          answer:
            'Mitoza je proces deobe ćelija kojim se formiraju dve identične ćelije sa istim brojem hromozoma kao i početna ćelija',
        },
        {
          id: 5,
          question: '5. Šta je mejoza?',
          answer:
            'Mejoza je proces deobe ćelija koji se javlja u reproduktivnim ćelijama organizma i rezultira stvaranjem haploidnih ćelija (ćelija sa polovinom broja hromozoma)',
        },
        {
          id: 6,
          question: '6. Koja je razlika između biljnih i životinjskih ćelija?',
          answer:
            'Biljne ćelije imaju ćelijski zid, hloroplaste i veliki centralni vakuol, dok životinjske ćelije nemaju ćelijski zid, hloroplaste i imaju više malih vakuola',
        },
        {
          id: 7,
          question: '7. Šta su fotosintetski pigmenti i koja je njihova uloga?',
          answer:
            'Fotosintetski pigmenti su hemijski spojevi koji apsorbuju svetlost i omogućavaju biljkama da obavljaju fotosintezu. Najvažniji fotosintetski pigment je hlorofil',
        },
        {
          id: 8,
          question:
            '8. Kako se zove proces razmnožavanja biljaka putem semena?',
          answer:
            'Proces razmnožavanja biljaka putem semena naziva se generativno razmnožavanje',
        },
        {
          id: 9,
          question: '9. Koja je uloga enzima u organizmima?',
          answer:
            'Enzimi su proteini koji katalizuju (ubrzavaju) hemijske reakcije u ćelijama, omogućavajući im da se odvijaju pri optimalnim brzinama',
        },
        {
          id: 10,
          question: '10. Koja je uloga ribosoma u ćeliji?',
          answer:
            'Ribosomi su mesta gde se sintetišu proteini u ćelijama, prema genetičkoj informaciji prenesenoj sa DNK',
        },
        {
          id: 11,
          question: '11. Šta je ekologija?',
          answer:
            ' Ekologija je naučna disciplina koja proučava odnose između organizama i njihove okoline',
        },
        {
          id: 12,
          question:
            '12. Koja je funkcija ribonukleinske kiseline (RNK) u ćelijama?',
          answer:
            'Ribonukleinska kiselina (RNK) ima ulogu u prenosu genetičke informacije',
        },
      ],
    };
  }
}
