const baseData = require('eliecanyouhearme2')

const data = Object.assign(baseData, {
  0 : 'P',
  5 : ' ',
  8 : 'y',
  13 : '.',
})

const run = () => {
  const letters = []
  Object.keys(data).map(key => {
    letters[key] = data[key]
  })
  console.log(letters.join(''))
}

run()
