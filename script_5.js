
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];




//Est-ce que tous les livres ont été au moins empruntés une fois ?
books.filter(book => 
  { if (book.rented > 0) 
  { console.log(`Ces livres ont été emprunté plus dune fois : ${book.title}`)} 
  });




//Quel est livre le plus emprunté ?
//Quel est le livre le moins emprunté ?
books.sort(function(a, b){return a.rented - b.rented});
// console.log(books[0])
// console.log(books[books.length -1])

console.log('le livre le plus emprunté est :' + books[books.length -1].title);
console.log("le livre le moins emprunté est :"+ books[0].title);


//Trouve le livre avec l'ID: 873495
console.log('le livre avec l\'ID: 873495 est :' + books.find(x => x.id === 873495).title);



//Supprime le livre avec l'ID: 133712
console.log(books.title);
books.splice(books.indexOf(books.find(x => x.id === 133712)), 1);
console.log(books);



//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
books.sort(function(a, b){
  var x = a.title.toLowerCase();
  var y = b.title.toLowerCase(); 
  if (x<y) {return -1;}
  if (x>y) {return 1;}
  return 0;

});

console.log(books);

