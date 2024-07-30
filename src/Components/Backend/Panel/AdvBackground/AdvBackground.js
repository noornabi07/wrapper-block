import {
  Flex,
  __experimentalInputControl as InputControl,
  RangeControl,
  SelectControl,
  ToggleControl,
  __experimentalUnitControl as UnitControl
} from "@wordpress/components";
import { BGradient, Device, DualColorControl, Label, MediaArea, Tab } from "bpl-gutenberg-panel";
import { produce } from "immer";
import { Fragment, useEffect, useState } from "react";
import {
  advGradientOptions,
  imgAttachmentOptions,
  imgPositionOptions,
  imgRepeatOptions,
  imgSizeOptions,
  unitOptions,
} from "../../../../utils/options";
import { BMediaUpload } from './BMediaUpload/BMediaUpload';
export const AdvBackground = (props) => {
  const {
    name = "Background",
    value,
    onChange = () => { },
    device = "desktop",
  } = props;
  const [bgValue, setBgValue] = useState(value || { hoverType: "normal" });
  const { transition } = bgValue[bgValue.hoverType] || {};

  const updateBG = (property, value, childP = null) => {
    const newBG = produce(bgValue, (draft) => {
      if (null !== childP) {
        draft[bgValue.hoverType][property][childP] = value;
      } else {
        draft[bgValue.hoverType][property] = value;
      }
    });
    setBgValue(newBG);
    onChange(newBG);
  };
  const updateHb = (type, value) => {
    const newHb = produce(bgValue, (draft) => {
      draft[type] = value;
    });
    setBgValue(newHb);
    onChange(newHb);
  };
  useEffect(() => {
    onChange(bgValue);
  }, [bgValue])



  return (
    <Fragment>
      <Tab
        options={[{ label: "Normal", value: "normal" }, { label: "Hover", value: "hover" }]}
        value={bgValue.hoverType}
        onChange={(val) => updateHb("hoverType", val)}
      />

      {bgValue.hoverType === "normal" && (
        <Fragment>
          <Background
            name={name}
            value={bgValue.normal}
            onChange={(val) => {
              setBgValue({ ...bgValue, normal: val })
              onChange({ ...bgValue, normal: val })
            }}
            device={device}
            isVideo={true}
          />
        </Fragment>
      )}
      

      {bgValue.hoverType === "hover" && (
        <Fragment>
          <div className="advExtraMargin">
            <RangeControl
              label={`${name} Transition`}
              min={0}
              max={5}
              step={0.05}
              value={transition}
              onChange={(val) => updateBG("transition", val)}
            />
          </div>

          <Background
            name={name}
            value={bgValue.hover}
            onChange={(val) => {
              setBgValue({ ...bgValue, hover: val })
              onChange({ ...bgValue, hover: val })
            }}
            device={device}
            isVideo={false}
          />
        </Fragment>
      )}

    </Fragment>
  );
};

const Background = ({ name, value, onChange, device, isVideo }) => {
  const [bgValue, setBgValue] = useState(
    value || {
      type: "color",
      color: "#0000",
      gradient: advGradientOptions,
      video: { url: "", loop: false },
      img: {
        url: "",
        desktop: {
          position: "center-center",
          xPosition: 0,
          yPosition: 0,
          attachment: "default",
          repeat: "no-repeat",
          size: "default",
          customSize: "0px",
        },
        tablet: {
          position: "center-center",
          xPosition: 0,
          yPosition: 0,
          attachment: "default",
          repeat: "no-repeat",
          size: "default",
          customSize: "0px",
        },
        mobile: {
          position: "center-center",
          xPosition: 0,
          yPosition: 0,
          attachment: "default",
          repeat: "no-repeat",
          size: "default",
          customSize: "0px",
        },
      },
    }
  );
  const { type, color, gradient, img, video } = value || bgValue || {};
  const {
    position,
    xPosition,
    yPosition,
    attachment,
    repeat,
    size,
    customSize,
  } = img[device] || {};
  useEffect(() => onChange(bgValue), [bgValue])

  const tabOptions = isVideo ? [{ label: "Color", value: "color" }, { label: "Gradient", value: "gradient" }, { label: "Image", value: "image" }, { label: "Video", value: "video" }] : [{ label: "Color", value: "color" }, { label: "Gradient", value: "gradient" }, { label: "Image", value: "image" }] 
  return (
    <Fragment>
      <div style={{ marginBottom: "-7px" }}>
        <label>{name} Type</label>
      </div>
      <Tab
        options={tabOptions}
        value={type}
        onChange={(val) => onChange({ ...value, type: val })}
      />
      {type === "color" && (
        <DualColorControl
          label={`${name} Color`}
          value={color}
          onChange={(val) => onChange({ ...value, color: val })}
        />
      )}
      {type === "gradient" && (
        <BGradient
          value={gradient}
          onChange={(val) => onChange({ ...value, gradient: val })}
        />
      )}
      {type === "image" && <Fragment>
        <div>
          <label>{name} Image</label>
        </div>
        <MediaArea
          label="Upload Image"
          value={value.img}
          onChange={(val) =>
            onChange({ ...value, img: { ...img, url: val.url } })
          }
          width="100%"
          height="100%"
        />
        {img.url && (
          <Fragment>
            <Flex className="mt20 mb5" gap={4} align="center">
              <Label className="">Position</Label>
              <Device />
            </Flex>
            <div className="advExtraMargin">
              <SelectControl
                value={position}
                options={imgPositionOptions}
                onChange={val => onChange({ ...value, img: { ...img, [device]: { ...img[device], position: val } } })}
              />
            </div>

            {position === "custom" && (
              <Fragment>
                <Flex className="mt20 mb5" gap={4} align="center">
                  <Label className="">X Position</Label>
                  <Device />
                </Flex>
                <UnitControl
                  units={unitOptions}
                  value={xPosition}
                  min={-2000}
                  max={2000}
                  onChange={val => onChange({ ...value, img: { ...img, [device]: { ...img[device], xPosition: val } } })}
                />

                <Flex className="mt20 mb5" gap={4} align="center">
                  <Label className="">Y Position</Label>
                  <Device />
                </Flex>
                <div className="advExtraMargin">
                  <UnitControl
                    units={unitOptions}
                    value={yPosition}
                    min={-2000}
                    max={2000}
                    onChange={val => onChange({ ...value, img: { ...img, [device]: { ...img[device], yPosition: val } } })}
                  />
                </div>
              </Fragment>
            )}

            <Flex className="mt20 mb5" gap={4} align="center">
              <Label className="">Attachment</Label>
              <Device />
            </Flex>
            <div className="advExtraMargin">
              <SelectControl
                value={attachment}
                options={imgAttachmentOptions}
                onChange={val => onChange({ ...value, img: { ...img, [device]: { ...img[device], attachment: val } } })}
              />
            </div>

            <Flex className="mt20 mb5" gap={4} align="center">
              <Label className="">Repeat</Label>
              <Device />
            </Flex>
            <div className="advExtraMargin">
              <SelectControl
                value={repeat}
                options={imgRepeatOptions}
                onChange={val => onChange({ ...value, img: { ...img, [device]: { ...img[device], repeat: val } } })}
              />
            </div>

            <Flex className="mt20 mb5" gap={4} align="center">
              <Label className="">Size</Label>
              <Device />
            </Flex>
            <div className="advExtraMargin">
              <SelectControl
                value={size}
                options={imgSizeOptions}
                onChange={val => onChange({ ...value, img: { ...img, [device]: { ...img[device], size: val } } })}
              />
            </div>
            {size === "custom" && (
              <Fragment>
                <Flex className="mt20 mb5" gap={4} align="center">
                  <Label className="">Width</Label>
                  <Device />
                </Flex>
                <UnitControl
                  units={unitOptions}
                  value={customSize}
                  min={-2000}
                  max={2000}
                  onChange={val => onChange({ ...value, img: { ...img, [device]: { ...img[device], customSize: val } } })}
                />
              </Fragment>
            )}
          </Fragment>
        )}
      </Fragment>}

      {
        isVideo && type === "video" && <Fragment>
          <BMediaUpload loop={video?.loop} types={["video/mp4", "video/3gpp", "video/x-ms-wmv"]} isVideo={true} value={video} onChange={(val) => onChange({ ...value, video: { ...video, url: val.url } })} label="Upload Video" />

          <InputControl style={{ marginTop: "10px" }} label="Inline Upload" labelPosition="top" type="text" value={video?.url} onChange={val => onChange({ ...value, video: { ...video, url: val } })} placeholder="Insert your video link.." />

          {
            video?.url &&
            <ToggleControl className="mt10" label="Loop" checked={video?.loop} value={video?.loop} onChange={val => onChange({ ...value, video: { ...video, loop: val } })} />
          }
        </Fragment>
      }
    </Fragment>
  );
};
