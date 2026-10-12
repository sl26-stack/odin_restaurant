function menuContent() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Restaurant Menu";
    content.appendChild(heading);
};

export { menuContent };