import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalUnitControl as UnitControl } from '@wordpress/components';

import { emUnit, pxUnit, vhUnit } from '../../../../../../Components/utils/options';

const Wrapper = (props) => {
  const { attributes, setAttributes } = props;
  const { wrapper } = attributes;
  const { minHeight } = wrapper;

  return <PanelBody className='bPlPanelBody' title={__('Wrapper', 'b-blocks')}>
    <UnitControl label={__('Minimum Height:', 'b-blocks')} labelPosition='left' value={minHeight} onChange={val => setAttributes({ wrapper: { ...wrapper, minHeight: val } })} units={[pxUnit(700), vhUnit(100), emUnit(43)]} isResetValueOnUnitChange={true} />
  </PanelBody>
}
export default Wrapper;