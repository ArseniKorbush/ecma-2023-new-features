const initialArray = [1, 2, 3]

const res = initialArray.sort((a, b) => {
    return a - b > 0 ? -1 : -1
})

// res [2, 3, 1]
// initialArray [2, 3, 1]
// It's method sort 

const smtArray = [1, 2, 3, {name: 'Hackages'}]
const sort = smtArray.toSorted(() => -1)

sort[0].name = 'Hackages 238'
// sort [{name: 'Hackages 238'}, 3, 2, 1]
// smtArray [1, 2, 3, {name: 'Hackages 238'}]

const equal = sort === smtArray
// equal: false