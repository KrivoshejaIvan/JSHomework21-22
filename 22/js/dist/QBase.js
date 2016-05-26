'use strict';

var QBase = {
	title: 'Какой то тест',
	question: [{
		q: 'Что такое JS?',
		answer: [{ text: 'Животное в Африке', check: false }, { text: 'Язык програмирование', check: true }, { text: 'Супергерой', check: false }]
	}, {
		q: 'Как называют преподавателя по IT?',
		answer: [{ text: 'Ментор', check: true }, { text: 'Милорд', check: false }, { text: 'Маэстро', check: false }]
	}]
};

localStorage.setItem('QBase', JSON.stringify(QBase));

var QBase = localStorage.getItem('QBase');
QBase = JSON.parse(QBase);
