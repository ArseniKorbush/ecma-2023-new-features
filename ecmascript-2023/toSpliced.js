const initialArray = [1, 2, 3, {name: 'SENYA'}]

const result = initialArray.splice(0, 2)
// res [1, 2]
//  initialArray [3, {name: 'SENYA'}]

const secondArray = [1, 2, 3, {name: 'SENYA'}]

const secondresult = secondArray.toSpliced(7)

secondresult[3].name = 'SENYA2'

// secondresult [1, 2, 3, {name: 'SENYA2'}]
// secondArray [1, 2, 3, {name: 'SENYA2'}]
