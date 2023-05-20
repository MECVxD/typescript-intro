function classDecorator(constructor: any) {
  return class extends constructor {
    newProperty = "New Property";
    hello = "override";
  };
}

@classDecorator
export class SuperClass {
  public myProperty: string = "Abc123";

  public print(): void {
    console.log("Hola Mundo");
  }
}

console.log(SuperClass, "xd");

const myClass = new SuperClass();
console.log(myClass);
