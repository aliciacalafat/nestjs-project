#Define from what image we want to build from.
FROM node:12

#Create app directory to hold app. This is in our image.
WORKDIR /alicia/src/app

#The image choosed comes with Node.js and NPM instaled, 
#so we need to install the app dependencies using npm binary.
#A wildcard is used to ensure both package.json and package-lock.json are
#copied where available (npm@5+).
COPY package*.json ./
#Note: Rather than copying the entire workdir, we are copying the .json file,
#this will allow us to take advantage of catched Docker layers.
#If your package.json file changes, then the modules will be rebuilt.

RUN npm install 
#Also if you are running your code for production:
#RUN npm install --only=production

#To bundle up the app source code inside the Docker image:
COPY . .

#To have the app mapped by the docker daemon:
RUN npm run build

EXPOSE 8080

#To run the app with cmd:
CMD ["node", "dist/main"]
