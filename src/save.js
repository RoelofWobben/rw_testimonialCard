import { useBlockProps } from '@wordpress/block-editor';


export default function save( { attributes } ) {
    
    const { quote, name, job } = attributes; 

    if (!quote) {
        return null; 
    }

    if (!name) {
        return null; 
    }

    if (!job) {
        return null; 
    }

    let $display_data;

    if (  quote && name && job  ) {
        $display_data = `
<div { ...useBlockProps.save }  className="card-container">
				<figure class="snip1192">
					<blockquote>' .  quote . '</blockquote>
					<div class="author">
						<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1" />
						<h5>' . name . ' <span> ' . job . '</span></h5>
					</div>
				</figure>
			</div>
`; 

    } else {
        $display_data = ` 
        <div  className="card-container">
                        <figure class="snip1192">
                            <blockquote>' .  "" . '</blockquote>
                            <div class="author">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1" />
                                <h5>' . ""  . ' <span> ' . "" . '</span></h5>
                            </div>
                        </figure>
                    </div>
        '; 
        `
    }

    return (
        <p { ...useBlockProps.save() }>© { $display_data}</p>
    );
}