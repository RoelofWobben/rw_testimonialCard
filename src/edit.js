/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextareaControl, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param  root0
 * @param  root0.attributes
 * @param  root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { quote, name, job } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Input Area', 'Testimonialcard' ) }>
					<TextareaControl
						label={ __( 'quote', 'Testimonialcard' ) }
						help="Enter your quote"
						value={ quote || '' }
						onChange={ ( value ) =>
							setAttributes( { quote: value } )
						}
					/>
					<TextControl
						label={ __( 'name', 'Testimonialcard' ) }
						value={ name || '' }
						onChange={ ( value ) =>
							setAttributes( { name: value } )
						}
					/>
					<TextControl
						label={ __( 'job', 'Testimonialcard' ) }
						value={ job || '' }
						onChange={ ( value ) =>
							setAttributes( { job: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() } className="card-container">
				<figure className="snip1192">
					<blockquote>{ quote } </blockquote>
					<div className="author">
						<img
							src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
							alt="sq-sample1"
						/>
						<h5>
							{ ' ' }
							{ name } <span> { job }</span>
						</h5>
					</div>
				</figure>
			</div>
		</>
	);
}
