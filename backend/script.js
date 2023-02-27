let button = document.querySelector(".btn");
let UL = document.querySelector(".myUl");


button.addEventListener("click", () => {
    let extractedText = document.querySelector(".form-control").value;
    // alert(extractedText);
    let TextNode = document.createTextNode(extractedText);
    let listItem = document.createElement("li");
    listItem.appendChild(TextNode);
    UL.appendChild(listItem);
});