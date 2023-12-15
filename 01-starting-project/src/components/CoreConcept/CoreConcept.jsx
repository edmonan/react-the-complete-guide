import './CoreConcept.css';

export default function CoreConcept({
	image,
	title: altTitle,
	description = 'Description missing',
}) {
	return (
		<li>
			<img src={image} alt={altTitle} />
			<h3>{altTitle}</h3>
			<p>{description}</p>
		</li>
	);
}
