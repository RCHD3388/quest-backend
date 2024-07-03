# Gunakan Node.js sebagai image dasar
FROM node:16-alpine

# Atur direktori kerja di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json ke direktori kerja
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh kode aplikasi ke dalam container
COPY . .

# Build aplikasi NestJS
RUN npm run build

# Expose port yang akan digunakan oleh aplikasi
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["npm", "run", "start"]
