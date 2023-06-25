
# Prueba tecnica



## Tecnologias utilizadas

- PHP 
- Laravel
- MySQL 
- Angular

1. Instala las dependencias del proyecto Laravel usando Composer:

```bash
composer install

```

2. Actualice el archivo .env con las credenciales de su base de datos:

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password

```

3. Ejecute las migraciones de la base de datos y siembre la base de datos:

```bash
cd server
php artisan migrate --seed

```

4. Install the Angular project dependencies:
```bash
cd client
npm install
```

5. Inicie el servidor de desarrollo de Angular:
```bash
ng serve
```

6. En otro terminal, inicie el servidor de desarrollo de Laravel:
```bash
php artisan serve
```

7. Abra su navegador web y acceda a la aplicación en http://
```bash
localhost:4200
```
