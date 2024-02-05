/**
 * WP dependencies.
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import metadata from './block.json';
import { edit, save } from './edit';
import { AffiliateIcon } from '../icons';

const {name} = metadata;

const settings = {
    ...metadata,
    description: __( 'Compose your text, the affiliate name will be automatically appended to it', 'affiliate-banner' ),
    icon: {
        src: AffiliateIcon,
        foreground: '#007de0'
    },
    edit,
    save
}

registerBlockType( name, settings );
