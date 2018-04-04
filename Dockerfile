FROM node:latest

RUN apt-get -y update && apt-get -y upgrade

RUN apt-get -y install npm

RUN npm i -g npm

ADD package.json ./

RUN npm install

ADD ./ ./

EXPOSE 8080

CMD ["npm", "run", "serve"]
