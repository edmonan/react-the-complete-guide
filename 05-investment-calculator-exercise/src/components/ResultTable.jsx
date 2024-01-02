import { calculateInvestmentResults } from '../util/investment';
import TableRow from './TableRow';
import TableHeaderRow from './TableHeaderRow';
export default function ResultTable({ userInput, tableHeader }) {
	const tableArray = calculateInvestmentResults(userInput);
	const initialInvestment = userInput.initialInvestment;
	return (
		<table id="result">
			<thead>
				<TableHeaderRow rowData={tableHeader} />
			</thead>
			<tbody>
				{tableArray.map((row, rowIndex) => (
					<TableRow
						key={rowIndex}
						yearData={row}
						initialInvestment={initialInvestment}
					/>
				))}
			</tbody>
		</table>
	);
}
