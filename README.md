<div id="badges" align = "center">
  <a src = "mailto:dmitriy.potykalov@gmail.com">
    <img src="https://img.shields.io/badge/gmail-red?style=for-the-badge&logo=gmail&logoColor=white" alt="GMail Badge"/>
  </a>
  <a src = "https://t.me/dmitriy_potykalov">
    <img src="https://img.shields.io/badge/telegram-blue?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram Badge"/>
  </a>
  <a src = "https://www.linkedin.com/in/potykalov">
    <img src="https://img.shields.io/badge/linkedin-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  <br>
  <img alt="GitHub License" src="https://img.shields.io/github/license/potykalov/tic-tac-toe-js">
</div>

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Tests](https://img.shields.io/badge/tests-92%25-success)

# Неткоин - сайт-биржа для крипто-стартапа

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)

**Неткоин** - учебное веб-приложение для управления внутренней валютой крипто-стартапа.  
Пользователь может зарегистрироваться, войти в личный кабинет, посмотреть баланс, пополнить счёт, конвертировать валюту, перевести средства другому пользователю и управлять списком избранных получателей.

Проект выполнен как дипломная работа по курсу **«Основы JavaScript»**. Главная задача - связать готовый интерфейс с серверным API: отправлять данные пользователя на сервер и отображать полученную информацию в браузере.

<br>

<div align='center'>
<img width='500' src='assets/login-page.jpg'>
<img width='500' src='assets/home-page.jpg'>
</div>

<br>

## Статус проекта

✅ Завершён как учебный дипломный проект.

<br>

## Функционал

- регистрация нового пользователя;
- авторизация по логину и паролю;
- выход из личного кабинета;
- получение и отображение профиля пользователя;
- просмотр баланса;
- пополнение счёта;
- конвертация валют;
- перевод средств другому пользователю;
- получение и обновление курсов валют;
- добавление пользователей в избранное;
- удаление пользователей из избранного;
- вывод сообщений об успешных действиях и ошибках.

<br>

## Технологии

- **JavaScript** — клиентская логика приложения.

<br>

## Структура проекта


<br>

## Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/potykalov/bjs-diplom.git
```

2. Перейдите в папку проекта:

```bash
cd bjs-diplom
```

3. Установите зависимости:

```bash
npm install
```

<br>

## Запуск

1. Запустите локальный сервер:

```bash
npm start
```

2. После запуска в терминале должно появиться сообщение:

```bash
Server started at 8000
```

3. Откройте проект в браузере:

```text
http://localhost:8000
```

4. Для остановки сервера нажмите:

```bash
Ctrl + C
```

<br>

## Тестовые пользователи

Для быстрой проверки можно использовать готовые аккаунты:

| Логин | Пароль |
|---|---|
| `oleg@demo.ru` | `demo` |
| `ivan@demo.ru` | `demo` |
| `petr@demo.ru` | `demo` |
| `galina@demo.ru` | `demo` |
| `vladimir@demo.ru` | `demo` |

Также можно зарегистрировать нового пользователя через форму регистрации.

<br>

## Реализация

В проекте реализована клиентская логика для взаимодействия готового интерфейса с серверным API.

- `loginPage.js` отвечает за авторизацию и регистрацию;
- `homePage.js` отвечает за личный кабинет пользователя;
- реализован выход из личного кабинета;
- подключено пополнение баланса;
- подключена конвертация валют;
- подключён перевод средств другому пользователю;
- данные профиля обновляются после успешных операций с балансом;
- курсы валют загружаются с сервера и обновляются автоматически;
- список избранных пользователей синхронизируется со списком получателей для перевода;
- ошибки сервера выводятся через готовые методы интерфейсных классов.

<br>

## Автор

**Дмитрий Потыкалов**

Frontend-разработчик

- **GitHub:** [@potykalov](https://github.com/potykalov)
  
<br>

## 📄 Лицензия

Проект распространяется под лицензией MIT.  
Подробнее см. файл [LICENSE](LICENSE).
