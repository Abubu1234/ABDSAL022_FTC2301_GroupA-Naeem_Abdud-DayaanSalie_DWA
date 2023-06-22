
function personFactory(firstName, lastName){
    let person = Object.create(personPrototype, {
        firstName: {writable: false, value: firstName},
        lastName: {writable: false, value: lastName},
    })
    return person;
    }
let johnDoe = personFactory("John","Doe");
let janeSmith = personFactory("Jane","Smith");

console.log(johnDoe.greet(janeSmith))