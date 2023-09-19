const express = require('express');
const app = express();
const port = 3000;


function fibonacciThing(numbero) {
    return (numbero < 2) ? numbero : (fibonacciThing(numbero - 1) + fibonacciThing(numbero - 2));
//    if (numbero < 2) { return numbero; }
//    else { return (fibonacciThing(numbero-1) + fibonacciThing(numbero-2)); }
}

let week = ["Что-то", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

let regions = [
    "nope",
    "Адыгея",
    "Башкортостан",
    "Бурятия",
    "Алтай",
    "Дагестан",
    "Ингушетия",
    "Кабардино-Балкария",
    "Калмыкия",
    "Карачаево-Черкесия",
    "Карелия",
    "Коми",
    "Марий Эл",
    "Мордовия",
    "Саха (Якутия)",
    "Северная Осетия - Алания",
    "Татарстан",
    "Тыва",
    "Удмуртия",
    "Хакасия",
    "Нет региона",
    "Чувашия",
    "Алтайский край",
    "Краснодарский край",
    "Красноярский край",
    "Дальневосточный",
    "Ставропольский край",
    "Хабаровский край",
    "Амурская область",
    "Архангельская область",
    "Астраханская область",
    "Белгородская область"
]

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/test', (req, res) => res.send('Тест'));

app.get("/regions/:regionID", (req, res) => res.send("Регион: " + regions[req.params["regionID"]]));

app.get("/uravnenie", (req, res) => {
    let A = req.query.a;
    let B = req.query.b;
    let C = req.query.c;
//    res.send("Ваше уравнение имеет вид: (" + A + "x<sup>2</sup>) + (" + B + "x) + (" + C + ") = 0");
    let D = B*B - 4*A*C;
    if (D < 0)
    {
        res.send("Решений нет");
    }
    else 
    {
        if(D==0)
        {
        let x = -B/2*A; res.send("Ответ: " + x);
        }
        else
        {
            let x1 = (-B + Math.sqrt(D))/2*A;
            let x2 = (-B - Math.sqrt(D))/2*A;
            res.send("Два решения: " + x1 + " и " + x2);
        }
    }
});


app.get("/fibonacci/:fib_number", (req, res) => {
    let fibonucci = fibonacciThing(req.params["fib_number"]);
    res.send("Число: " + fibonucci);
});
//app.get("/fibonacci/:fib_number", (req, res) => res.send(req.params["fib_number"]));


app.get("/weekday", (req, res) => {
    let date1 = new Date(req.query.date);
    res.send("Сегодняшний день недели: " + week[date1.getDay()]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}/`));