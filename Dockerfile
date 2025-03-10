# Imagen base oficial de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json antes de instalar dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Exponer el puerto en el que Next.js corre por defecto
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación
CMD ["npm", "run", "start"]