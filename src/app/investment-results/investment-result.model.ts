export interface InvestmentData {
  initialInvestment: number,
  annualInvestment: number,
  expectedReturn: number,
  duration: number
}

export interface InvestmentResult {
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number
}
