import React from 'react'
import './styles.css'

// то же что и с карточками но отображать теперь в таблице
// если в обьекте нет ключа отображать поле пустым

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
		isToddler: true,
		hasParent: true,
	},
]

export default function Table() {
	return (
		<div>Table</div>
	)
}
