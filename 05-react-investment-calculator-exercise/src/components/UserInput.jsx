import InputField from './InputField';
export default function UserInput({ userInput, handleChange }) {
	return (
		<section id="user-input">
			<div className="input-group">
				<InputField
					userInput={userInput}
					inputIdentifier="initialInvestment"
					handleChange={handleChange}
				>
					Initial Investment
				</InputField>
				<InputField
					userInput={userInput}
					inputIdentifier="annualInvestment"
					handleChange={handleChange}
				>
					Annual Investment
				</InputField>
			</div>
			<div className="input-group">
				<InputField
					userInput={userInput}
					inputIdentifier="expectedReturn"
					handleChange={handleChange}
				>
					Expected Return
				</InputField>
				<InputField
					userInput={userInput}
					inputIdentifier="duration"
					handleChange={handleChange}
				>
					Duration
				</InputField>
			</div>
		</section>
	);
}
