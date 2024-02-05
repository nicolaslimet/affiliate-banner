/**
 * WP dependencies.
 */
import {
	// BlockControls,
	// BlockIcon,
	// InspectorControls,
	// store as blockEditorStore,
    // RichText,
    InnerBlocks,
	useBlockProps,
    useInnerBlocksProps
} from '@wordpress/block-editor';

export default function save() {
    const blockProps = useBlockProps.save();
    return (
        <div { ...blockProps }>
            <InnerBlocks.Content />
        </div>
    );
}
