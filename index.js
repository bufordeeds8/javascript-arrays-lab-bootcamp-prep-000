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
  var moreKittens = [...kittens, name]
  return moreKittens
}

function prependKitten(name) {
  var moreKittens = [name, ...kittens]
  return moreKittens
}

function removeLastKitten() {
  var moreKittens = kittens.slice(0,kittens.length - 1)
  return moreKittens
}

function removeFirstKitten() {
  var moreKittens = kittens.slice(1)
  return moreKittens
}
