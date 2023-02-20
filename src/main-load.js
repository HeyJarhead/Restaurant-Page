import Icon from './img/sushi.jpg';
function loadHeader()  { 
    const header = document.createElement('h1');
    header.innerHTML = "Galatic Sushi";
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