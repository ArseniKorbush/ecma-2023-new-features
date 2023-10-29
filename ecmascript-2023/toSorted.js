const arr = [1, 3, 2]

const res = arr.sort(() => -1)
// res: [2, 3, 1]
// arr[2, 3, 1]

const res2 = arr.toSorted(() => -1)
// res: [3, 2, 1]
// arr[1, 2, 3]

const initialArray = [1, 2, 3, {name: 'Hackages'}]

const result =initialArray.toSorted(() => -1)

res[0].name = 'Hackages 238'
// [{name: 'Hackages 238'}, 3, 2, 1]
// [1, 2, 3, {name: 'Hackages 238'}]

const equal = result = initialArray
// equal: false