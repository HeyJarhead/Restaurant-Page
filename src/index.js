
import { loadHeader, loadImage, loadDescription, createTabs  } from './main-load';
import { homeTab, homeClicked } from './tab-module';
import './style.css';

// Create header
createTabs();

const container = document.getElementById("container");
container.appendChild(loadHeader());
container.appendChild(loadImage());
container.appendChild(loadDescription());

/// Tab switch logic goes here to hide/ show the contents of the tab
// add dom credits for stuff taken
/// Add tab switching functions to be called 
// 