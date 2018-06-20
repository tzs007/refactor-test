/* REFACTORED CODE */
const activeModules = [
  { name: 'module 1' },
  { name: 'module 2' },
  { name: 'module 11' },
  { name: 'module 3' },
  { name: 'module 10' },
];

// regexp will looking for number in module names
const customModuleRe = new RegExp('\\d+');

// lets refactor good ol' function with fat arrow
const getCustomModuleNumber = () => {
  // define an empty array to hold module numbers
  let moduleNumbers = [];
  // iterate activeModules array
  activeModules.forEach(activeModule => {
    // get all module names by regexp
    let current = customModuleRe.exec(activeModule.name);
    // get module's number from parsed module's name... it's string because of the regexp match array
    let moduleNumber = parseInt(current[0]);
    // check if exists and it's a real number, then push into the number holder
    if (current && !isNaN(moduleNumber)) {
      moduleNumbers.push(moduleNumber);
    }
  });

  // spreading module numbers for check which is the largest, and return
  return Math.max(...moduleNumbers);
};

console.log('expected number: ', getCustomModuleNumber());

module.exports = getCustomModuleNumber;

/**
 * OLD CODE
 */

/*
 var activeModules = [
  { name: 'module 1' },
  { name: 'module 2' },
  { name: 'module 11' },
  { name: 'module 3' },
  { name: 'module 10' },
];
var customModuleRe = new RegExp('\\d+');
var getCustomModuleNumber = function() {
  var max = 0;
  for (var i = 0; i < activeModules.length; i++) {
    var current = customModuleRe.exec(activeModules[i].name);
    if (current) {
      var num = parseInt(current[0]);
      if (!isNaN(num) && num > max) {
        max = num;
      }
    }
  }
  return max;
}; */
