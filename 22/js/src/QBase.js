'use strict'

let QBase= {
	title: 'Какой то тест',
	question: [
	{
		q:'Какая версия HTML актуальна сейчас?',
		answer:[
			{text:'HTML3', check: false},
			{text:'HTML5', check: true},
			{text:'HTML7', check: false}
		]
	},
	{
		q:'Какая версия CSS актуальна сейчас?',
		answer:[
			{text:'CSS3', check: true},
			{text:'CSS2', check:false},
			{text:'CSS1', check: false}
			]
	}
	]
};

localStorage.setItem('QBase',JSON.stringify(QBase));

let QBase = localStorage.getItem('QBase');
QBase = JSON.parse(QBase);

