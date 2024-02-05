/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * WP dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
	AlignmentControl,
	BlockControls,
	useBlockProps,
    RichText
} from '@wordpress/block-editor';

const NAME = ' [' + __( 'affiliate name', 'affiliate-banner' ) + ']';

export function edit( { attributes, setAttributes } ) {
    const { textAlign, backgroundColor, textColor, content } = attributes
    const blockProps = useBlockProps ({
		className: classnames(
            {
                [`has-background has-${backgroundColor}-background-color`]: backgroundColor,
                [`has-${textColor}`]: textColor,
                [`has-text-align-${ textAlign }`]: textAlign,
            },
        )
	});

    return(
        <>
            <BlockControls group="block">
				<AlignmentControl
					value={ attributes.textAlign }
					onChange={ ( nextAlign ) => {
						setAttributes( { textAlign: nextAlign } );
					} }
				/>
			</BlockControls>
            <p { ...blockProps }>
                <RichText
                    identifier="content"
                    tagName="span"
                    { ...blockProps }
                    value={ content }
                    onChange={ ( newContent ) =>
                        setAttributes( { content: newContent } )
                    }
                />
                <span className='name-from-get'>{ NAME }</span>
            </p>
        </>
    )
}

export function save( { attributes } ) {
    const { textAlign, backgroundColor, textColor, content } = attributes;

    const blockProps = useBlockProps.save(
            {
                className: classnames(
                    {
                        [`has-background has-${backgroundColor}-background-color`]: backgroundColor,
                        [`has-${textColor}`]: textColor,
                        [`has-text-align-${ textAlign }`]: textAlign,
                    }
                )
            }
    );
    return(
        <p { ...blockProps }>
            <span className='before-rep-name'>
			    <RichText.Content value={ content } />
            </span>
            <span className='name-from-get'>{ NAME }</span>
		</p>
    );
}
