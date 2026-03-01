# Use official Node.js lightweight image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of your source code
COPY src/ ./src/

# Expose the port your app runs on
EXPOSE 3000

# Start the server
CMD ["node", "src/index.js"]