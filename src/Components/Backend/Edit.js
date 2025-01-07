import { useBlockProps } from '@wordpress/block-editor';

import Container from './Container';
import Style from '../Common/Style';

import Settings from './Settings/Settings';

export default function Edit(props) {
	const { setAttributes, attributes, clientId, } = props;

	const isPremium = false;

	return <div {...useBlockProps()}>
		<Settings attributes={attributes} setAttributes={setAttributes} isPremium={isPremium} />

		<Style attributes={attributes} mainId={`block-${clientId}`} />

		<div className='bBlocksContainer'>
			<Container attributes={attributes} />
		</div>
	</div>
}
