import './style.css';
function homeTab() {
    const homeContainer = document.createElement('div');
    homeContainer.id = "show-home";
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
    const show = document.getElementById("test");
    const contactTab = document.getElementById("contact");
    const menuTab = document.getElementById("menu");
    homeTab.className = "clicked";
    contactTab.className = "unclicked";
    menuTab.className = "unclicked";
    show.replaceWith(test2());
}
function contactClicked() {
    const homeTab = document.getElementById("home");
    const show = document.getElementById("show-home");
    const contactTab = document.getElementById("contact");
    const menuTab = document.getElementById("menu");
    homeTab.className = "unclicked";
    contactTab.className = "clicked";
    menuTab.className = "unclicked";
    show.replaceWith(test());
}
function menuClicked() {
    const homeTab = document.getElementById("home");
    const contactTab = document.getElementById("contact");
    const menuTab = document.getElementById("menu");
    homeTab.className = "unclicked";
    contactTab.className = "unclicked";
    menuTab.className = "clicked";
}
function test(){
    const test = document.createElement('div');
    test.id = "test";
    test.textContent = 'test';
    return test;
}
function test2(){
    const homeContainer = document.createElement('div');
    homeContainer.id = "show-home";
        const homeStoryHeader = document.createElement('h2');
        homeStoryHeader.textContent = "What is Galatic Sushi?";
            const homeStory = document.createElement('p');
            homeStory.textContent = "Galatic Sushi is the best place for sushi or any other type of fish rolls (also known as Maki.)" +
            " Mac Lucas, our owner, was wandering around Earth wondering if there was any good sushi restaurants around..." +
            " unfortunately none were good enough for him. There was no hope. Mac Lucas looked up into the sky and realized" + 
            " there was hope... Mac Lucas, he had to be the hope and thus Galatic Sushi was born.";
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
    homeTab,
    homeClicked,
    contactClicked,
    menuClicked
}