# Use Node.js 18 base image
FROM node:18

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Command to start the application
CMD ["node", "index.js"]