import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { quote, name, job } = attributes;

	const quoteOutput = quote ? quote : '';
	const nameOutput = name ? name : '';
	const jobOutput = job ? job : '';

	const $DisplayData = `
<div { ...useBlockProps.save }  className="card-container">
				<figure class="snip1192">
					<blockquote>' .  quoteOutput . '</blockquote>
					<div class="author">
						<img src="./img/sq-sample1.jpg" alt="sq-sample1" />
						<h5>' . nameOutput . ' <span> ' . jobOutput . '</span></h5>
					</div>
				</figure>
			</div>
`;

	return <div { ...useBlockProps.save() }>© { $DisplayData }</div>;
}
