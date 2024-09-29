/*Take the `people` array and create an array called `youngPeople` 
that stores objects with ONLY `name` and `email` properties of all the people
 that are 25 and under. The `name` property should have their first and last name. */

const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

// Solution

const result = people
  .filter((person) => person.age <= 25)
  .map(function (person) {
    return {
      name: person.firstName + ' ' + person.lastName,
      email: person.email,
    };
  });

console.log(result);
