// Import Fancybox

import { Fancybox } from '@fancyapps/ui/dist/fancybox/';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const init = function () {
  Fancybox.bind('[data-fancybox="gallery"]', {
    // Your custom options for a specific gallery
  });
};

document.addEventListener('DOMContentLoaded', init);
