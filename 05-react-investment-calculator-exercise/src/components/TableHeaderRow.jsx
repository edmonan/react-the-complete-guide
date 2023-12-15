export default function TableHeaderRow({ rowData }) {
	return (
		<tr>
			{rowData.map((cell, cellIndex) => (
				<th key={cellIndex}>{cell}</th>
			))}
		</tr>
	);
}
