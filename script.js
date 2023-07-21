function addTask() { 
  let taskInput = document.getElementById("onInput");
  let taskValue = taskInput.value.trim();

  if (taskValue !== "") {
   
  let listItem = document.createElement("li");

    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      listItem.style.textDecoration = this.checked ? "line-through" : "none";
    });

    let taskTextNode = document.createTextNode(taskValue);

   
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      listItem.remove();
    });
listItem.appendChild(checkbox);
  listItem.appendChild(taskTextNode);
    listItem.appendChild(removeButton);
    let todoList = document.getElementById("todoList");
    todoList.appendChild(listItem);

    taskInput.value = "";
  }
}
   
    


