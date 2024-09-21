import "./CurrencyStyling.css"
import { useEffect, useState } from "react";
import CurrencyConverter from './CurrencyConverter';


function CurrencyDropdown(){
	
	const [currencyCodes, setCurrencyCodes] = useState([]);
	const [currencyFrom, setCurrencyFrom] = useState("");
	const [currencyTo, setCurrencyTo] = useState("");

	useEffect(()=>{
		fetch("https://v6.exchangerate-api.com/v6/7e0bd2a03964163cb589ed1e/codes")
			.then((res) => res.json())
			.then((data) => setCurrencyCodes(data.supported_codes));
	},[])
	
	function handleCurrencyToChange(event){
		setCurrencyTo(event.target.value);
	}
	
	function handleCurrencyFromChange(event){
		setCurrencyFrom(event.target.value);
	}
	
	console.log("Currency Codes, State", currencyCodes);

	return (

		<div>
			<div className = "container">
				<p>I want to convert</p>

				{/* Controlled Components */}
				<select 
					name="currency" 
					id="currencySelect"
					onChange={handleCurrencyFromChange}
					value={currencyFrom}>
				{
					currencyCodes.map(codesPair => 
					<option value={codesPair[0]}>
						{codesPair[1]}
					</option>)
				}
				</select>

				<p>to</p>

				{/* Controlled Components */}
				<select 
					name="currency" 
					id="currencySelect"
					onChange={handleCurrencyToChange}
					value={currencyTo}>
				{
					currencyCodes.map(codesPair => 
					<option value={codesPair[0]}>
						{codesPair[1]}
					</option>)
				}
				</select>

			</div>

			<CurrencyConverter currencyFrom={currencyFrom} currencyTo={currencyTo} />

		</div>



	);
}

export default CurrencyDropdown;