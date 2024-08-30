# Use Node.js 18 base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Install nodemon globally
RUN npm install -g nodemon

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Start application with nodemon
CMD ["nodemon", "index.js"]