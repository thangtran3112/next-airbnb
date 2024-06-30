#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { AppRouterStack } from "./app-router-stack";
import { OverridesStack } from "./overrides-stack";

const app = new cdk.App();
new AppRouterStack(app, "app-airbnb"); // ar = app router
