import { __ } from '@wordpress/i18n';
import { useState } from 'react';
import { PanelRow, ToggleControl, __experimentalUnitControl as UnitControl } from '@wordpress/components';

import { BColor, Label } from '../../../../../../Components';
import { SelectControlPro } from '../../../../../../Components/Pro';

import { shapedOptions } from '../../../../utils/options';
import { updateData } from '../../../../utils/functions';
import { MediaArea } from '../../Panel/MediaArea/MediaArea';
import { Device } from '../../Panel/Device/Device';


export const ShapePanel = ({
    labelPrefix,
    shape,
    setAttributes,
    uploadSvg,
    type,
    color,
    width,
    height,
    isUpload,
    isFlip,
    isFront,
    name,
    premiumProps
}) => {
    const [device, setDevice] = useState('desktop');
    return <>
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            <ToggleControl
                label={`${labelPrefix} Upload Shape`}
                checked={isUpload}
                onChange={val => setAttributes({ shape: updateData(shape, val, name, 'isUpload') })}
            />
        </div>
        {isUpload ? (
            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <MediaArea
                    value={uploadSvg}
                    types="image/svg+xml"
                    onChange={val => setAttributes({ shape: updateData(shape, val, name, 'uploadSvg') })}
                    height="100%"
                    width="100%"
                />
            </div>
        ) : (
            <SelectControlPro
                label={__(`${labelPrefix} Shape Type`, 'container-block')}
                value={type}
                options={shapedOptions}
                onChange={val => setAttributes({ shape: updateData(shape, val, name, "type") })}
                {...premiumProps}
                proValues={['cloud', 'mountain', 'fire', 'sports', 'travel']}
            />
        )}


        <BColor
            label={__(`${labelPrefix} Shape Color`, 'container-block')}
            value={color}
            onChange={val => setAttributes({ shape: updateData(shape, val, name, "color") })}
            defaultColor="#333"
        />

        {/* shape width */}
        <div style={{ marginTop: '10px', marginBottom: '20px' }}>
            <PanelRow>
                <Label className="mb5">{__(`${labelPrefix} Shape Width:`, 'container-block')}</Label>
                <Device onChange={val => setDevice(val)} />
            </PanelRow>
            <UnitControl
                value={width[device]}
                onChange={val => setAttributes({ shape: updateData(shape, val, name, "width", device) })}
                beforeIcon="grid-view"
                step={1}
            />
        </div>

        {/* shape Height */}
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            <PanelRow>
                <Label className="mb5">{__(`${labelPrefix} Shape Height:`, 'container-block')}</Label>
                <Device onChange={val => setDevice(val)} />
            </PanelRow>
            <UnitControl
                value={height[device]}
                onChange={val => setAttributes({ shape: updateData(shape, val, name, "height", device) })}
                beforeIcon="grid-view"
            />
        </div>
        <div style={{ marginBottom: "10px" }}>
            <ToggleControl
                label="Flip"
                checked={isFlip}
                onChange={val => setAttributes({ shape: updateData(shape, val, name, "isFlip") })}
            />
        </div>
        <ToggleControl
            label="Bring to Front"
            checked={isFront}
            onChange={val => setAttributes({ shape: updateData(shape, val, name, "isFront") })}
        />
    </>
}
