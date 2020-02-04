var express = require('express');
const bodyParser = require('body-parser');
let jwt = require('jsonwebtoken');
let config = require('./src/config/config');
let middleware = require('./src/middleware/middleware');

class HandlerGenerator {
    login (request, response) {
        let username = request.body.username;
        let password = request.body.password;
        let mockedUsername = 'admin';
        let mockedPassword = 'password';
        if (username && password) {
            if (username === mockedUsername && password === mockedPassword) {
                let token = jwt.sign({username: username},
                    config.secret,
                    {expiresIn: '24h'}
                );
                response.json({
                    success: true,
                    message: 'Авторизація успішна!',
                    token: token
                });
            } else {
                response.send(403).json({
                    success: false,
                    message: 'Не коректний пароль чи ім\'я користувача'
                });
            }
        } else {
            response.send(400).json({
                success: false,
                message: 'Хибна авторизація =('
            });
        }
    }
    index (request, response) {

        const io = require("socket.io-client");
        var clientIO = io.connect("http://localhost:15000");

        response.json({
            success: true,
            message: 'Головна сторінка'
        })
    }
}

function main () {
    let app = express();
    var port = process.env.PORT || 15000;
    var server = require('http').createServer(app);

    var io = require("socket.io")(server);

    io.on("connection", (socket) => {
        console.info(`Клієнт приєднався [id=${socket.id}]`);
    
        socket.on("disconnect", () => {
            console.info(`Клієнт від'єднався [id=${socket.id}]`);
        });
    });

    let handlers = new HandlerGenerator();
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.post('/login', handlers.login);
    app.get('/', middleware.checkToken, handlers.index);

    server.listen(port);
    console.log(`Сервер запустився на порті: ` + port)
}

main();