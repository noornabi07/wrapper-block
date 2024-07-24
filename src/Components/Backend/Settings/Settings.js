import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';

import { tabController } from '../../../../../Components/utils/functions';

import Content from './General/Content';
import Wrapper from './General/Wrapper';
import Shape from './General/Shape';
import Style from './Style/Style';
import { generalStyleTabs } from '../../../utils/options';

const Settings = (props) => {

  return <InspectorControls>
    <TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>{tab => <>
      {'general' === tab.name && <>
        <Wrapper {...props} />

        <Content {...props} />
        <Shape {...props} />
      </>}


      {'style' === tab.name && <>
        <Style {...props} />
      </>}
    </>}</TabPanel>

    {/* <TabPanel
      className="bPlTabPanel"
      activeClass="activeTab"
      tabs={[
        {
          name: 'general',
          title: 'General',
          className: 'tab-one',
        },
        {
          name: 'style',
          title: 'Styles',
          className: 'tab-two',
        },
      ]}>
      {(tab) => <>
        {tab.name === 'general' && <ContentSettings attributes={attributes} setAttributes={setAttributes} {...props} />}

        {tab.name === 'style' && <Style attributes={attributes} {...props} />}
      </>}
    </TabPanel> */}
  </InspectorControls>;
};

export default Settings;