
import fontawesome from '@fortawesome/fontawesome';

import faCameraRetro from '@fortawesome/fontawesome-free-solid/faCameraRetro';
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';
import faTrash from '@fortawesome/fontawesome-free-solid/faTrash';

export default function initFontAwesome() {
  return fontawesome.library.add(faCameraRetro, faUsers, faTrash);
}

