export default function Tabs({
	buttons,
	ButtonsContainer = 'menu',
	children,
}) {
	// const ButtonsContainer = buttonsContainer;
	return (
		<>
			<ButtonsContainer>{buttons}</ButtonsContainer>
			{children}
		</>
	);
}
