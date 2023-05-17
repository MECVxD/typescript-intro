export class Person {
  // public name?: string;
  // private addres?: string;

  constructor(
    public firstName: string,
    public lastName: string,
    private address: string = "No Address"
  ) {}
}

// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, "New York");
//   }
// }

export class Hero {
  // public person: Person;
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public Person: Person
  ) {
    // this.person = new Person(realName);
  }
}

const tony = new Person("Tony", "Stark", "New York");
const ironMan = new Hero("Ironman", 45, "Tony", tony);

console.log(ironMan);
