import { __ } from '@wordpress/i18n';

export const shapedOptions = [
  { value: 'none', label: 'None' },
  { value: 'ocean wave', label: 'Ocean Wave' },
  { value: 'asymmetric triangle', label: 'Asymmetric Triangle [Left]' },
  { value: 'abstract paintbrush', label: 'Abstract Paintbrush' },
  { value: 'asymmetric curve', label: 'Asymmetric Curve (Inverted)' },
  { value: 'cloud', label: 'Cloud' },
  { value: 'mountain', label: 'Mountain' },
  { value: 'fire', label: 'Fire' },
  { value: 'sports', label: 'Sports' },
  { value: 'travel', label: 'Travel' },
];

export const textAlignmentOptions = [
  { value: 'left', label: 'Left' },
  { value: 'center', label: 'Center' },
  { value: 'right', label: 'Right' }
];

export const verticalAlignOptions = [
  { value: 'start', label: 'Top' },
  { value: 'center', label: 'Center' },
  { value: 'end', label: 'Bottom' }
];

export const horizontalAlignOptions = [
  { value: 'flex-start', label: 'Left' },
  { value: 'center', label: 'Center' },
  { value: 'flex-end', label: 'Right' }
];

export const generalStyleTabs = [
  { name: 'general', title: __('General', 'b-blocks') },
  { name: 'style', title: __('Style', 'b-blocks') }
];

export const shapeTabs = [
  { name: 'top', title: __('Top', 'b-blocks') },
  { name: 'bottom', title: __('Bottom', 'b-blocks') }
];

export const backgroundTabs = [
  { name: 'normal', title: __('Normal', 'b-blocks') },
  { name: 'hover', title: __('Hover', 'b-blocks') }
]

export const borderTabs = [
  { name: 'normal', title: __('Normal', 'b-blocks') },
  { name: 'hover', title: __('Hover', 'b-blocks') }
]

export const advGradientOptions = {
  type: "linear",
  radialType: "ellipse",
  colors: [
    { color: "", position: 0 },
    { color: "", position: 0 },
  ],
  centerPositions: { x: 0, y: 0 },
  angel: 90,
};

export const imgAttachmentOptions = [
  { label: "Default", value: "default" },
  { label: "Fixed", value: "fixed" },
  { label: "Scroll", value: "scroll" },
];

export const imgPositionOptions = [
  { label: "Default", value: "default" },
  { label: "Center Center", value: "center center" },
  { label: "Center Left", value: "center left" },
  { label: "Center Right", value: "center right" },
  { label: "Top Center", value: "center top" },
  { label: "Top Left", value: "left top" },
  { label: "Top Right", value: "left bottom" },
  { label: "Bottom Center", value: "right center" },
  { label: "Bottom Left", value: "right top" },
  { label: "Bottom Right", value: "right bottom" },
  { label: "Custom", value: "custom" },
];
export const imgRepeatOptions = [
  { label: "Default", value: "default" },
  { label: "Repeat", value: "repeat" },
  { label: "Repeat-X", value: "repeat-x" },
  { label: "Repeat-Y", value: "repeat-y" },
  { label: "No-Repeat", value: "no-repeat" },
];

export const imgSizeOptions = [
  { label: "Default", value: "default" },
  { label: "Auto", value: "auto" },
  { label: "Cover", value: "cover" },
  { label: "Contain", value: "contain" },
  { label: "Custom", value: "custom" },
];
export const unitOptions = [
  { label: "px", value: "px" },
  { label: "%", value: "%" },
  { label: "em", value: "em" },
];