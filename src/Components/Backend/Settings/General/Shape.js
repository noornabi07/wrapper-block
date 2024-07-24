import { __ } from '@wordpress/i18n';
import { PanelBody, TabPanel } from '@wordpress/components';

import { shapeTabs } from '../../../../utils/options';
import { ShapePanel } from './ShapePanel';

const Shape = ({ attributes, setAttributes, premiumProps }) => {
    const { shape } = attributes;
    const { top, bottom } = shape;


    return <PanelBody className='bPlPanelBody' title={__('Shape', 'b-blocks')} initialOpen={false}>
        <TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={shapeTabs}>{tab => <>
            {'top' === tab.name && <>
                <ShapePanel
                    {...top}
                    labelPrefix="Top"
                    shape={shape}
                    setAttributes={setAttributes}
                    attributes={attributes}
                    name="top"
                    premiumProps={premiumProps}
                />
            </>}


            {'bottom' === tab.name && <>
                <ShapePanel
                    {...bottom}
                    labelPrefix="Bottom"
                    shape={shape}
                    setAttributes={setAttributes}
                    attributes={attributes}
                    name="bottom"
                    premiumProps={premiumProps}
                />
            </>}
        </>}
        </TabPanel>
    </PanelBody>
}

export default Shape;