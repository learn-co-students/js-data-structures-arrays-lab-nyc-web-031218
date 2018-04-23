// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]


function destructivelyAppendDriver(name) {
    drivers.push(name)
}
function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}
function destructivelyRemoveFirstDriver(name){
    drivers.shift(name)
};

function destructivelyRemoveLastDriver(name){
    drivers.pop(name)
};

function appendDriver(name){
  const copyOfDrivers = drivers.slice();
  copyOfDrivers.push(name)
  return copyOfDrivers
};

function prependDriver(name){
  const copyOfDrivers = drivers.slice();
  copyOfDrivers.unshift(name)
  return copyOfDrivers
};

function removeLastDriver(name){
  const copyOfDrivers = drivers.slice();
  copyOfDrivers.pop(name)
  return copyOfDrivers
};

function removeFirstDriver(name){
  const copyOfDrivers = drivers.slice();
  copyOfDrivers.shift(name)
  return copyOfDrivers
};
