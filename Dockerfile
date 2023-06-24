# Используем официальный образ Node.js как базовый
FROM node:14

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы из текущей директории в рабочую директорию контейнера
COPY . .

# Собираем приложение
RUN npm run build

# Используем образ Nginx для раздачи собранного приложения
FROM nginx:stable-alpine

# Копируем собранное приложение в Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
