import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkWorkshop from '../lib/cdk-workshop-stack';

test('To have lambda function', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkWorkshop.CdkWorkshopStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource("AWS::Lambda::Function"));
});

test('To have apigateway', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkWorkshop.CdkWorkshopStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource("AWS::ApiGateway::RestApi"));
});
