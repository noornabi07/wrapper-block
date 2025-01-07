import { __ } from '@wordpress/i18n';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelRow, TextControl, Button} from '@wordpress/components';
import { Label } from 'bpl-gutenberg-panel';
import "./style.scss"
export const InlineMediaUpload = props => {
  const { className, label = '', value, types = ['image'], onChange, placeholder = __('Enter URL', 'bplugins') } = props;

  return <div className={className}>
    {label && <Label className='mb5'>{label}</Label>}

    <PanelRow className={`bplInlineMediaUpload`}>
      <TextControl value={value} onChange={val => onChange(val)} placeholder={placeholder} />

      <MediaUploadCheck>
        <MediaUpload
          allowedTypes={types}
          onSelect={val => onChange(val.url)}
          render={({ open }) => <Button className='button button-primary' onClick={open} icon={'upload'}></Button>}
        />
      </MediaUploadCheck>
    </PanelRow>
  </div>
}