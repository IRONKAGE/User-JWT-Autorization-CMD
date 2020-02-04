# User-JWT-Autorization-CMD
JWT on CMD (Bash)

1) Встановіть необхідні компоненти `npm i -d`

2) Запустіть сервер `node server.js`

3) Перейдіть за [цим посиланням](http://localhost:15000) або введіть у браузері `localhost:15000`

4) Запустіть CMD(не PowerShell) та введіть наступні команди:

   1) - `curl -X GET http://localhost:15000`    
   2) - `curl -X POST http://localhost:15000/login/ -d "password=password&username=admin"`
   3) - `curl -H "Authorization: inVerita ОтриманийТокен" http://localhost:15000`

5) Насолоджуйтесь 🤠
