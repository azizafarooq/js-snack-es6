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