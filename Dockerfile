FROM node:latest

RUN apt-get -y update && apt-get -y upgrade

RUN apt-get -y install npm

RUN npm i -g npm

RUN npm -v

# RUN npm cache verify

# WORKDIR /app

ADD package.json ./

# RUN mkdir -p ./dist

RUN npm install

ADD ./ ./

EXPOSE 8080

CMD ["npm", "run", "serve"]
