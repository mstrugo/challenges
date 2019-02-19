
let CAR_DATA = [
  { manufacturer: 'Chevrolet', models: ['Corvette', 'Camaro', 'Suburban', 'S-10'] },
  { manufacturer: 'Ford', models: ['Escort', 'Focus', 'Mustang', 'Bronco'] },
  { manufacturer: 'Dodge', models: ['Charger', 'Viper', 'Durango'] },
  { manufacturer: 'Fiat', models: ['500', '500c', '500 Abarth'] },
  { manufacturer: 'BMW', models: ['535i Sedan', 'M6 Convertible', 'X5', 'M4 Coupe'] },
];

// Given a CAR_DATA constant that is an array of objects.
// Each object has two properties:
//   manufacturer: A car manufacturer.
//   models: An array of car models.
// 
// Implement the `test` function to generate an array of all possible cars.
// Each array item should be a string in the form "manufacturer: model"
//   Example:
//   [ "Toyota: Camry", "Dodge: Durango", ... ]
//

function test() {
  let newArr = [];
  CAR_DATA.map( (item) => {
    for (let car in item.models) {
      newArr.push(`${item.manufacturer}: ${item.models[car]}`);
    }
  });

  return newArr;
}

// TODO FIX: Using only maps
/*
function test() {
  const newArr = CAR_DATA.map( (item) => {
    return item.models.map( (model) => {
       return (`${item.manufacturer}: ${model}`);
    })
  });

  return newArr;
}
*/



function verify(actual) {
  var output = ['Chevrolet: Corvette','Chevrolet: Camaro','Chevrolet: Suburban','Chevrolet: S-10','Ford: Escort','Ford: Focus','Ford: Mustang','Ford: Bronco','Dodge: Charger','Dodge: Viper','Dodge: Durango','Fiat: 500','Fiat: 500c','Fiat: 500 Abarth','BMW: 535i Sedan','BMW: M6 Convertible','BMW: X5','BMW: M4 Coupe'];
  return (JSON.stringify(actual) === JSON.stringify(output));
}

if (verify(test())) {
  console.log('Verified!');
} else {
  console.log('Try again.')
}
