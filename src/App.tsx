import { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import "./App.css";

function App() {
	// ▼Form.tsxより追記
	const [city, setCity] = useState<string>("");

	const getWeather = (e: any) => {
		e.preventDefault();
		fetch(
			"https://api.weatherapi.com/v1/current.json?key=4a5058a46c0b439689911920211008&q=London&aqi=no"
		)
			.then((res) => res.json())
			.then((data) => console.log(data));
	};
	// ▲Form.tsxより追記

	return (
		<div className="App">
			<h1>Hello react</h1>
			<Title />
			<Form setCity={setCity} getWeather={getWeather} />
			<Results />
		</div>
	);
}

export default App;
