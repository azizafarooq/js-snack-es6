

const guests = [
  'Dwayne Johnson',
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin',
];

const guestsObject = guests.map(function(guest, indice) {
  return {
    table: "Tavolo vip",
    name: guest,
    placeholder: indice + 1,
  };
});

console.log(guestsObject);
