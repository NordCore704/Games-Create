const button = document.querySelector(".Enter-btn");
const clearBtn = document.querySelector(".clear-list");
const textField = document.querySelector(".input-field");
const listItems = document.querySelector(".list-items");

//This event listener adds the to-do to the empty div along with the delete to-do button and the done button to the to-do app
button.addEventListener("click", (e) => {
//  Get the value of the input field
  e = textField.value;
  
// Create the to do list from user input with the delete and done button

// This section creates our items
  let newParagraph = document.createElement("p");
  let newButton = document.createElement("button");
  let doneButton = document.createElement("button");

// This section assigns the content of the to-do items to variables
  let buttonIcon = document.createTextNode("❌");
  let newNode = document.createTextNode(e);
  let buttonDoneIcon = document.createTextNode('✅');

// button are assigned class names here
  newButton.className = "deleteItem";
  doneButton.className = "markDone";

// here, the content variables are appended to our elements created earlier
  newButton.appendChild(buttonIcon);
  newParagraph.appendChild(newNode);
  doneButton.appendChild(buttonDoneIcon)
  listItems.appendChild(newParagraph);
  listItems.appendChild(newButton);
  listItems.appendChild(doneButton);

  // This If Statement takes care of the edge case of an empty input, it stops the app from creating an empty paragraph and appending it to the to-do list
  if (e == "") {
    listItems.removeChild(newParagraph);
    listItems.removeChild(newButton);
    listItems.removeChild(doneButton);
  }
  // The delete to-do button listens for click events and deletes the whole elements on the line
  newButton.addEventListener("click", () => {
    listItems.removeChild(newParagraph);
    listItems.removeChild(newButton);
    listItems.removeChild(doneButton);
  });

  // This done button button has a click event listener to signify done items on the to-do list by adding styles to it
  doneButton.addEventListener('click', () => {
    newParagraph.style.backgroundColor = "Gray";
    newParagraph.style.borderColor = "black";
    newParagraph.style.textDecoration = 'line-through';
    newParagraph.style.opacity = '0.5';
  })
});


// An event listener to clear current to-do list 
clearBtn.addEventListener('click', () => {
  // listItems.textContent = ''
  while(listItems.lastElementChild){
    listItems.removeChild(listItems.lastElementChild);
  }
})
