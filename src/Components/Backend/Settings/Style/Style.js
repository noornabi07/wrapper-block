import { PanelBody, PanelRow, TabPanel, RangeControl, SelectControl } from '@wordpress/components';
import { Fragment, useState } from '@wordpress/element';
import { BMultiShadowControl } from 'bpl-gutenberg-panel';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import React from 'react';
import { Background, BorderControl, Label } from '../../../../../../Components';
import { updateData } from '../../../../utils/functions';
import { BBoxControl } from '../../Panel/BBoxControl/BBoxControl';
import { Device } from '../../Panel/Device/Device';
import { backgroundTabs, borderTabs } from '../../../../utils/options';


const Style = ({ attributes, setAttributes }) => {
  const { paddingColumns, background, wrapper } = attributes;
  const [device, setDevice] = useState('desktop');
  const { normalBg, hoverBg, transition, normalTransition, blendType } = background;
  const { border, shadow } = wrapper;
  const { normalBorder, hoverBorder } = border;
  const { normal, hover } = shadow;


  return (
    <Fragment>
      <PanelBody>
        {/* Padding setting */}
        <div>
          <PanelRow>
            <Label className='mb5'>{__('Padding:', 'text-domain')}</Label>
            <Device onChange={val => setDevice(val)} />
          </PanelRow>
          <BBoxControl values={paddingColumns.padding[device]} onChange={val => setAttributes({ paddingColumns: updateData(paddingColumns, val, "padding", device) })} ></BBoxControl>
        </div>
      </PanelBody>


      {/* Background settings */}
      <PanelBody className='bPlPanelBody' title={__("Background", "b-blocks")} initialOpen={false}>
        <TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={backgroundTabs}>
          {tab =>
            <>
              {'normal' === tab.name && <>
                {/* Normal Background */}
                <Background label={__('Background Color', 'container-block')} value={normalBg} onChange={val => {
                  const newBg = produce(background, draft => {
                    draft.normalBg = val
                  })
                  setAttributes({ background: newBg })
                }} defaults={{ color: '#fff' }} />

                {/* Normal Background Transition */}
                <div style={{ marginTop: "10px" }}>
                  <p style={{ marginBottom: "0px" }}>Normal Background Transition</p>
                  <RangeControl
                    value={normalTransition}
                    onChange={val => {
                      const newTransition = produce(background, draft => {
                        draft.normalTransition = val
                      })
                      setAttributes({ background: newTransition })
                    }}
                    step={0.5}
                    min={0.5}
                    max={3}
                  ></RangeControl>
                </div>
              </>
              }

              {'hover' === tab.name && <>
                {/* Hover  Background */}
                <Background label={__('Hover Background Color', 'container-block')} value={hoverBg} onChange={val => {
                  const newBg = produce(background, draft => {
                    draft.hoverBg = val
                  })
                  setAttributes({ background: newBg })
                }} defaults={{ color: '#fff' }} />

                {/*Hover Background Transition */}
                <div style={{ marginTop: "10px" }}>
                  <p style={{ marginBottom: "0px" }}>Hover Background Transition</p>
                  <RangeControl
                    value={transition}
                    onChange={val => {
                      const newTransition = produce(background, draft => {
                        draft.transition = val
                      })
                      setAttributes({ background: newTransition })
                    }}
                    step={0.5}
                    min={0.5}
                    max={3}
                  ></RangeControl>
                </div>

                <SelectControl
                  label={__("Blend Mode", "container-block")}
                  value={blendType}
                  options={[
                    { value: 'normal', label: 'Normal' },
                    { value: 'multiply', label: 'Multiply' },
                    { value: 'screen', label: 'Screen' },
                    { value: 'overly', label: 'Overly' },
                    { value: 'darken', label: 'Darken' },
                    { value: 'lighten', label: 'Lighten' },
                    { value: 'color dodge', label: 'Color Dodge' },
                    { value: 'saturation', label: 'Saturation' },
                    { value: 'color', label: 'Color' },
                    { value: 'luminosity', label: 'Luminosity' }
                  ]}
                  onChange={(val) => {
                    const newBlandType = produce(background, draft => {
                      draft.blendType = val;
                    })
                    setAttributes({ background: newBlandType })
                  }}
                >
                </SelectControl>
              </>}

            </>}
        </TabPanel>
      </PanelBody>

      {/* Border & Shadow Settings */}
      <PanelBody className='bPlPanelBody' title={__("Border & Shadow", "b-blocks")} initialOpen={false}>
        <TabPanel className='bPlTabPanel' activeClass='activeTab' tabs={borderTabs}>
          {tab => <>
            {'normal' === tab.name && <>
              {/*Normal Border Control */}
              <BorderControl label={__('Normal Border:', 'b-block')} value={normalBorder}
                onChange={val => {
                  const newBorder = produce(wrapper, draft => {
                    draft.border.normalBorder = val
                  })
                  setAttributes({ wrapper: newBorder })
                }} defaults={{ radius: '5px' }} />

              {/* Normal Shadow Control Here */}
              <BMultiShadowControl
                label={__("Normal Shadow", "b-block")}
                value={normal}
                onChange={(value) => {
                  const newShadow = produce(wrapper, draft => {
                    draft.shadow.normal = value
                  })
                  setAttributes({ wrapper: newShadow })
                }}
                defaults={[
                  { hOffset: '0px', vOffset: '0px', blur: '0px', spreed: '0px', color: '#7090b0', isInset: false },
                ]}
              />
            </>}

            {'hover' === tab.name && <>
              <BorderControl label={__('Hover Border:', 'b-block')} value={hoverBorder}
                onChange={val => {
                  const newBorder = produce(wrapper, draft => {
                    draft.border.hoverBorder = val
                  })
                  setAttributes({ wrapper: newBorder })
                }} defaults={{ radius: '5px' }} />

              {/* Hover Shadow Control Here */}
              <BMultiShadowControl
                label={__("Hover Shadow", "b-block")}
                value={hover}
                onChange={(value) => {
                  const newShadow = produce(wrapper, draft => {
                    draft.shadow.hover = value
                  })
                  setAttributes({ wrapper: newShadow })
                }}
                defaults={[
                  { hOffset: '0px', vOffset: '0px', blur: '0px', spreed: '0px', color: '#7090b0', isInset: false },
                ]}
              />
            </>}
          </>}
        </TabPanel>
      </PanelBody>
    </Fragment >
  );
};

export default Style;