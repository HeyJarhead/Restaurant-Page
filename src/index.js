
import { loadHeader, loadImage, loadDescription, createTabs  } from './main-load';
import { homeTab, homeClicked } from './home-tab';

// Create header
createTabs();

const container = document.getElementById("container");
container.appendChild(loadHeader());
container.appendChild(loadImage());
container.appendChild(loadDescription());


// add dom credits for stuff taken
/// Add tab switching functions to be called 
// 