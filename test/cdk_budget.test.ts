import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkBudget from '../lib/cdk_budget-stack';

// eslint-disable-next-line no-undef
test('Empty Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkBudget.CdkBudgetStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(matchTemplate({
    Resources: {
      testbudget: {
        Type: 'AWS::Budgets::Budget',
        Properties: {
          Budget: {
            BudgetLimit: {
              Amount: 10,
              Unit: 'USD',
            },
            BudgetType: 'COST',
            CostFilters: {
              TagKeyValue: [
                'user:userdefinedTagKey$tagValue',
              ],
            },
            TimeUnit: 'MONTHLY',
          },
        },
      },
    },

  }, MatchStyle.EXACT));
});
