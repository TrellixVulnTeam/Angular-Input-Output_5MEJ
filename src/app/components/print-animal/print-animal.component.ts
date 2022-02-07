import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-print-animal',
  templateUrl: './print-animal.component.html',
  styleUrls: ['./print-animal.component.scss'],
})
export class PrintAnimalComponent implements OnInit {
  @Input() animal2: Animal = new Animal('Fred', 'Horse', 324, true, false);
  @Output() fed = new EventEmitter<Animal>();

  animationSpeed: number = 5;

  constructor() {}

  animalIsFed() {
    this.fed.emit(this.animal2);
  }

  ngOnInit(): void {}
}
