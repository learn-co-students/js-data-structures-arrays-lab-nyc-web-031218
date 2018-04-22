// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name) {
    drivers.push(name)
}

function destructivelyPrependDriver(name) {
      drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
    drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
    drivers.shift(name)
}

function appendDriver(name) {
  const alldrivers = [...drivers, name];
  return alldrivers;
}

function prependDriver(name) {
  const alldrivers = [name,...drivers];
  return alldrivers;
}

function removeLastDriver(){
   const modifiedDrivers =  drivers.slice(0,2);
    return modifiedDrivers;

}

function removeFirstDriver() {
      const modifiedDrivers = drivers.slice(1);
      return modifiedDrivers;
}
