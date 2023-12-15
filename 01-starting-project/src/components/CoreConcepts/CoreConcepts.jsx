import { CORE_CONCEPTS } from '../../data-with-examples.js';
import CoreConcept from '../CoreConcept/CoreConcept.jsx';
import Section from '../Section/Section.jsx';
export default function CoreConcepts() {
	return (
		<Section id={'core-concepts'} title={'Core Concepts'}>
			{/* 
			{['hello', 'world']}
			{[
				<p>hello</p>,
				<p>world</p>
			]} 
			*/}
			<ul>
				{CORE_CONCEPTS.map(conceptItem => (
					<CoreConcept key={conceptItem.title} {...conceptItem} />
				))}{' '}
				{/*
				<CoreConcept {...CORE_CONCEPTS[0]} />
				<CoreConcept {...CORE_CONCEPTS[1]} />
				<CoreConcept {...CORE_CONCEPTS[2]} />
				<CoreConcept {...CORE_CONCEPTS[3]} />
				*/}
			</ul>
		</Section>
	);
}
