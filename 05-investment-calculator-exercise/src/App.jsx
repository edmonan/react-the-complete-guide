import { useState } from 'react';
import UserInput from './components/UserInput';
import ResultTable from './components/ResultTable';
import ErrorMsg from './components/ErrorMsg';
const TABLE_HEADER = [
	'Year',
	'Investment Value',
	'Interest (Year)',
	'Total Interest',
	'Invested Capital',
];
const INITIAL_INPUT = {
	initialInvestment: 15000,
	annualInvestment: 1200,
	expectedReturn: 6,
	duration: 10,
};
function App() {
	const [userInput, setUserInput] = useState(INITIAL_INPUT);
	const inputIsValid = userInput.duration > 0;
	function handleChange(inputIdentifier, newValue) {
		setUserInput(previousUserInput => {
			let updatedUserInput = { ...previousUserInput };
			updatedUserInput = {
				...previousUserInput,
				[inputIdentifier]: +newValue,
			};
			return updatedUserInput;
		});
	}
	return (
		<main>
			<UserInput userInput={userInput} handleChange={handleChange} />
			{!inputIsValid && <ErrorMsg />}
			{inputIsValid && (
				<ResultTable
					tableHeader={TABLE_HEADER}
					userInput={userInput}
				/>
			)}
		</main>
	);
}

export default App;
