-   **DONE**:

Created a simple serverless deployment with nestjs+fastify using serverless framework

**Steps to run:** 1. Run `npm install` 2. Run `npm run start:nodemon:dev` to start the service in local. 3. Now to have a serverless deployment 1. Install `serverless` module globally - npm i -g serverless 2. Run (alias for servless cli command)`sls offline --stage dev` // this makes use of the staging environment 3. Test with the HTTp PROXY API that will be shown as output
_IMP_ - Fasitfy doesnt work with serverless-optimze . There is an alternative serverless-layers plugin 4. To make sure that we deploy with dev environment use command `NODE_ENV=dev sls deploy --stage dev`
_IMP_ - `-v` can be added for a verbiage output. `SLS_DEBUG=*` can be added to debug

    **Future Capabilities**
    1. Will have ability to be triggered by an SQS event/Kinesis
    2. Will have the ability to write to Kinesis/DynamoDb

-   **TO BE DONE**
    -   Find out how AWS Secrets engine can be used with serverless framework
    -   Find better ways to pass in .env files
    -   deploy everthing with SAM Templates and SAM CLI
    -   Introduce Cloud Run for GCP deployment with Dockerized containers
    -   Write tekton pipelines/circleci CI/CD pipelines to automate the deployment
