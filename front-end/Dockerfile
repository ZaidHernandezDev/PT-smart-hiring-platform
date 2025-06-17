ARG NODE_ENV=development

FROM node:20 as development
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]

FROM node:20 as builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine as production
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080