import { useState, useEffect } from "react";

function CurrencyConverter(props) {

	const [inputAmt, setInputAmt] = useState("");
	const [convertedAmt, setConvertedAmt] = useState("");

	// useEffect(() => {
	// 	fetch("https://v6.exchangerate-api.com/v6/7e0bd2a03964163cb589ed1e/pair/" +
	// 		"USD" +
	// 		"/" +
	// 		"SGD" +
	// 		"/" +
	// 		inputAmt
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => setConvertedAmt(data.conversion_result));
	// },[inputAmt, props.currencyFrom, props.currencyTo]);
	
	useEffect(() => {
		fetch("https://v6.exchangerate-api.com/v6/7e0bd2a03964163cb589ed1e/pair/" +
			props.currencyFrom +
			"/" +
			props.currencyTo +
			"/" +
			inputAmt
		)
			.then((res) => res.json())
			.then((data) => setConvertedAmt(data.conversion_result));
	},[inputAmt, props.currencyFrom, props.currencyTo]);

	function handleChange(event){
		setInputAmt(event.target.value);
	}

	return (
		<div className="container">
			
			{/* Controlled Component */}
			<input
				value={inputAmt}
				placeholder="Enter amount"
				className="converter-input"
				onChange={handleChange}
			/>

			<p>{props.currencyFrom}</p>
			<p>=</p>

			<p className="converter-result">{
					convertedAmt === "" ? "0" : convertedAmt
				}
			</p>

			<p>{props.currencyTo}</p>

		</div>
	);

}

export default CurrencyConverter;