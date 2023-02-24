import Icon from './img/sushi.jpg';
import { homeClicked, homeTab } from './home-tab';
function loadHeader()  { 
    const header = document.createElement('h1');
    header.textContent = "Galatic Sushi";
    return header;
}

function loadImage() {
    const sushiPic = new Image();
    sushiPic.src = Icon;
    return sushiPic;
}

function loadDescription() {
    const description = document.createElement('div');
    description.innerHTML = "This sushi will send your taste buds out of this world!"
    return description;
}

function createTabs() {
    const header = document.createElement('header');
 document.body.append(header);

// create the navigation container
const navContainer = document.createElement("nav");
header.appendChild(navContainer);

// create ul of tabs
const tabs = document.createElement('ul');
const home = document.createElement("div");
home.textContent = "Home";
home.id = "home";
home.className = "show";
home.addEventListener("click", homeClicked);
// add onclick listener fuction 

const menu = document.createElement("div");
menu.textContent = "Menu";
menu.id = "menu";
menu.className = "hidden";

// add a menu of dishes
// add css hidden tag
// add onclick listener function
const contact = document.createElement('div');
contact.textContent = "Contact";
contact.id = "contact";
contact.className = "hidden";
// add hours and contacts 
// add css hidden tag 
// add onclick listner function
navContainer.appendChild(tabs);
tabs.appendChild(home);
tabs.appendChild(menu);
tabs.appendChild(contact);
navContainer.appendChild(homeTab());
}
export {
    loadHeader,
    loadImage,
    loadDescription,
    createTabs
};