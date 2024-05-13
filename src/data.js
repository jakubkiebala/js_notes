const data = [
    {
        name: 'pawel',
        city: 'krakow',
        age: 39,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'mati',
        city: 'gdansk',
        age: 23,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'mateusz',
        city: 'gdansk',
        age: 32,
        hobbies: ['fantasy', 'games', 'football']
    },
    {
        name: 'denys',
        city: 'warsaw',
        age: 27,
        hobbies: ['js', 'python', 'not drugs']
    },
    {
        name: 'adas',
        city: 'szczecin',
        age: 29,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'mikolaj',
        city: 'rozwady',
        age: 23,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'bartek',
        city: 'bielsko',
        age: 25,
        hobbies: ['js', 'python', 'code']
    },
    {
        name: 'maciej',
        city: 'lublin',
        age: 27,
        hobbies: ['dziwki', 'dragi', 'lasery']
    },
    {
        name: 'filip',
        city: 'torun',
        age: 26,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'karol',
        city: 'lidzba',
        age: 32,
        hobbies: ['music', 'martial arts', 'drugs']
    },
    {
        name: 'filip',
        city: 'gdansk',
        age: 28,
        hobbies: ['binge-watching', 'rpg games', 'definitely drugs']
    },
    {
        name: 'agnieszka',
        city: 'warsaw',
        age: 38,
        hobbies: ['music', 'books', 'python']
    },
    {
        name: 'vlad',
        city: 'warszawa',
        age: 19,
        hobbies: ['it', 'games', 'python']
    },
    {
        name: 'kuba',
        city: 'lodz',
        age: 21,
        hobbies: ['js', 'python', 'guitar']
    },
    {
        name: 'karol',
        city: 'krakow',
        age: 39,
        hobbies: ['js', 'piłka', 'ping-pong']
    },
    {
        name: 'maciej',
        city: 'Zielonka',
        age: 23,
        hobbies: ['drugs']
    },
    {
        name: 'mateusz',
        city: 'Warszawa',
        age: 21,
        hobbies: ['coding', 'Ai', 'python']
    }
]


//console.log(data.length)

//policz srednia wieku

function calcAvgAge(people) {
    let totalAge = 0;
    let counter = 0;
    for (const person of people) {
        if (!(person.city.toLowerCase() === 'warszawa' || person.city.toLowerCase() === 'warsaw')) {
            totalAge += person.age
            counter++;
        }
    }
    //for (let i = 0; i < data.length; i++) {
    //    totalAge += data[i].age;
    //}
    return Math.round(totalAge / counter )
}

function calcAvgAge2(people) {
    return people
        .map((person) => person.age)
        .reduce((acc, ce) => acc + ce) / people.length
}

const calcAvgAge3 = (people) => people
    .map((person) => person.age)
    .reduce((acc, ce) => acc + ce) / people.length;

const calcAvgAge4 = (people) => people
    .reduce((acc, ce) => acc + ce.age, 0) / people.length;



//czy jest ktos z krakowa

function isAnyFromCrac(people) {
    for (const person of people) {
        if (!(person.city.toLowerCase() === 'krakow' || person.city.toLowerCase() === 'kraków'
            || person.city.toLowerCase() === 'cracow')) {
            return true
        }
    }
    return false;
}

const result = isAnyFromCrac(data)
console.log(result)