<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<?php

print_r($attributes); 

$quote = "" ;
$name = "" ; 
$job = "";  

// Determine which content to display.
if ( isset( $attributes['quote'] ) ) {

    $quote = $attributes['quote'];
}

if ( isset( $attributes['name'] ) ) {

     $name = $attributes['name'];
} 

if ( isset( $attributes['job'] ) ) {

    $job = $attributes['job'];
} 

$block_content = '
<div { ...useBlockProps.save } className="card-container">
				<figure class="snip1192">
					<blockquote>' .  $quote . '</blockquote>
					<div class="author">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1" />
						<h5>' . $name . ' <span> ' . $job . '</span></h5>
					</div>
				</figure>
			</div>
'; 

echo wp_kses_post( $block_content );
