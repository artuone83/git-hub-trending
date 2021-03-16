# pull official base image
FROM node:13.12.0-alpine
# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install app dependencies
COPY package.json ./
COPY .env ./
COPY package-lock.json ./
RUN npm install --silent
COPY . ./
EXPOSE 5005
# start app
CMD ["npm", "start"]