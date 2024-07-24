import { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { PanelBody, PanelRow, SelectControl, ToggleControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';

import { BColor, Label } from '../../../../../../Components';

import { updateData } from '../../../../utils/functions';
import { horizontalAlignOptions, textAlignmentOptions, verticalAlignOptions } from '../../../../utils/options';
import { Device } from '../../Panel/Device/Device';

const Content = (props) => {
  const { attributes, setAttributes } = props;
  const { content } = attributes;
  const { isFullWidth, width, verticalAlign, horizontalAlign, textAlign, color } = content;

  const [device, setDevice] = useState('desktop');

  return <PanelBody className='bPlPanelBody' title={__('Content', 'b-blocks')} initialOpen={false}>
    <ToggleControl
      label="Enable Full Width"
      checked={isFullWidth}
      onChange={val => setAttributes({ content: updateData(content, val, "isFullWidth") })}
    />

    <PanelRow>
      <Label className='mb5'>{__('Content Width:', 'b-blocks')}</Label>
      <Device onChange={val => setDevice(val)} />
    </PanelRow>
    <UnitControl value={width[device]} onChange={val => setAttributes({ content: updateData(content, val, "width", device) })} beforeIcon='grid-view' max={100} step={1}></UnitControl>

    {/* Vertical Align  */}
    <SelectControl
      label={__("Alignment Vertical", "b-blocks")}
      value={verticalAlign}
      options={verticalAlignOptions}
      onChange={(val) => {
        setAttributes({ content: updateData(content, val, "verticalAlign") })
      }}
    >
    </SelectControl>

    {/* horizontalAlign Alignment */}
    <SelectControl
      label={__("horizontalAlign Alignment", "b-blocks")}
      value={horizontalAlign}
      options={horizontalAlignOptions}
      onChange={(val) => {
        setAttributes({ content: updateData(content, val, "horizontalAlign") })
      }}
    >
    </SelectControl>

    {/* Content Alignment */}
    <SelectControl
      label={__("Content Alignment", "b-blocks")}
      value={textAlign}
      options={textAlignmentOptions}
      onChange={(val) => {
        setAttributes({ content: updateData(content, val, "textAlign") })
      }}
    >
    </SelectControl>

    <BColor className='mt10' label={__('Content Color', 'b-blocks')} value={color} onChange={val => setAttributes({
      content: updateData(content, val, "color")
    })} defaultColor='#F7ED39' />
  </PanelBody>

}
export default Content;