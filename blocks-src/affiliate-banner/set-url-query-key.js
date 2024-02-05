/**
 * WP dependencies.
 */
import { useState } from '@wordpress/element';
import { TextControl, Button } from '@wordpress/components';
import { __, _x } from '@wordpress/i18n';
import { BlockIcon } from '@wordpress/block-editor'

/**
 * Internal dependencies.
 */
import { HandShake } from '../icons';

export function SetUrlQueryKey( { SetQueryKey } ) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = ( e ) => {
        if ( ! inputValue ) return;

        switch ( e.type ) {
            case 'keydown' :
                if ( e.keyCode === 13 ) SetQueryKey(inputValue);
                break;
            case 'click' :
                SetQueryKey(inputValue);
        }
	};

    return (
        <>
            <div className='set-url-key-wrap'>
            <div className='set-url-key-wrap-label'>
                <BlockIcon icon= { HandShake } />
                { __( 'Affiliate Link Banner', 'affiliate-banner' ) }
            </div>
            <div className='abs-instruction'>
                <p>{ __( 'Set the affiliate URL parameter to display the banner' ) }</p>
                <p>{ _x( 'Ex', 'example abbreviated' ) }: {location.origin}/?<b>{ __( 'affiliate', 'affiliate-banner' ) }</b>={ __( 'username', 'affiliate-banner' ) }</p>
            </div>

            <div>
                <TextControl
                    label={ __( 'Enter the URL parameter', 'affiliate-banner' ) }
                    onChange={ ( value ) => setInputValue( value ) }
                    onKeyDown={ handleSubmit }
                />
            </div>

            <div>
                <Button
                    variant='primary'
                    disabled={ ! inputValue }
                    label={ __( 'Submit', 'affiliate-banner' ) }
                    onClick={ handleSubmit }
                    text={ __( 'Submit', 'affiliate-banner' ) }
                ></Button>
            </div>
        </div>
        </>
    );
}
