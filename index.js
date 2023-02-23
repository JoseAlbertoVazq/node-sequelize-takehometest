const express = require('express');

const app = express();
const i18n = require('i18n');
const moment = require("moment");
const logger = require('./config/winston');
const morgan = require('morgan');
const bodyParser = require("body-parser")
const Sequelize = require('sequelize');
// Configuración de Sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const {
    default: helmet
} = require('helmet');

const routes = require('./routes/todos.routes');

app.use(
    morgan(
        ':remote-addr [:date[clf]] ":method :url HTTP/:http-version" RequestID: :res[x-request-id] :status :res[content-length] ":referrer" ":user-agent"', {
            stream: logger.stream,
        }
    )
);
app.use(helmet());
app.use(bodyParser.json());

// Process ping
app.get('/ping', async (req, res) => {
    return res.send({
        status: 'pong',
        language: i18n.getLocale(),
        uptime: process.uptime(),
    });
});

app.use('/', routes);
// Iniciar servidor
sequelize.sync({force: true}).then(() => {
    app.listen(3000, () => {
        console.log('Servidor iniciado en http://localhost:3000');
    });
});

module.exports = app;