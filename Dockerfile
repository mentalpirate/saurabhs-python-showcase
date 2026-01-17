from node:latest
workdir /app
copy package*.json ./
run npm install
copy . .
cmd ["npm","run", "dev"]
expose 8080