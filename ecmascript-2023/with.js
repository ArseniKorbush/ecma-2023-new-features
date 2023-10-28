const names = ['SENYA', 'Alex', 'John', 'Harry', 'Poter']
const newNames = name.with(-1, 'Steve')

console.log(names)
console.log(newNames)

const autoBrends = {
    0: 'Sedan',
    1: 'Audi',
    2: 'Merc',
    length: 3,
}

console.log(Array.prototype.with.call(autoBrends, -1, "4WD"))
