# Step 1: Build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Run the built app
FROM node:22-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["node", "build"]
