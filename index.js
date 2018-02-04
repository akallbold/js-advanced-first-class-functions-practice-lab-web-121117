// Code your solution in this file!
function logDriverNames(array) {
  array.forEach(function(element) {
    console.log(`${element.name}`);
  });
}

function logDriversByHometown(array, location) {
  let relevantDrivers = array.filter(function(element) {
    return element.hometown == location;
  });
  logDriverNames(relevantDrivers);
}

function driversByRevenue(array) {
  let newArray = [...array];
  newArray.sort(function(a, b) {
    return a.revenue - b.revenue;
  });
  return newArray;
}

function driversByName(array) {
  let newArray = [...array];
  newArray.sort(function(a, b) {
    return a.name.localeCompare(b.name);
  });
  return newArray;
}

function totalRevenue(array) {
  return array.reduce(function(sum, element) {
    return sum + element.revenue;
  }, 0);
}

function averageRevenue(array) {
  return totalRevenue(array) / array.length;
}
