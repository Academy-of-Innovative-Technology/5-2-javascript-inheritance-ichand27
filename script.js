/* === EXERCISE 1 CODE ALONG === */

class Pet {
  constructor(name, breed) {
      this.name = name;
      this.breed = breed;
      this.show = function() {
          var text = "<p>Your pet's name is " + this.name + ". The pet's breed is " + this.breed + ".</p>";
          return text;
      };
  }
}


class Dog extends Pet {
  constructor(name, breed) {
   super(name, breed);
    var text = "<p>Your dog's name is" + this.name + ". The dog's breed is" + this.breed + ".</p>";
    return text;
}
}


/* ==== EXERCISE 2 ==== */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  details() {
      let detail = `My name is ${this.name} and I am ${this.age} years old.`;    
    return detail;
    }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  details(){
      return ` ${super.details()} and I'm in ${this.grade}'th grade.`;
    }

}

class Teacher extends Person {
  constructor(name, age, subject){
    super(name, age);
    this.subject = subject;
  }
  
  details(){
    return ` ${super.details()} and I teach ${this.subject}.`;
  }

}

let me = new Student("Isis", "16", "11");
let teacher = new Teacher('Aaron', '58', 'Web Design');

console.log(me.details(), teacher.details());
