//constructor taking 3 parameters name, job, and age
class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    //methods to console log messages
    exercise() {
        console.log("Running is needed to survive in a zombie apocalypse, so run.");
    }
    fetchJob() {
        console.log(`${this.name} is a ${this.job}.`);
    }
}

// creates a new class inheriting class Person properties and adds new properties
class Programmer extends Person {
    constructor(name, job, age, languages = []) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true;
    }

    //methods with busy property
    completeTask() {
        this.busy = false;
    }
    acceptNewTask() {
        this.busy = true;
    }

    //method to accept or decline tasks
    offerNewTask() {
        if (this.busy) {
            console.log(`${this.name} can't and won't accept any new tasks right now.`);
        } else {
            console.log(`${this.name} is not busy and would love to take on a new responsibility.`);
        }
    }

    //add new languages
    learnLanguage(newLangs) {
        this.languages.push(newLangs);
    }

    //list out the languages
    listLanguage() {
        console.log(`${this.name} knows ${this.languages.join(", ")}`);
    }
}

const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "Janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31, [("HTML", "CSS", "JS", "R")]);

c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguage());
console.log(c2.listLanguage());
console.log(c3.listLanguage());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob();
