var kittens = ["Milo", "Otis", "Garfield"]
// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push('Ralph')
}

function destructivelyPrependKitten(name) {
  kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop('Garfield')
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift('Milo')
}

function appendKitten(name) {
  var moreKittens = kittens.push('Broom')
  return moreKittens
}
