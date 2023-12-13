const nameInput = document.querySelector("#name-input");
const newNameInput = document.querySelector("#name-output");

nameInput.addEventListener("input", updateName);

function updateName() {
    const newText = nameInput.value.trim();
    newText ? newNameInput.textContent = newText : newNameInput.textContent = "Anonymous";
    
}





















