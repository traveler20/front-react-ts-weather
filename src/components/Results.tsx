type ResultsPropsType = {
	results: {
		country: string;
		cityName: string;
		temperature: string;
		conditionText: string;
		icon: string;
	};
};

const Results = ({ results }: ResultsPropsType) => {
	const { cityName, country, temperature, conditionText, icon } = results;

	return (
		<>
			{cityName && <div>{cityName}</div>}
			{country && <div>{country}</div>}
			{temperature && (
				<div>
					{temperature}
					<span>℃</span>
				</div>
			)}
			{conditionText && (
				<div>
					<img src={icon} alt="icon" />
					<span>{conditionText}</span>
				</div>
			)}
		</>
	);
};

export default Results;
