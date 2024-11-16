## Установка
Проект можно развернуть в докере:
```
$ docker-compose build
$ docker-compose up
```
Также можно развернуть на пк:
```
$ npm install
$ npx prisma generate

// в dev среде
$ npx prisma migrate dev

// при проде 
$ npx prisma migrate deploy

$ npm run dev
// ИЛИ
$ npm run prod
```

## Использование
Для создания 1.000.000-1.500.000 пользователей необходимо ввести в консоль:
```
$ npm run-script seed:users
```

## Роуты
POST /api/users/issue/