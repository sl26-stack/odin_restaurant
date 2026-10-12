import { homepageContent } from "./homepage.js";
import { contactContent } from "./contact.js";
import { menuContent } from "./menu.js";

console.log("Restaurant");
homepageContent();

const buttons = document.querySelectorAll("button");
const content = document.getElementById("content");

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        content.replaceChildren();
        const page = event.target.id;

        if (page == "homepage") {
            homepageContent();
        } else if (page == "menu") {
            menuContent();
        } else if (page == "contact") {
            contactContent();
        } else {
            console.log("Error");
        };
    });
});