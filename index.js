var kittens = ["Milo", "Otis", "Garfield"]
// Add your functions and code here

function destructivelyAppendKitten() {
  kittens.push('Ralph')
}

function destructivelyPrependKitten() {
  kittens.unshift('Bob')
}

function destructivelyRemoveLastKitten() {
  kittens.pop('Garfield')
}

function destructivelyRemoveFirstKitten() {
  kittens.shift('Milo')
}

function appendKitten(name) {
  var moreKittens = kittens.push('Broom')
  return moreKittens
}
