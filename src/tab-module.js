import './style.css';
import Lucas from './img/MacLucas.jpg';  // Image source: ai generated from https://this-person-does-not-exist.com/en 
import Pic1 from './img/maki.png';
import Pic2 from './img/sashimi.png';
import Pic3 from './img/uramaki.png';
import Pic4 from './img/spicy.png';
import Pic5 from './img/boba.jpg';
import Pic6 from './img/cola.jpg';
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
    const show = document.getElementById("content-container");
    const contactTab = document.getElementById("contact");
    const menuTab = document.getElementById("menu");
    homeTab.className = "unclicked";
    contactTab.className = "unclicked";
    menuTab.className = "clicked";
    show.replaceWith(loadMenuContents());
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
function loadMenuContents(){
    //Main contentcontainer 
    const container = document.createElement('div');
    container.id = "content-container";
    // Dish Title
    const dishTitle = document.createElement('h2');
    dishTitle.className = "header";
    dishTitle.textContent = "Galatic Dishes";
    container.appendChild(dishTitle);
        //item 1
        const item1 = document.createElement('div');
        item1.className = "item-container";
            // image
            const maki = new Image();
            maki.src = Pic1;
            maki.className = "item-image";
            item1.appendChild(maki);
            // title
            const title = document.createElement('h2');
            title.className = "item-title";
            title.textContent = "Galaxy Famous Maki";
            item1.appendChild(title);
            // description
            const description = document.createElement('p');
            description.className = "item-description";
            description.textContent = "Our Galaxy Famous Maki comes with 12 sushi rolls consisting of salmon, rice, vegetables and seaweed.";
            item1.appendChild(description);
            // price
            const price = document.createElement('p');
            price.className = "item-price";
            price.textContent = "$10.99";
            item1.appendChild(price);
            container.appendChild(item1);
        //item 2
        const item2 = document.createElement('div');
        item2.className = "item-container";
            // image
            const sashimi = new Image();
            sashimi.src = Pic2;
            sashimi.className = "item-image";
            item2.appendChild(sashimi);
            // title
            const title2 = document.createElement('h2');
            title2.className = "item-title";
            title2.textContent = "Sahsimi From Saturn";
            item2.appendChild(title2);
            // description
            const description2 = document.createElement('p');
            description2.className = "item-description";
            description2.textContent = "A raw piece of salmon season with your choice of miso, soy sauce, wasabi, or ginger." +
            " Dish also comes with a side of vinegared rice.";
            item2.appendChild(description2);
            // price
            const price2 = document.createElement('p');
            price2.className = "item-price";
            price2.textContent = "$8.99";
            item2.appendChild(price2);
            container.appendChild(item2);
        //item 3
        const item3 = document.createElement('div');
        item3.className = "item-container";
            // image
            const uramaki = new Image();
            uramaki.src = Pic3;
            uramaki.className = "item-image";
            item3.appendChild(uramaki);
            // title
            const title3 = document.createElement('h2');
            title.className = "item-title";
            title.textContent = "Uranus Uramaki";
            item3.appendChild(title3);
            // description
            const description3 = document.createElement('p');
            description3.className = "item-description";
            description3.textContent = "12 inside-out rolls with the seaweed, salmon, vegtables on the inside, with"+
            " rice on the outer layer. Toppings include sesame seed, fish eggs and kewpie mayo.";
            item3.appendChild(description3);
            // price
            const price3 = document.createElement('p');
            price3.className = "item-price";
            price3.textContent = "$11.99";
            item3.appendChild(price3);
            container.appendChild(item3);
        //item 4
        const item4 = document.createElement('div');
        item4.className = "item-container";
            // image
            const spicyTR = new Image();
            spicyTR.src = Pic4;
            spicyTR.className = "item-image";
            item4.appendChild(spicyTR);
            // title
            const title4 = document.createElement('h2');
            title4.className = "item-title";
            title4.textContent = "Spicy Star Tuna Rolls";
            item4.appendChild(title4);
            // description
            const description4 = document.createElement('p');
            description4.className = "item-description";
            description4.textContent = "12 rolls containing tuna, avacado, spicy mayo, sesane seeds and an outer layer of rice. ";
            item4.appendChild(description4);
            // price
            const price4 = document.createElement('p');
            price4.className = "item-price";
            price4.textContent = "$12.99";
            item4.appendChild(price4);
            container.appendChild(item4);
        // Drinks title
        const drinksTitle = document.createElement('h2');
        drinksTitle.className = "header";
        drinksTitle.textContent = "Galatic Drinks"
        container.appendChild(drinksTitle);
        // Boba milk tea
        const item5 = document.createElement('div');
        item5.className = "item-container";
            // image
            const boba = new Image();
            boba.src = Pic5;
            boba.className = "item-image";
            item5.appendChild(boba);
            // title
            const title5 = document.createElement('h2');
            title5.className = "item-title";
            title5.textContent = "Milky Way Milk Tea Boba";
            item5.appendChild(title5);
            // description
            const description5 = document.createElement('p');
            description5.className = "item-description";
            description5.textContent = "Our Galaxy Famous Boba with your milk of choice.";
            item5.appendChild(description5);
            // price
            const price5 = document.createElement('p');
            price5.className = "item-price";
            price5.textContent = "$4.99";
            item5.appendChild(price5);
            container.appendChild(item5);
        // Soda Cola
        const item6 = document.createElement('div');
        item6.className = "item-container";
            // image
            const cola = new Image();
            cola.src = Pic6;
            cola.className = "item-image";
            item6.appendChild(cola);
            // title
            const title6 = document.createElement('h2');
            title6.className = "item-title";
            title6.textContent = "Colder Than Space Cola";
            item6.appendChild(title6);
            // description
            const description6 = document.createElement('p');
            description6.className = "item-description";
            description6.textContent = "A large size fizzy space drink.";
            item6.appendChild(description6);
            // price
            const price6 = document.createElement('p');
            price6.className = "item-price";
            price6.textContent = "$2.99";
            item6.appendChild(price6);
            container.appendChild(item6);
        return container;
}
export {
    homeTab,
    homeClicked,
    contactClicked,
    menuClicked
}