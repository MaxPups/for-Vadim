const http = require('http'); // получаем модуль http для серверной работы

const hostname = 'localhost'; // localhost
const port = 3000; // port 

const text = `<div class='weather'>
</div>
<div class='city'></div>
<h1 style="color:red;">Vadim</h1>
<div behavior="alternate" direction="left" class='city'>
</div>
<script src='./script.js'></script>
<style>
.city {
    width: 100%;
    background: green;
    padding: 20px 10px;
    height: auto;
    color: blanchedalmond;
}</style>
`;
const server = http.createServer((req, res) => { // создаем серевер через метод createServer через  object http
    res.statusCode = 200; // должны убедиться что ответ положительный
    res.setHeader('Content-Type', 'text/html'); // описываем наш документ 
    res.end(text); // это то что мы отрисовываем
});


server.listen(port, hostname);
// мы говорим серверу адрес где происходит действие