# Неткоин - сайт-биржа для крипто-стартапа

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" alt="JavaScript">
  <img src="https://img.shields.io/badge/status-completed-2ea44f?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="License">
</div>

<br>

**Неткоин** - учебное веб-приложение для управления внутренней валютой крипто-стартапа.  
Пользователь может зарегистрироваться, войти в личный кабинет, посмотреть баланс, пополнить счёт, конвертировать валюту, перевести средства другому пользователю и управлять списком избранных получателей.

Проект выполнен как дипломная работа по курсу **«Основы JavaScript»**. Главная задача - связать готовый интерфейс с серверным API: отправлять данные пользователя на сервер и отображать полученную информацию в браузере.

<br>

<div align='center'>
<img width='900' src='assets/preview.gif'>
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

**Основная работа:**

- **JavaScript** — клиентская логика приложения.

**Используется в проекте:**

- **HTML5** — готовая разметка страниц;
- **CSS3** — готовые стили интерфейса;
- **Semantic UI** — UI-компоненты;
- **Node.js** и **Express** — локальный сервер и API;
- **lowdb** — локальная база данных.

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

В рамках дипломной работы я реализовал клиентскую логику, которая связывает готовый интерфейс с серверным API.

- подключил авторизацию и регистрацию пользователя;
- реализовал выход из личного кабинета;
- настроил получение и отображение данных текущего пользователя;
- подключил обновление курсов валют;
- реализовал пополнение баланса;
- реализовал конвертацию валют;
- реализовал перевод средств другому пользователю;
- подключил добавление и удаление пользователей из избранного;
- настроил вывод сообщений об успешных действиях и ошибках;
- синхронизировал список избранных пользователей со списком получателей для перевода.

<br>

## Структура проекта

```mermaid
flowchart TD
    classDef page fill:#e3f2fd,stroke:#1e88e5,color:#0d47a1
    classDef mycode fill:#fff8e1,stroke:#f9a825,color:#5d4037
    classDef ready fill:#f3e5f5,stroke:#8e24aa,color:#4a148c
    classDef server fill:#e8f5e9,stroke:#43a047,color:#1b5e20
    classDef data fill:#eceff1,stroke:#607d8b,color:#263238

    root["bjs-diplom"]

    root --> public["public/"]
    root --> routes["routes/"]
    root --> index["index.js"]
    root --> db["db.json"]

    public --> pages["HTML-страницы"]
    public --> scripts["JS-логика страниц"]
    public --> api["api/"]
    public --> styles["css/ и semantic/"]

    pages --> loginHtml["login.html<br>страница входа"]
    pages --> homeHtml["home.html<br>личный кабинет"]

    scripts --> loginJs["loginPage.js<br>логика входа и регистрации"]
    scripts --> homeJs["homePage.js<br>логика личного кабинета"]

    api --> apiConnector["ApiConnector.js<br>запросы к API"]
    api --> uiClasses["UI-классы<br>UserForm / MoneyManager / ProfileWidget<br>FavoritesWidget / RatesBoard / LogoutButton"]

    routes --> userRoute["user.js<br>пользователь"]
    routes --> moneyRoute["money.js<br>баланс и переводы"]
    routes --> favoritesRoute["favorites.js<br>избранное"]
    routes --> stocksRoute["stocks.js<br>курсы валют"]

    index --> routes
    routes --> db

    loginHtml --> loginJs
    homeHtml --> homeJs

    loginJs --> apiConnector
    homeJs --> apiConnector
    loginJs --> uiClasses
    homeJs --> uiClasses

    apiConnector --> routes

    class loginHtml,homeHtml,page page
    class loginJs,homeJs mycode
    class apiConnector,uiClasses,styles ready
    class routes,index,userRoute,moneyRoute,favoritesRoute,stocksRoute server
    class db data
```

<br>

## Интерфейс

### Страница входа

<div align='center'>
  <img width='700' src='assets/login-page.jpg'>
</div>

<br>

### Личный кабинет

<div align='center'>
  <img width='700' src='assets/home-page.jpg'>
</div>

<br>

### Операции с балансом

<div align='center'>
  <img width='350' src='assets/money-actions.gif'>
</div>

<br>

### Избранные пользователи

<div align='center'>
  <img width='700' src='assets/favorites.gif'>
</div>

<br>

## 📄 Лицензия

Проект распространяется под лицензией MIT.  
Подробнее см. файл [LICENSE](LICENSE).

<br>

## Автор

<div align="center">
  <p>
    <strong>Дмитрий Потыкалов</strong><br>
    Frontend-разработчик
  </p>

  <a href="https://github.com/potykalov">
    <img src="https://img.shields.io/badge/GitHub-профиль-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  </a>
  <a href="mailto:dmitriy.potykalov@gmail.com">
    <img src="https://img.shields.io/badge/Gmail-написать-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail">
  </a>
  <a href="https://t.me/dmitriy_potykalov">
    <img src="https://img.shields.io/badge/Telegram-написать-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram">
  </a>
  <a href="https://www.linkedin.com/in/potykalov">
    <img src="https://img.shields.io/badge/LinkedIn-профиль-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn">
  </a>
</div>
