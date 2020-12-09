export const BudgetType = {
  COST: 'COST',
  RI_COVERAGE: 'RI_COVERAGE',
  RI_UTILIZATION: 'RI_UTILIZATION',
  SAVINGS_PLANS_COVERAGE: 'SAVINGS_PLANS_COVERAGE',
  SAVINGS_PLANS_UTILIZATION: 'SAVINGS_PLANS_UTILIZATION',
  USAGE: 'USAGE',
} as const;
export type budgetType = typeof BudgetType[keyof typeof BudgetType]

export const TimeUnit = {
  ANNUALLY: 'ANNUALLY', DAILY: 'DAILY', MONTHLY: 'MONTHLY', QUARTERLY: 'QUARTERLY',
} as const;
export type timeUnit = typeof TimeUnit[keyof typeof TimeUnit]
