import { useState } from "react";

const Form = () => {
	const [city, setCity] = useState<string>("");

	const getWeather = (e: any) => {
		e.preventDefault();
		fetch(
			"https://api.weatherapi.com/v1/current.json?key=4a5058a46c0b439689911920211008&q=London&aqi=no"
		)
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<form>
			<input
				type="text"
				name="city"
				placeholder="都市名"
				onChange={(e) => setCity(e.target.value)}
			/>
			<button type="submit" onClick={getWeather}>
				Get Weather
			</button>
		</form>
	);
};

export default Form;
