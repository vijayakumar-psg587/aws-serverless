-   **DONE**:

Created a simple serverless deployment with nestjs+fastify using serverless framework

-   **TO BE DONE**
    -   Find out how AWS Secrets engine can be used with serverless framework
    -   Find better ways to pass in .env files
    -   deploy everthing with SAM Templates and SAM CLI
    -   Introduce Cloud Run for GCP deployment with Dockerized containers
    -   Write tekton pipelines/circleci CI/CD pipelines to automate the deployment

**Steps to run:**

-   Run `npm install`
-   Run `npm run start:nodemon:dev` to start the service in local.
-   Now to have a serverless deployment 1. Install `serverless` module globally - npm i -g serverless 2. Run (alias for servless cli command)`sls offline --stage dev` // this makes use of the staging environment
-   Test with the HTTp PROXY API that will be shown as output
-   _IMP_ - Fasitfy doesnt work with serverless-optimze . There is an alternative serverless-layers plugin
-   To make sure that we deploy with dev environment use command `NODE_ENV=dev sls deploy --stage dev`
-   _IMP_ - `-v` can be added for a verbiage output. `SLS_DEBUG=*` can be added to debug

    **Future Capabilities**

    1. Will have ability to be triggered by an SQS event/Kinesis
    2. Will have the ability to write to Kinesis/DynamoDb

**Steps to deploy:**

-   Verify serverless.yaml file
-   You can package the code using `serverless package -p ./<path for package file to be present>`
    Make sure you also have verbose mode enabled `-v` and debug mode **SLS_DEBUG=\***
-   Now u can test the app with `sls offline` (sls is an alias for serverless command)
-   You can deploy the code itself using **sls deploy** command with debug mode enabled and -v verbose command
-   After a successful deployment you will get an output with the endpoint to test

> [!IMPORTANT]
> NOTE: Please go through serverless.yaml file for complete understanding. Now this is not the actual use case one might encounter in a real world, but it is a possibility to deploy a REST API as FaaS.
