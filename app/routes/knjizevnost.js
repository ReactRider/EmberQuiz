import Route from '@ember/routing/route';

export default class KnjizevnostRoute extends Route {
  model() {
    return {
      data: [
        {
          id: 1,
          question: '1. Ko je napisao roman "Rat i mir"?',
          answer: 'Lav Tolstoj',
        },
        {
          id: 2,
          question: '2. Koji je najpoznatiji roman Šarla Baudelera?',
          answer: '"Cvjetovi zla" (Les Fleurs du Mal)',
        },
        {
          id: 3,
          question: '3. Ko je autor knjige "Sto godina samoće"?',
          answer: 'Gabriel Garsia Markes',
        },
        {
          id: 4,
          question: '4. Koji je nacionalni ep Grčke?',
          answer: 'Ilijada',
        },
        {
          id: 5,
          question: '5. Ko je autor knjige "Ana Karenjina"?',
          answer: 'Lav Tolstoj',
        },
        {
          id: 6,
          question: '6. Ko je autor tragedije "Hamlet"?',
          answer: 'Vilijam Šekspir',
        },
        {
          id: 7,
          question: '7. Ko je napisao roman "Gospodar prstenova"?',
          answer: ' Dž.R.R. Tolkien',
        },
        {
          id: 8,
          question: '8. Ko je autor knjige "Lovac u žitu"?',
          answer: 'J.D.Selinger',
        },
        {
          id: 9,
          question: '9. Koji je najpoznatiji roman Fjodora Dostojevskog?',
          answer: '"Zločin i kazna"',
        },
        {
          id: 10,
          question:
            '10. Koji roman počinje rečenicom: "Bila je najbolje od svih i najgora od svih."?',
          answer: '"Ana Karenjina" autora Lava Tolstoja',
        },
        {
          id: 11,
          question:
            '11. Iz kog romana je sledeći odlomak: "Nikad nije bilo lakše voditi bitku kada se gubi"?',
          answer: ' "Ponos i predrasude" Džejn Ostin',
        },
        {
          id: 12,
          question: '12. Koji roman počinje rečenicom: "Luda noć, luda kuća."?',
          answer: '"Veliki Getsbi" F. Skot Ficdžeralda',
        },
      ],
    };
  }
}
