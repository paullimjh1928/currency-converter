import './App.css'
import CurrencyDropdown from './CurrencyDropdown';
import './CurrencyStyling.css'
import { useState } from 'react';

function App() {

	const [count, setCount] = useState(0);

	return (

		<>
			<h1>Currency Convert</h1>
			<CurrencyDropdown />
			
			<p>Number of times clicked: {count} </p>
			<button onClick = { () => {
						setCount(count+1);
					}} 
			> Click me
			</button>      
		</>
	)
}

export default App;
