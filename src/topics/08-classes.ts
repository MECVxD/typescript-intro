export class Person {
  public name?: string;
  public addres?: string;

  constructor() {
    this.name = "Mauricio";
    this.addres = "New York";
  }
}

const ironMan = new Person();

console.log(ironMan);
