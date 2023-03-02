
import { loadHeader, loadImage, loadDescription, createTabs  } from './main-load';
import './style.css';

// create header
createTabs();

// appends children from hard coded html DOM
const container = document.getElementById("container");
container.appendChild(loadHeader());
container.appendChild(loadImage());
container.appendChild(loadDescription());