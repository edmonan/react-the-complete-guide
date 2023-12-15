import './TabButton.css';

export default function TabButton({ children, isSelected, ...props }) {
	return (
		<li>
			{/* <button onClick={onSelect}>{children}</button> */}
			{/* <button className="active" onClick={onSelect}> */}
			<button className={isSelected ? 'active' : ''} {...props}>
				{children}
			</button>
		</li>
	);
}
