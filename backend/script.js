let button = document.querySelector(".btn"); //Todolist Submit button
let UL = document.querySelector(".myUl"); //Ul in Todolist html

// Contact Form
let contactForm = document.querySelector(".contact-form");

// ContactForm algo
window.onload = function () {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        emailjs.sendForm("service_7mx8nld", "template_epdqyxp", e.target)
            .then(function () {
                Swal.fire({
                    title: "Horray!, You sent us a Form",
                    text: "We'll be back to you ASAP",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK"
                }).then(() => {
                    contactForm.reset();
                });
            }, function (error) {
                Swal.fire({
                    title: "Oops...",
                    text: "Something went Wrong! Please try again later",
                    icon: "error",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK"
                });
            });
    });
};

// Todolist algo
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

