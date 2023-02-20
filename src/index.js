

import { loadHeader, loadImage, loadDescription  } from './main-load';
const container = document.getElementById("container");
container.appendChild(loadHeader());
container.appendChild(loadImage());
container.appendChild(loadDescription());