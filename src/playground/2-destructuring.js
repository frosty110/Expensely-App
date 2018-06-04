


const person = {
    name: 'Andrew',
    age: 25,
    location: {
        city: 'Phili',
        temp: 92
    }
};

const anon = {
    location: {
        city: 'Phili',
        temp: 92
    }
};

// const name = person.name;
// const age = person.age;
// alternative way of writing the above code. This is object destructuring
const {name, age} = person;
console.log(`${name} is ${age}.`)

// if (person.location.temp && person.location.city){
//     console.log(`It's ${person.location.temp} in ${person.location.city}.`);
// }
// alternative way to write:
const {city, temp} = person.location;
if (city && temp){
    console.log(`It's ${temp} in ${city}.`);
}

// renaming the variable
const {city:location, temp: temperature} = person.location;
if (location && temperature){
    console.log(`It's ${temperature} in ${location}.`);
}

// dealing with unknowns
const {name:firstName='Anoymous', age:age2='unknown'} = anon;
console.log(`${firstName} is ${age2}.`);


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'penguin'
    }
};

const {name: publisherName="Self published"} = book.publisher;
console.log(publisherName);

// Array Destructuring

const address = ['1299 S Juniper Street','Philidelphia', 'Pennsylvania', '19147'];
const [, , state] = address; // assign the position of the array with a const 
console.log(`You are in ${state}`);

const address2 = [];
const [, , state2='No where'] = address2; // assign the position of the array with a const 
console.log(`You are in ${state2}`);


const item =['Coffee (hot)', '$2.00','$2.50','$2.75',]
const [hotCoffee, , mediumPrice] = item;
console.log(`A medium ${hotCoffee} costs ${mediumPrice}`);