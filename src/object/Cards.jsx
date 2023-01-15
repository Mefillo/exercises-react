import React from 'react'
import './styles.css'

// то же что и для одной карты но теперь это список обектов. 
// Если добавить или убрать из списка обьект он исчезнет со страницы
const people = [
	{
		name: "John",
		surname: "Johnson",
		age: 12,
		hobbies: [
			'Paint',
			'Climbing',
			'Shooting handgun'
		],
		isToddler: false
	},
	{
		name: "Misha",
		surname: "Stevenson",
		age: 43,
		hobbies: [
			'Jogging',
		],
		isToddler: false
	},
	{
		name: "Sonia",
		surname: "Johnson",
		age: 2,
		hobbies: [
			'Drooling',
			'Napping'
		],
		isToddler: true
	},
]
export default function Cards() {
	return (
		<div>Cards</div>
	)
}
