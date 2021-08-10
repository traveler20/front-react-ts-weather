import React, { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import Loading from "./components/Loading";
import "./App.css";

type ResultsStateType = {
	country: string;
	cityName: string;
	temperature: string;
	conditionText: string;
	icon: string;
};

function App() {
	// ▼Loading.tsx
	const [loading, setLoading] = useState<boolean>(false);
	// ▲Loading.tsx

	// ▼Form.tsxより追記
	const [city, setCity] = useState<string>("");
	const [results, setResults] = useState<ResultsStateType>({
		country: "",
		cityName: "",
		temperature: "",
		conditionText: "",
		icon: "",
	});

	const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		fetch(
			`https://api.weatherapi.com/v1/current.json?key=4a5058a46c0b439689911920211008&q=${city}&aqi=no`
		)
			.then((res) => res.json())
			.then((data) => {
				setResults({
					country: data.location.country,
					cityName: data.location.name,
					temperature: data.current.temp_c,
					conditionText: data.current.condition.text,
					icon: data.current.condition.icon,
				});
				setCity("");
				setLoading(false);
			})
			.catch((err) =>
				alert(
					"エラーが発生しました。ページをリロードしてもう一度トライしてください。"
				)
			);
	};
	// ▲Form.tsxより追記

	return (
		<div className="wrapper">
			<div className="container">
				<Title />
				<Form setCity={setCity} getWeather={getWeather} city={city} />
				{loading ? <Loading /> : <Results results={results} />}
			</div>
		</div>
	);
}

export default App;
