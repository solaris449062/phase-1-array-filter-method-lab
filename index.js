function findMatching(drivers, inputDriverName) {
    return drivers.filter(driver => driver.toUpperCase() === inputDriverName.toUpperCase());
}

function fuzzyMatch(drivers, fuzzyName) {
    function testMatch(element) {
        return element.startsWith(fuzzyName);
    }
    return drivers.filter(testMatch);
}

function matchName(driver, name) {
    function testMatch(element) {
        return element.name == name
    }
    return driver.filter(testMatch)
}
const driversList = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

// console.log("Bobby".toUpperCase);
// console.log(findMatching(driversList, "Bobby"));
console.log(fuzzyMatch(driversList, "r"))