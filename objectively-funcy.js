const getFirstName = person => person.firstName;

const getLastName = person => person.lastName;

const getFullName = person => `${person.firstName} ${person.lastName}`;

const setFirstName = (person, newFirstName) => person.firstName = newFirstName;

/*
If you have more than one parameter, you have to put them in parenthesis in an arrow function
*/

const setAge = (person, newAge) => person.age = newAge;

const giveBirthday = person => {
  let ageExists = 'age' in person;

  if(!!ageExists) {
    person.age += 1;
  } else {
    person.age = 2;
  }
}

/*
8 Falsy Values: 'false', '0', '-0', '0n' for BigInt, '' Empty String, null, undefined, NaN
Double Bang (!!) checks if not one of JS' 8 falsy values
*/

const marry = function(spouse1, spouse2) {
  spouse1.married = true;
  spouse2.married = true;

  spouse1.spouseName = `${spouse2.firstName} ${spouse2.lastName}`;
  spouse2.spouseName = `${spouse1.firstName} ${spouse1.lastName}`;
}

const divorce = function(spouse1, spouse2) {
  spouse1.married = false;
  spouse2['married'] = false;

  delete spouse2.spouseName;
  delete spouse2['spouseName'];
}
