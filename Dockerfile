FROM node:v24.11.1
WORKDIR /front_app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
CMD [ "npm","run","dev" ]


