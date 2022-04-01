import path from 'path';
import express from 'express';
import debug from 'debug';

const app = express();

// Протоколы
const log = debug('app:log');

// Настройки
const port = process.env.PORT || 3000;

// Prod папка с Angular
app.use(express.static(path.resolve(__dirname, '../../client/dist/portfolio')));

app.listen(port, () => {
    log(`Сервер запущен на порту: ${port}.`);
});