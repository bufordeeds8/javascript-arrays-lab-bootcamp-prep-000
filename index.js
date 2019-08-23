var kittens = ["Milo", "Otis", "Garfield"]
// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
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
