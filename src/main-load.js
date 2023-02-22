import Icon from './img/sushi.jpg';
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
function homeTab() {
    const homeContainer = document.createElement('div');
        const homeStoryHeader = document.createElement('h2');
        homeStoryHeader.textContent = "What is Galatic Sushi?";
            const homeStory = document.createElement('p');
            homeStory.textContent = "Galatic Sushi is the best place for sushi or any other type of fish rolls (also known as Maki.)" +
            " Mac Lucas, our owner, was wandering around Earth wondering if there was any good sushi restaurants around..." +
            " unfortunately none were good enough for him. There was no hope. Mac Lucas looked up into the sky and realized" + 
            " There was hope... Mac Lucas, he had to be the hope and thus Galatic Sushi was born.";
            homeStoryHeader.appendChild(homeStory);
        const pitchHeader = document.createElement("h2");
        pitchHeader.textContent = "Why eat here over other sushi places?";
            const pitch = document.createElement('p');
            pitch.textContent = "The Galatic Sushi experience is not like any other experience. Here, you can have the atmoshpere of" +
            " being in a space lounge while having a top of the line sushi dish at an affordable price."
            pitchHeader.appendChild(pitch);
    homeContainer.appendChild(homeStoryHeader);
    homeContainer.appendChild(pitchHeader);
    return homeContainer;
}
export {
    loadHeader,
    loadImage,
    loadDescription,
    homeTab
};