import { __ } from '@wordpress/i18n';

export const shapedOptions = [
  { value: 'none', label: 'None' },
  { value: 'ocean wave', label: 'Ocean Wave' },
  { value: 'asymmetric triangle', label: 'Asymmetric Triangle [Left]' },
  { value: 'abstract paintbrush', label: 'Abstract Paintbrush' },
  { value: 'asymmetric curve', label: 'Asymmetric Curve (Inverted)' },
  { value: 'cloud', label: 'Cloud (Pro)' },
  { value: 'mountain', label: 'Mountain (Pro)' },
  { value: 'fire', label: 'Fire (Pro)' },
  { value: 'sports', label: 'Sports (Pro)' },
  { value: 'travel', label: 'Travel (Pro)' },
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