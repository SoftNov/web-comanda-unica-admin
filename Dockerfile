# Etapa 1: build da aplicação Angular
FROM node:20-alpine AS build
WORKDIR /app

ARG CONFIGURATION=production

COPY package*.json ./
RUN npm install

COPY . .
RUN npx ng build --configuration=$CONFIGURATION

# Etapa 2: servir com Nginx
FROM nginx:alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/web-comanda-unica-admin/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
