import {Component, inject} from '@angular/core';
import {InvestmentResultsService} from "./investment-results/investment-results.service";
import {InvestmentData, InvestmentResult} from "./investment-results/investment-result.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private investmentResultService = inject(InvestmentResultsService);
  calculationResult: InvestmentResult[] = [];

  get isResultsEmpty(): boolean {
    return this.calculationResult.length === 0
  }

  onCalculate(data: InvestmentData) {
    this.calculationResult = this.investmentResultService.calculateInvestmentResults(data);
  }
}
