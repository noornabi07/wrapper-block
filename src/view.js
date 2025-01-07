import { createRoot } from 'react-dom/client';

import './style.scss';
import Style from './Components/Common/Style';

const containerEls = document.querySelectorAll('.wp-block-b-blocks-container');
containerEls?.forEach(containerEl => {
  const attributes = JSON.parse(containerEl.dataset.attributes);
  const styleEl = containerEl.querySelector('.crtbStyle');
  createRoot(styleEl).render(<Style attributes={attributes} mainId={containerEl.id} />);
})