<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<?php

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

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?> >
	<figure class="snip1192">
		<blockquote><?php echo esc_html( $quote ); ?></blockquote>
		<div class="author">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1" />
			<h5><?php echo esc_html( $name ); ?><span><?php echo esc_html( $job ); ?></span></h5>
		</div>
	</figure>
</div>
