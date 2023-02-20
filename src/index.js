
import { loadHeader, loadImage, loadDescription  } from './main-load';

// Create header
const header = document.createElement('header');
 document.body.append(header);

// create the navigation container
const navContainer = document.createElement("nav");
header.appendChild(navContainer);

// create ul of tabs
const tabs = document.createElement('ul');
const home = document.createTextNode("Home");
const menu = document.createTextNode("Menu");
const contact = document.createTextNode('Contact');
navContainer.appendChild(tabs);
tabs.appendChild(home);
tabs.appendChild(menu);
tabs.appendChild(contact);


const container = document.getElementById("container");
container.appendChild(loadHeader());
container.appendChild(loadImage());
container.appendChild(loadDescription());