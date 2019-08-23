var kittens = ["Milo", "Otis", "Garfield"]
// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var moreKittens = []
  moreKittens.concat(kittens)
  moreKittens.push(name)
  return moreKittens
}
