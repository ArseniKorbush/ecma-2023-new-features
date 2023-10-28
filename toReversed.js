const smtArray = [1, 2, 3, {name: 'Hackages'}]
const res = arr.toReversed()

res[0].name = 'hackages 2'

const resualt = res = arr

// resualt: false
// res [{name: 'Hackages'}, 3, 2, 1]
// arr [1, 2, 3, {name: 'Hackages'}]
