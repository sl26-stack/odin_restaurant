function homepageContent() {
    const content = document.getElementById("content");

    const heading = document.createElement("h1");
    heading.textContent = "My Restaurant";
    content.appendChild(heading);

    const resDesc = document.createElement("p");
    resDesc.textContent = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.";
    content.appendChild(resDesc);

    const tradingHours = document.createElement("table");
    content.appendChild(tradingHours);
};

export {homepageContent};

