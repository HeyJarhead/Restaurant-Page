import Icon from './img/sushi.jpg';
import { homeClicked, homeTab, menuClicked, contactClicked } from './tab-module';
import './style.css';

// adds static header
function loadHeader()  { 
    const header = document.createElement('h1');
    header.className = "header-main";
    header.textContent = "Galatic Sushi";
    return header;
}

// adds static image
function loadImage() {
    const sushiPic = new Image();
    sushiPic.src = Icon;
    return sushiPic;
    /// img source https://www.japan.go.jp/kizuna/2021/03/sushi_robots.html
}

// add static description 
function loadDescription() {
    const description = document.createElement('div');
    description.className = "description";
    description.innerHTML = "This sushi will send your taste buds out of this world!"
    return description;
}

// adds tabs
function createTabs() {
    const header = document.createElement('header');
 document.body.append(header);

    // create the navigation container
    const navContainer = document.createElement("nav");
    header.appendChild(navContainer);

    // create ul of tabs
    const tabs = document.createElement('ul');

    //add home 
    tabs.id = "tabs";
    const home = document.createElement("div");
    home.textContent = "Home";
    home.id = "home";
    home.className = "clicked";
    home.addEventListener("click", homeClicked);
   
    // add menu 
    const menu = document.createElement("div");
    menu.textContent = "Menu";
    menu.id = "menu";
    menu.className = "unclicked";
    menu.addEventListener("click", menuClicked);

    
    // add contact
    const contact = document.createElement('div');
    contact.textContent = "Contact";
    contact.id = "contact";
    contact.className = "unclicked";
    contact.addEventListener("click", contactClicked);
    
    // append to DOM
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