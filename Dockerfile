FROM node:8

# Creating app directory in container
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8083
CMD [ "npm", "start" ]