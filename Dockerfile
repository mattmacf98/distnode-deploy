FROM node:18.0.0-alpine3.14
WORKDIR /srv
COPY package*.json ./
RUN npm ci --only=production
COPY . .
ENV HOST=0.0.0.0
CMD ["node", "server.js"]
