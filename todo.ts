const inputBox = document.getElementById("input-box") as HTMLInputElement;
const listContainer = document.getElementById("list-container") as HTMLElement;

function addTask(): void {
    if (inputBox.value === '') {
        alert("Add your task");
    } else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        const editSpan = document.createElement("button");
        editSpan.innerHTML = "✏️";
        editSpan.classList.add("edit");
        li.appendChild(editSpan);

        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
}

listContainer.addEventListener("click", function(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    if (target.tagName === "LI") {
        target.classList.toggle("checked");
    } else if (target.tagName === "SPAN") {
        target.parentElement?.remove();
    } else {
        editText(target.parentElement as HTMLElement);
    }
}, false);

function editText(element: HTMLElement): void {
    console.log(element);
    const childNodes = Array.from(element.childNodes);
    const textNode = childNodes.find(node => node.nodeType === Node.TEXT_NODE) as Text;
    console.log(textNode);
    const updated = prompt('What is the updated content?');

    if (textNode && updated !== null) {
        textNode.textContent = updated;
    }
}

function showTask(): void {
    console.log(listContainer);

    listContainer.querySelectorAll('.edit').forEach(editButton => {
        editButton.addEventListener('click', (e) => {
            console.log(7);
            editText((e.target as HTMLElement).parentElement as HTMLElement);
        });
    });
}

showTask();
