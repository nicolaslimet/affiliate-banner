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
import { HandShake } from '../icons';
import './index.css';

const { name } = metadata;

const settings = {
    ...metadata,
    description: __( 'Displays a welcome banner with the affiliate name when an affiliate link is detected', 'affiliate-banner' ),
    icon: {
        src: HandShake,
        foreground: '#007de0'
    },
    edit,
    save
}

registerBlockType( name, settings );
