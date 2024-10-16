import { Component, EventEmitter, inject, Output } from '@angular/core';
import { InvestmentData } from "../investment-results/investment-result.model";

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentData>();

  investmentData: InvestmentData = {
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  };

  onSubmit() {
    this.calculate.emit(this.investmentData);

    this.investmentData = {
      initialInvestment: 0,
      annualInvestment: 0,
      expectedReturn: 0,
      duration: 0
    };
  }
}
