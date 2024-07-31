const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Add your task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let editSpan = document.createElement("button");
        editSpan.innerHTML = "✏️";
        editSpan.classList.add("edit");
        li.appendChild(editSpan);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        }
    inputBox.value = ''
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    else{
        editText(e.target.parentElement);
    }
}, false);
function editText(element) {
    console.log(element);
    const childNodes = Array.from(element.childNodes);
    const textNode = childNodes.find(node => node.nodeType === Node.TEXT_NODE);
    console.log(textNode);
    const updated = prompt('What is the updated content?');

    if (textNode) {
        textNode.textContent = updated;
    }
}

function showTask() {
    
    console.log(listContainer)

    listContainer.querySelectorAll('.edit').forEach(editButton => {
        editButton.addEventListener('click', (e) => {
            console.log(7)
            editText(e.target.parentElement);
        });
    });
}

showTask();