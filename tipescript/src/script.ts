/*
Создайте функцию которая возвращает сумму двух чисел, 
принимает она 2 number и возвращает number в виде суммы,
используйте ts для описание типов

Напишите функцию которая принимает в себя 2 параметра, 
первое name типом строки и age типом числа, 
и возвращает Привет меня зовут ... и мне ... 
(опишите типы с использованием ts) 
*/

function sumTwoNums(num1: number, num2: number) {
  return num1 + num2;
}

console.log(sumTwoNums(2, 3));

function greeting(name: string, age: number) {
  return `Привет меня зовут ${name} и мне ${age} лет.`;
}

console.log(greeting("Олег", 25));
