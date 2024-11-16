FROM node:20
WORKDIR /app
COPY package*.json ./
COPY prisma/schema.prisma ./prisma/schema.prisma
RUN npm install
RUN npx prisma generate
RUN apt-get update && apt-get install -y wait-for-it
COPY . .
EXPOSE 3000
