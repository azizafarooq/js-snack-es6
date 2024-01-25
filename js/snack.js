// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const roadBikes = [
    {
        name: 'Bici uno',
        weight: 8.2,
    },
    {
        name: 'Bici 2',
        weight: 7.5,
    },
    {
        name: 'bici 3',
        weight: 6.3,
    },
    {
        name: 'Bici 4',
        weight: 9.3,
    },
    {
        name: 'Bici 5',
        weight: 7.1,
    },
    {
        name: 'Bici 6',
        weight: 6.7,
    }
]

let lightBike = roadBikes[0];
for (let i = 1; i < roadBikes.length; i++) {
    if (roadBikes[i].weight < lightBike.weight) {
      lightBike = roadBikes[i];
    }
}

const { name, weight } = lightBike;
console.log(`La bici più leggera è ${name} con un peso di ${weight} kg.`);

/********************************************************************************************************************/

// Usa l'array allegato alla traccia per completare i seguenti punti:
// Valorizzare le proprietà dei punti fatti e dei falli subiti con numeri randomici
// Creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti, recuperandoli con il destructuring, e stampiamo tutto in console.

const teams = [
    {
      name: 'Team Turtle',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Frog',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Penguin',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Hippopotamus',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Seal',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Crocodile',
      score: 0,
      foul: 0,
    },
    {
      name: 'Team Dolphin',
      score: 0,
      foul: 0,
    },
  ];

function getRandomNumber() {
    return Math.floor(Math.random() * 11); 
}

for (let i = 0; i < teams.length; i++) {
    teams[i].score = getRandomNumber(); 
    teams[i].foul = getRandomNumber(); 
}

const teamStatistics = teams.map(({ name, foul }) => ({ name, foul }));

console.table(teamStatistics); 