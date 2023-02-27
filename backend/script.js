let button = document.querySelector(".btn");
let UL = document.querySelector(".myUl");


button.addEventListener("click", () => {
    let extractedText = document.querySelector(".form-control").value;
    if (extractedText == "") {
        alert("Empty field not Allowed");
    }
    else {
        // alert(extractedText);
        let TextNode = document.createTextNode(extractedText);
        let listItem = document.createElement("li");
        listItem.appendChild(TextNode);

        listItem.classList.add("noDot");

        UL.appendChild(listItem);

        document.querySelector(".form-control").value = "";
    }
});