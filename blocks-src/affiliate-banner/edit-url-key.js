/**
 * WP dependencies.
 */
import { useState } from '@wordpress/element';
import { Popover, TextControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { keyboardReturn } from '@wordpress/icons';

export function EditUrlQueryKey( { value, SetQueryKey } ) {
    const [param, setParam] = useState(value);

    const handleSubmit = ( e ) => {
        if ( ! param ) return;

        switch ( e.type ) {
            case 'keydown' :
                if ( e.keyCode === 13 ) {
                    e.preventDefault();
                    SetQueryKey(param);
                }
                break;
            case 'click' :
                SetQueryKey(param);
                break;
        }
	};

    return (
        <Popover>
            <div tabIndex={ -1 } className='affiliate-param-control-wrapper'>
                <div className='affiliate-param-control__input-wrapper'>
                    <div className='affiliate-param-control__input-container'>
                        <TextControl
                            __nextHasNoMarginBottom
                            className="block-editor-link-control__field block-editor-link-control__text-content"
                            label={ __( 'Edit the affiliate URL parameter', 'affiliate-banner' ) }
                            value={param}
                            onChange={ val => setParam(val)}
                            onKeyDown={ handleSubmit }
                            size="__unstable-large"
                        />
                    </div>
                    <div className='affiliate-param-control__enter-container'>
                        <Button
                            onClick={ handleSubmit }
                            label={ __( 'Submit', 'affiliate-banner' ) }
                            icon={ keyboardReturn }
                            className="block-editor-link-control__search-submit"
                            aria-disabled={ ! param }
                        />
                    </div>
                </div>
            </div>
        </Popover>
    );
}
