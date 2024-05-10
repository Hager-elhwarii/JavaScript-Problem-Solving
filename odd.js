const myArr = [8,3,7,2,14,6,17,4]

const oddNumbers = myArr.filter(e => {
  return  e % 2 !== 0
})
console.log({oddNumbers});