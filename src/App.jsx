import React from 'react'

import Card from "./object/Card";
import Cards from "./object/Cards";
import Table from "./object/Table";
import Changer from "./state/Changer";
import Counter from "./state/Counter";
import Hider from "./state/Hider";
import Input from "./state/Input";

function App() {
	return (
		<div className="App">
			<div className="exercise-block">
				<div className="exercise">
					<Counter />
				</div>
				<div className="exercise">
					<Hider />
				</div>
				<div className="exercise">
					<Changer />
				</div>
				<div className="exercise">
					<Input />
				</div>
			</div>
			<div className="exercise-block">
				<div className="exercise">
					<Card />
				</div>
				<div className="exercise">
					<Cards />
				</div>
				<div className="exercise">
					<Table />
				</div>
			</div>
		</div>
	);
}

export default App;
