#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkBudgetStack } from '../lib/cdk_budget-stack';

const app = new cdk.App();
new CdkBudgetStack(app, 'CdkBudgetStack');
