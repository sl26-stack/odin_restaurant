function contactContent() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Information";
    content.appendChild(heading);
};

export { contactContent };