# User-JWT-Autorization-CMD
JWT on CMD (Bash)

1) Встановіть необхідні компоненти `npm i -d`

2) Запустіть сервер `node server.js`

3) Перейдіть за [цим посиланням](http://localhost:15000) або введіть у браузері `localhost:15000`

4) Запустіть CMD(не PowerShell) та введіть наступні команди:

   1) `curl -X GET http://localhost:15000`    
   2) `curl -X POST http://localhost:15000/login/ -d "password=password&username=admin"`
   3) `curl -H "Authorization: inVerita ОтриманийТокен" http://localhost:15000`

5) Насолоджуйтесь 🤠

![JWT/CMD](https://github.com/IRONKAGE/User-JWT-Autorization-CMD/blob/master/screenshots/%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%BD%D0%B8%D0%B9%20%D1%80%D1%8F%D0%B4%D0%BE%D0%BA%20-%20cmd%2004.02.2020%2015_00_48.png)
