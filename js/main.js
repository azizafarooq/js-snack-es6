
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


const students = [{
    id: 213, 
    name: 'Marco della Rovere', 
    grades: 78 
  },
  { id: 110, 
    name: 'Paola Cortellessa', 
    grades: 96 
  },
  { id: 250, 
    name: 'Andrea Mantegna', 
    grades: 48 
  },
  { id: 145, 
    name: 'Gaia Borromini', 
    grades: 74 
  },
  { id: 196, 
    name: 'Luigi Grimaldello', 
    grades: 68 
  },
  { id: 102, 
    name: 'Piero della Francesca', 
    grades: 50 
  },
  { id: 120, 
    name: 'Francesca da Polenta', 
    grades: 84 
  },
];


const studentsBadge = students.map ((student ) =>  student.name.toUpperCase());


const goodStudents= students.filter(student => student.grades > 70);


const youngGoodStudents = students.filter(student => student.grades > 70 && student.id > 120);


console.log(studentsBadge);
console.log(goodStudents);
console.log(youngGoodStudents );
