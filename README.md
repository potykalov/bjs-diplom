# 🪙 Неткоин - сайт-биржа для крипто-стартапа

<div align="center">
  <a href="https://netcoin-exchange.onrender.com"><img src="https://img.shields.io/badge/▶_Открыть_демо-2ea44f?style=for-the-badge" alt="Открыть демо"></a>
</div>

<br>

<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000" alt="JavaScript">
  <img src="https://img.shields.io/badge/status-completed-2ea44f?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="License">
</div>

<br>

> Демо может открываться чуть дольше при первом запуске — приложение размещено на бесплатном тарифе Render.

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

## Локальный запуск

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
    classDef rootNode fill:#f8fafc,stroke:#334155,color:#0f172a
    classDef page fill:#bfdbfe,stroke:#1d4ed8,color:#1e3a8a
    classDef mycode fill:#fef3c7,stroke:#f59e0b,color:#78350f
    classDef ready fill:#ffe4e6,stroke:#e11d48,color:#881337
    classDef server fill:#dcfce7,stroke:#16a34a,color:#14532d
    classDef data fill:#e5e7eb,stroke:#374151,color:#111827

    root["bjs-diplom"]:::rootNode

    root --> public["public/"]:::rootNode
    root --> routes["routes/"]:::server
    root --> index["index.js"]:::server
    root --> db["db.json"]:::data

    public --> pages["HTML-страницы"]:::page
    public --> scripts["JS-логика страниц"]:::mycode
    public --> api["api/"]:::ready
    public --> styles["css/ и semantic/"]:::ready

    pages --> loginHtml["login.html<br>страница входа"]:::page
    pages --> homeHtml["home.html<br>личный кабинет"]:::page

    scripts --> loginJs["loginPage.js<br>логика входа и регистрации"]:::mycode
    scripts --> homeJs["homePage.js<br>логика личного кабинета"]:::mycode

    api --> apiConnector["ApiConnector.js<br>запросы к API"]:::ready
    api --> uiClasses["UI-классы<br>UserForm / MoneyManager / ProfileWidget<br>FavoritesWidget / RatesBoard / LogoutButton"]:::ready

    routes --> userRoute["user.js<br>пользователь"]:::server
    routes --> moneyRoute["money.js<br>баланс и переводы"]:::server
    routes --> favoritesRoute["favorites.js<br>избранное"]:::server
    routes --> stocksRoute["stocks.js<br>курсы валют"]:::server

    index --> routes
    routes --> db

    loginHtml --> loginJs
    homeHtml --> homeJs

    loginJs --> apiConnector
    homeJs --> apiConnector
    loginJs --> uiClasses
    homeJs --> uiClasses

    apiConnector --> routes

    linkStyle default stroke:#64748b,stroke-width:2px
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

  <a href="https://github.com/potykalov"><img src="https://img.shields.io/badge/GitHub-профиль-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>
  <a href="mailto:dmitriy.potykalov@gmail.com"><img src="https://img.shields.io/badge/Gmail-написать-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail"></a>
  <a href="https://t.me/dmitriy_potykalov"><img src="https://img.shields.io/badge/Telegram-написать-26A5E4?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram"></a>
  <a href="https://www.linkedin.com/in/potykalov"><img src="https://img.shields.io/badge/LinkedIn-профиль-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
</div>
