FROM node:latest

RUN apt-get -y update && apt-get -y upgrade

RUN apt-get -y install npm

RUN npm i -g npm

# RUN rm -rf ./app/*

RUN mkdir -p ./dist

WORKDIR ./app

ADD package.json ./

RUN npm install

ADD ./ ./

EXPOSE 8080

CMD ["npm", "run", "serve"]
#  CMD ["npm", "run", "build"]
