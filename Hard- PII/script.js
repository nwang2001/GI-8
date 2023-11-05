//creates a function with an object
function patientInfo(name, ssn) {
    let PII = {
        name: name,
        ssn: ssn
    };

  function getName() {
    return PII.name;
  }

  function getSSN() {
    return PII.ssn;
  }

  return {
    getName: getName,
    getSSN: getSSN
  };
}

let patient2 = patientInfo("John", "123-45-6789");

console.log(patient2.name);

console.log(patient2.ssn); 

console.log(patient2.getName());

console.log(patient2.getSSN()); 

let patient3 = patientInfo("Bonnie", "435-34-3555");

console.log(patient3.name);

console.log(patient3.ssn); 

console.log(patient3.getName());

console.log(patient3.getSSN()); 
