const arr = [1, 3, 2]

const res1 = arr.sort(() => -1)
// res1: [2, 3, 1]
// arr[2, 3, 1]

const res2 = arr.toSorted(() => -1)
// res2: [3, 2, 1]
// arr[1, 2, 3]

const initialArray = [1, 2, 3, {name: 'Hackages'}]

const result = initialArray.toSorted(() => -1)

res[0].name = 'Hackages 238'
// [{name: 'Hackages 238'}, 3, 2, 1]
// [1, 2, 3, {name: 'Hackages 238'}]

const equal = result = initialArray




const initialArrays = [1, 2, 3]

const res = initialArrays.sort((a, b) => {
    return a - b > 0 ? -1 : -1
})

// res [2, 3, 1]
// initialArrays [2, 3, 1]
// It's method sort 
