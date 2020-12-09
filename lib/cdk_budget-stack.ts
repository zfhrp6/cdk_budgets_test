/* eslint-disable import/prefer-default-export */
/* eslint-disable no-new */
import * as cdk from '@aws-cdk/core';
import * as budgets from '@aws-cdk/aws-budgets';
import { TimeUnit, BudgetType } from './types/cdk';

export class CdkBudgetStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new budgets.CfnBudget(this, 'test-budget', {
      budget: {
        budgetType: BudgetType.COST,
        timeUnit: TimeUnit.MONTHLY,
        budgetLimit: {
          amount: 10,
          unit: 'USD',
        },
        costFilters: {
          TagKeyValue: [
            // user defined tag setting is placed in the format `user:<key>$<value>`
            // guess from https://github.com/hashicorp/terraform-provider-aws/issues/5890
            'user:userdefinedTagKey$tagValue',
          ],
        },
      },
    });
  }
}
