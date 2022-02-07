export class Animal {
  name: string;
  type: string;
  age: number;
  fourLegs: boolean;
  isFed: boolean;
  constructor(
    name: string,
    type: string,
    age: number,
    fourLegs: boolean,
    isFed: boolean
  ) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.fourLegs = fourLegs;
    this.isFed = false;
  }
}
