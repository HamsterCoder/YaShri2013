##Repository Purpose:
    
This repository contains anwsers to challenges for Yandex Interface Development School 2013 application.
    
Challenge comments will be in Russian.

##Challenge comments:

Общий комментарий - задания были выполнены в некомфортно короткие сроки, так уж получилось. Примерно 2 дня на все про все.  Меня ничего не оправдывает. Присылаю на суд как есть.

###Challenge 13: Find Factorions

Решение неплохо отрабатывает в консоли хрома, но довольно медленно отрабатывает в фаербаге.

###Challenge 14: Spaceships

Немного поставило в тупик задание, мне было неясно, стоит ли изучить интерфейс и добавить недостающие методы или реализовать интерфейс, чаще всего интерфейсы не должны иметь реализации - ну это в тех языках, где они формально есть.

Сделала и то и другое.

###Challenge 15: Application form
    
Опять же, запуталась в формулировке задания. Необходимо сверстать ровно форму, как я вижу на странице анкеты, либо форму с тем же содержимым, но на мое усмотрение по дизайну. Решила верстать на мое усмотрение, но оставила простой вид, добавила элементов интерактивности:

*  кнопки свернуть/развернуть для больших по формулировке вопросов
*  полоску индикатора заполненности и плавающую панель с эти индикатором
*  сообщение об ошибке в случае непрохождения валидации и т.д
*  всплывающая подсказка по заполнению полей формы

Попытка сверстать по Бэму провалилась. Считать похожий синтаксис совпадением.

Для нормалайза и красивости кнопочек и форм была взята библиотека от !Yahoo Pure.css
Для иконок взят иконочный шрифт AwesomeFont
Для написания css использовался - Sass
Для минимизации JS - Uglify
Использовалась библиотека JQuery для ускорения разработки интерактивности.

Файлы css и js выложены отдельно, нет подходящей тулзы, чтобы их соединять.

Допольнительные задание не выполнены.


