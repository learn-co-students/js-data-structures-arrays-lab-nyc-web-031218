// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]


function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  ar = [...drivers, name]
  return ar
}

function prependDriver(name) {
  ar = [name , ...drivers]
  return ar
}

function removeLastDriver() {
  ar = drivers.slice(0, drivers.length - 1)
  return ar
}

function removeFirstDriver() {
  ar = drivers.slice(1)
  return ar
}
