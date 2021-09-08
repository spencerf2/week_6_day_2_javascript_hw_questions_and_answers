//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFoods() {
    console.log(`This person likes a few types of foods:`)
    for (let i = 0; i < Object.keys(person3).length; i++) {
        console.log('\t- ' + Object.keys(person3)[i]);
        if (Array.isArray(Object.values(person3)[i])) {
            console.log('\t\tSpecifically they like:');
            for (let j = 0; j < Object.values(person3)[i].length; j++) {
                if (Object.values(person3)[i] != '[object Object]') {
                    console.log(`\t\t\t- ${Object.values(person3)[i][j]}`);
                }
            }
            for (let j = 0; j < Object.keys(person3)[i][j].length; j++) {
                if (Object.values(person3)[i][j].constructor == Object) {
                    for (let k = 0; k < Object.keys(person3.shakes[0]).length; k++) { // Referring to the array in shakes, which has length 1
                        console.log(`\t\t\t- ${Object.keys(person3.shakes[0])[k]}'s ${Object.values(person3.shakes[0])[k]}`);
                    }
                }
            }
            
        } else if (typeof Object.values(person3)[i] == "string") {
            console.log(`\t\tSpecifically:\n\t\t\t- ${Object.values(person3)[i]}`);
        }
    }
}


displayFoods()


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Use an arrow to create the printInfo method
    // [Personal note: Technically I used an arrow, but my research suggests
    // this is a bad practice.  It created added complexity to the code here anyways.]
    printInfo = () => {
        return `${this.name} is ${this.age} years young.`
    }

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    addAge = (num) => {
        this.age += num
        return this.age
    }
}

guy = new Person('John', 28)
console.log(guy.printInfo())
console.log(guy.addAge(5))


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const compareLength = (aString) => {
    return new Promise ((resolve, reject) => {
        if (aString.length > 10) {
            resolve ("Big word");
        } else {
            reject ("Small Number");
        }
    })
}

compareLength("12345678901")
.then((result) => {
    console.log(result)
})
.catch((reject) => {
    console.log(reject)
})
