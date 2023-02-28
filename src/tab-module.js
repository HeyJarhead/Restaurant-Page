import './style.css';
import Lucas from './img/MacLucas.jpg'  // Image source: ai generated from https://this-person-does-not-exist.com/en 
function homeTab() {
    const homeContainer = document.createElement('div');
    homeContainer.id = "content-container";
        const homeStoryHeader = document.createElement('h2');
        homeStoryHeader.className = "header";
        homeStoryHeader.textContent = "What is Galatic Sushi?";
        homeContainer.appendChild(homeStoryHeader);
            const homeStory = document.createElement('p');
            homeStory.textContent = "Galatic Sushi is the best place for sushi or any other type of fish rolls (also known as Maki.)" +
            " Mac Lucas, our owner, was wandering around Earth wondering if there was any good sushi restaurants around..." +
            " unfortunately none were good enough for him. There was no hope. Mac Lucas looked up into the sky and realized" + 
            " there was hope... Mac Lucas, he had to be the hope and thus Galatic Sushi was born.";
            homeContainer.appendChild(homeStory);
            //homeStoryHeader.appendChild(homeStory);
        const pitchHeader = document.createElement("h2");
        pitchHeader.className = "header";
        pitchHeader.textContent = "Why eat here over other sushi places?";
        homeContainer.appendChild(pitchHeader)
            const pitch = document.createElement('p');
            pitch.textContent = "The Galatic Sushi experience is not like any other experience. Here, you can have the atmoshpere of" +
            " being in a space lounge while having a top of the line sushi dish at an affordable price."
            homeContainer.appendChild(pitch);
            //pitchHeader.appendChild(pitch);
    // homeContainer.appendChild(homeStoryHeader);
    // homeContainer.appendChild(pitchHeader);
    return homeContainer;
}
/// html will change class name to hidden on the specific tab
/// css will hide any class name with hidden
/// js will have the change listener 
function homeClicked() {
    const homeTab = document.getElementById("home");
    const show = document.getElementById("content-container");
    const contactTab = document.getElementById("contact");
    const menuTab = document.getElementById("menu");
        if (homeTab.className === "clicked") {
            return;
        }
    homeTab.className = "clicked";
    contactTab.className = "unclicked";
    menuTab.className = "unclicked";
    show.replaceWith(loadHomeContents());
}
function contactClicked() {
    const homeTab = document.getElementById("home");
    const show = document.getElementById("content-container");
    const contactTab = document.getElementById("contact");
    const menuTab = document.getElementById("menu");
        if (contactTab.className === "clicked"){
        return;
        }
    homeTab.className = "unclicked";
    contactTab.className = "clicked";
    menuTab.className = "unclicked";
    show.replaceWith(loadContactContents());
}
function menuClicked() {
    const homeTab = document.getElementById("home");
    const contactTab = document.getElementById("contact");
    const menuTab = document.getElementById("menu");
    homeTab.className = "unclicked";
    contactTab.className = "unclicked";
    menuTab.className = "clicked";
}

function loadHomeContents(){
    const homeContainer = document.createElement('div');
    homeContainer.id = "content-container";
        const homeStoryHeader = document.createElement('h2');
        homeStoryHeader.className = "header";
        homeStoryHeader.textContent = "What is Galatic Sushi?";
        homeContainer.appendChild(homeStoryHeader);
            const homeStory = document.createElement('p');
            homeStory.textContent = "Galatic Sushi is the best place for sushi or any other type of fish rolls (also known as Maki.)" +
            " Mac Lucas, our owner, was wandering around Earth wondering if there was any good sushi restaurants around..." +
            " unfortunately none were good enough for him. There was no hope. Mac Lucas looked up into the sky and realized" + 
            " there was hope... Mac Lucas, he had to be the hope and thus Galatic Sushi was born.";
            homeContainer.appendChild(homeStory);
            //homeStoryHeader.appendChild(homeStory);
        const pitchHeader = document.createElement("h2");
        pitchHeader.className = "header";
        pitchHeader.textContent = "Why eat here over other sushi places?";
        homeContainer.appendChild(pitchHeader)
            const pitch = document.createElement('p');
            pitch.textContent = "The Galatic Sushi experience is not like any other experience. Here, you can have the atmoshpere of" +
            " being in a space lounge while having a top of the line sushi dish at an affordable price."
            homeContainer.appendChild(pitch);
            //pitchHeader.appendChild(pitch);
    // homeContainer.appendChild(homeStoryHeader);
    // homeContainer.appendChild(pitchHeader);
    return homeContainer;
}
function loadContactContents(){
    const contactContainer = document.createElement('div');
    contactContainer.id = "content-container";
        // Mac Lucas Picture
        const lucasIcon = new Image();
        lucasIcon.src = Lucas;
        lucasIcon.className = "lucas";
        contactContainer.appendChild(lucasIcon);
        // Mac Lucas name
        const name = document.createElement('h2')
        name.className = "header";
        name.textContent = "Mac Lucas"
        contactContainer.appendChild(name);
        // Lucas Email
        const email = document.createElement("div")
        email.textContent = "MacLucas87@fakeemail.com";
        contactContainer.appendChild(email);
        // Lucas number 
        const number = document.createElement("div");
        number.textContent = "555-555-5555";
        contactContainer.appendChild(number);

    return contactContainer;
}
export {
    homeTab,
    homeClicked,
    contactClicked,
    menuClicked
}