function sayHello(name) {
    console.log(`Hi dear ${name}`)
}

sayHello('Weihnachtsmann')
// say hello to a friend
sayHello('Judith')


// initialize the best name ever =  give it the initial value and greet them
 const bestNameEver ='Alex'
sayHello(bestNameEver)


let bestCollegueEver='Mihali'
// who is the best colleague? greet them
sayHello(bestCollegueEver)
bestCollegueEver='Rhena'
sayHello(bestCollegueEver)
// but maybe your favorite changes?
// bestCollegueEver = ;

// let's greet all of our colleagues
const allColleagues = ["Patrik", "Suresh", "Robin", "Daniel", "Corinna", "Tito", "Nico"]
// sayHello(allColleagues)

// only greet the third colleague

// greet colleagues in alphabetical order
//sayHello(allColleagues.sort())

// greet only colleagues which have an 'i' in their name
for (let name of allColleagues) {
    if (name.includes('i')) {
        //sayHello(name)
    }
}

// greet names which have more than 5 characters