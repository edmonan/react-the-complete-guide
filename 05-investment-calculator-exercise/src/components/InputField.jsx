export default function InputField({
	children,
	inputIdentifier,
	userInput,
	handleChange,
	...props
}) {
	return (
		<div>
			<label>{children}</label>
			<input
				value={userInput[inputIdentifier]}
				onChange={event => {
					handleChange(inputIdentifier, event.target.value);
				}}
				type="number"
				required
				{...props}
			></input>
		</div>
	);
}
