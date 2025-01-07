import { useState } from 'react';
import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';

import { tabController } from '../../../../../Components/utils/functions';
import { AboutPro } from '../../../../../Components/Pro';

import Content from './General/Content';
import Wrapper from './General/Wrapper';
import Shape from './General/Shape';
import Style from './Style/Style';
import { generalStyleTabs } from '../../../utils/options';

const Settings = (props) => {
  const { isPremium } = props;
  const [isAboutPro, setIsAboutPro] = useState(false);

  const premiumProps = { isPremium, setOpen: setIsAboutPro }

  return <>
    <InspectorControls>
      <TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>{tab => <>
        {'general' === tab.name && <>
          <Wrapper {...props} />

          <Content {...props} />
          <Shape {...props} premiumProps={premiumProps} />
        </>}


        {'style' === tab.name && <>
          <Style {...props} />
        </>}
      </>}</TabPanel>
    </InspectorControls>

    <AboutPro aboutProOpen={isAboutPro} setAboutProOpen={setIsAboutPro} link=''>
      <li>Feature 1</li>
    </AboutPro>
  </>
};

export default Settings;