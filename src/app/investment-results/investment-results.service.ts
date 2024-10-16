import { Injectable } from '@angular/core';
import { type InvestmentData, type InvestmentResult } from "./investment-result.model";

@Injectable({providedIn: 'root'})
export class InvestmentResultsService {
  calculateInvestmentResults(data: InvestmentData) {
    const annualData: InvestmentResult[] = [];
    let investmentValue = Number(data.initialInvestment);

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + Number(data.annualInvestment);
      const totalInterest =
        investmentValue - Number(data.annualInvestment) * year - Number(data.initialInvestment);

      annualData.push({
        year: year,
        interest: Math.round(interestEarnedInYear),
        valueEndOfYear: Math.round(investmentValue),
        annualInvestment: Number(data.annualInvestment),
        totalInterest: Math.round(totalInterest),
        totalAmountInvested: Number(data.initialInvestment) + Number(data.annualInvestment) * year,
      });
    }

    return annualData;
  }
}
