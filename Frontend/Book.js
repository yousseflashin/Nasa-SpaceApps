var divCount = 0; 
function addDiv() {

  if (divCount < 7) {
    var newDiv = document.createElement("div");
    newDiv.className = "destination"; 
    var destinationContent =`
      ${document.querySelector('.destination').innerHTML}
      <button class="delete-btn" onclick="deleteDiv(this)">Delete</button>
    `;
    newDiv.innerHTML = destinationContent;
    var form = document.querySelector(".form-container");
    form.appendChild(newDiv);
    divCount++;
  } else {
    alert("You can add a maximum of 8 divs.");
  }
}

function deleteDiv(button) {
  // Get the parent div of the button and remove it
  var divToDelete = button.parentElement;
  divToDelete.remove();

  // Decrement the div count
  divCount--;
}
