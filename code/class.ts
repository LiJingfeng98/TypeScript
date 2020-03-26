class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {//默认public greet（）
    return `${this.name}向你问好`;
  }
}

class Student extends Person{
  private major:string;

  constructor(name:string,major:string){
    super(name);
    this.major = major;
  }

  studentGreet(){
    return `${this.major}系的${this.name}向你问好`;
  }
}

// let xiaoming = new Person('小明');
// console.log(xiaoming.greet());
let xiaoming = new Student('小明','哲学');
// console.log(xiaoming.name);
// console.log(xiaoming.major);
console.log(xiaoming.studentGreet());
