import { formatter } from '../util/investment';
export default function TableRow({ yearData, initialInvestment }) {
	const totalInterest =
		yearData.valueEndOfYear -
		yearData.annualInvestment * yearData.year -
		initialInvestment;
	const totalCapital = yearData.valueEndOfYear - totalInterest;
	return (
		<tr>
			<td>{yearData.year}</td>
			<td>{formatter.format(yearData.valueEndOfYear)}</td>
			<td>{formatter.format(yearData.interest)}</td>
			<td>{formatter.format(totalInterest)}</td>
			<td>{formatter.format(totalCapital)}</td>
		</tr>
	);
}
