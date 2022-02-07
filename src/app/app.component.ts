import { Component } from "@angular/core";
import { Animal } from "./models/Animal";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  animationSpeed: number = 1;

  numberFed: number = 0;
  animals: Animal[] = [
    new Animal("Joel", "Penguin", 35, false, false),
    new Animal("Susanne", "Cat", 13, true, false),
    new Animal("Jessica", "Pelican", 15, false, false),
    new Animal("Louise", "Zebra", 223, true, false),
    new Animal("Lisa", "Elephant", 1034, true, false),
    new Animal("Fanny", "Leopard", 54, true, false),
    new Animal("Sebastian", "Dog", 34, true, false),
    new Animal("Emilie", "Puma", 63, true, false),
    new Animal("Janna", "Eagle", 44, false, false),
  ];

  inputName: string = "";
  inputType: string = "";
  inputAge: number = 0;
  inputLegs: boolean = false;
  inputHungry: boolean = false;

  isAnimalFed(value: Animal) {
    console.log(typeof value);
    this.animals.find((animal) => {
      if (value.name === animal.name) {
        animal.isFed = true;
        this.numberFed += 1;
      }
    });
  }

  input1(input1: string) {
    this.inputName = input1;
    console.log(input1);
  }

  input2(input4: string) {
    this.inputType = input4;
  }

  input3(input2: string) {
    this.inputAge = Number(input2);
  }

  input4(input4: string) {
    if (input4 == "Yes") {
      this.inputLegs = true;
    } else {
      this.inputLegs = false;
    }
  }

  input5(input3: string) {
    if (input3 == "Yes") {
      this.inputHungry = true;
      console.log("true");
    } else {
      this.inputHungry = false;
      console.log("false");
    }
  }
  handleInput() {
    this.animals.push(
      new Animal(
        this.inputName,
        this.inputType,
        this.inputAge,
        this.inputLegs,
        this.inputHungry
      )
    );
  }
}
