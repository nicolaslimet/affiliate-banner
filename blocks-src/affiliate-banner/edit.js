/**
 * External dependencies.
 */
import classnames from 'classnames';

/**
 * WP dependencies.
 */
import { useState } from '@wordpress/element';
import { ToolbarGroup, ToolbarButton, Popover } from '@wordpress/components';
import {
    BlockControls,
    InnerBlocks,
	useBlockProps,
    __experimentalUseBorderProps as useBorderProps,
    __experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
} from '@wordpress/block-editor';

import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import { SetUrlQueryKey } from './set-url-query-key';
import { EditUrlQueryKey } from './edit-url-key';

export function edit( props ) {

	const { attributes, setAttributes } = props;
    const { urlParam, textAlign, backgroundColor, textColor } = attributes
    const borderProps = useBorderProps( attributes );
    const [ hasQueryParam, setQueryParam ] = useState( !! urlParam );
    const [isEditingParam, setEditingParam] = useState(false);

    const SetQueryKey = ( newValue ) => {
        setQueryParam( !! newValue );
        if  (newValue ) {
            setAttributes( { urlParam: newValue } );
            setEditingParam(false);
        }
    };

    const blockProps = useBlockProps ({
		className: classnames(
            'affiliate-banner-editor-wrap',
            {
                [`has-background has-${backgroundColor}-background-color`]: backgroundColor,
                [`has-${textColor}`]: textColor,
                [`has-text-align-${ textAlign }`]: textAlign,
            },
            borderProps.className
        ),
        style: borderProps.style
	});

    const TEMPLATE = [
        [ 'core/paragraph', { content: __( 'Welcome to our Store', 'affiliate-banner' ), lock: { move: false, remove: false } } ],
        [ 'hdcpab/affiliate-name', { lock: { move: false, remove: true } } ],
    ];
    const ALLOWED_BLOCKS = [ 'core/image', 'core/paragraph' ];
    const BTN_TEXT =  __( 'edit URL param', 'affiliate-banner' );

    return (
        <div { ...blockProps } >

            { ! hasQueryParam &&
                ( <SetUrlQueryKey SetQueryKey={SetQueryKey} /> )
            }

            { hasQueryParam &&

                <>
                    <BlockControls group="block">
                        <ToolbarGroup>
                            <ToolbarButton
                                label={ BTN_TEXT }
                                text={ BTN_TEXT }
                                onClick={ () => setEditingParam( ! isEditingParam ) }
                            />
                        </ToolbarGroup>

                    </BlockControls>

                    <InnerBlocks
                        template= { TEMPLATE }
                        allowedBlocks={ ALLOWED_BLOCKS }
                    />

                    { isEditingParam &&
                        <EditUrlQueryKey value={urlParam} SetQueryKey={SetQueryKey} />
                    }
                </>
            }

        </div>
	);
}

export function save( { attributes } ) {
    const { textAlign, backgroundColor, textColor } = attributes;
    const borderProps = getBorderClassesAndStyles( attributes );

    const blockProps = useBlockProps.save(
            {
                className: classnames(
                    {
                        [`has-background has-${backgroundColor}-background-color`]: backgroundColor,
                        [`has-${textColor}`]: textColor,
                        [`has-text-align-${ textAlign }`]: textAlign,
                    },
                    borderProps.className
                ),
                style: borderProps.style
            }
    );

    return (
        <div { ...blockProps }>
            <InnerBlocks.Content />
        </div>
    );
}
