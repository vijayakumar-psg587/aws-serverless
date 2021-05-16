FROM node:15-alpine3.13 as initial-build

# RUN apk update && apk add --upgrade curl \
#     && rm -rf /var/cache/apk/*

RUN mkdir serverless-app

WORKDIR /serverless-app


COPY /target/package*.json ./

COPY /target/ ./
# COPY /target/dist/ ./dist/

# COPY /target/main.js .
# COPY . .
RUN chmod 755 -R ./
RUN pwd && ls -la 

RUN npm cache clear --force && npm i
RUN NODE_ENV=dev && npm run build:webpack:dev
RUN pwd && ls -la
EXPOSE 3002
ENTRYPOINT [ "node", "dist/main.js" ]
