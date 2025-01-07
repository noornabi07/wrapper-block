import { InnerBlocks } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';

import './editor.scss';
import metadata from './block.json';
import Edit from './Components/Backend/Edit';



registerBlockType(metadata.name, {
	icon: {
		src: 'slides',
		foreground: '#FF0080'
	},

	edit: Edit,
	save: () => <InnerBlocks.Content />
});
