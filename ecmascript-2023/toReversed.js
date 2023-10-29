const initialArray = [1, 2, 3, {name: 'hackages'}]

const res = initialArray.toReversed()

res[0].name = 'hackages 2'

const r = res === initialArray
// r: false
// res: [{name: 'hackages' 2}, 3, 2, 1]
// initialArray: [1, 2, 3 {name: 'hackages 2'}]