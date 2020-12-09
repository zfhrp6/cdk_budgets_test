import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkBudget from '../lib/cdk_budget-stack';

test('Empty Stack', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkBudget.CdkBudgetStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(matchTemplate({
    Resources: {},
  }, MatchStyle.EXACT));
});
