import React from 'react'
import './styles.css'

// отображать карточку на которой будет отображена вся информация обьекта 
// если менять обьект в коде информация на карточке тоже меняется

const person = {
	name: "John",
	surname: "Johnson",
	age: 12,
	hobbies: [
		'Paint',
		'Climbing',
		'Shooting handgun'
	],
	isToddler: false
}

export default function Card() {
	return (
		<div>Card</div>
	)
}
