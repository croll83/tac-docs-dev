# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Docusaurus site
RUN npm run build

# Expose the port Docusaurus runs on
EXPOSE 3000

# Start the site
CMD [ "npx", "docusaurus", "start", "--host", "0.0.0.0" ]
