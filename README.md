-   **DONE**:

Created a simple serverless deployment with nestjs+fastify using serverless framework
NOTE: This is a sample implementation to test if a HTTP server can be spun inside the serverless. It is not a real worl implementation. Again this might be useful for containerizing serverless

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
