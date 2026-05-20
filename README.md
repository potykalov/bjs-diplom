<div id="badges" align = "center">
  <a src = "https://github.com/potykalov">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</a>
  <a src = "mailto:dmitriy.potykalov@gmail.com">
    <img src="https://img.shields.io/badge/gmail-red?style=for-the-badge&logo=gmail&logoColor=white" alt="GMail Badge"/>
  </a>
  <a src = "https://t.me/dmitriy_potykalov">
    <img src="https://img.shields.io/badge/telegram-blue?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram Badge"/>
  </a>
  <a src = "https://www.linkedin.com/in/potykalov">
    <img src="https://img.shields.io/badge/linkedin-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>

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

Mermaid-схема

<br>

## Интерфейс

### Страница входа

![Страница входа](docs/screenshots/login-page.png)

### Личный кабинет

![Личный кабинет](docs/screenshots/home-page.png)

### Операции с балансом

![Операции с балансом](docs/screenshots/money-actions.png)

### Избранные пользователи

![Избранные пользователи](docs/screenshots/favorites.png)

<br>

## 📄 Лицензия

Проект распространяется под лицензией MIT.  
Подробнее см. файл [LICENSE](LICENSE).

<br>

## Автор

**Дмитрий Потыкалов**

Frontend-разработчик

<br>

<div id="badges" align = "center">
  <a src = "https://github.com/potykalov">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</a>
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
