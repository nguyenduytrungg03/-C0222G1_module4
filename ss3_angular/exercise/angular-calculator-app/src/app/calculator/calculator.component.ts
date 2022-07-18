import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1 = '';

  number2 = '';

  result: number = 0;

  Addition() {
    this.result = parseFloat(this.number1) + parseFloat(this.number2);
  }

  Subtraction() {
    this.result = parseFloat(this.number1) - parseFloat(this.number2);
  }

  Multiplication() {
    this.result = parseFloat(this.number1) * parseFloat(this.number2);
  }

  Division() {
    this.result = parseFloat(this.number1) / parseFloat(this.number2);
  }

  constructor() {
  }

  ngOnInit(): void {
  }


}
