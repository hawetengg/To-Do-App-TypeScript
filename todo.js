var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("list-container");
function addTask() {
    if (inputBox.value === '') {
        alert("Add your task");
    }
    else {
        var li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        var editSpan = document.createElement("button");
        editSpan.innerHTML = "✏️";
        editSpan.classList.add("edit");
        li.appendChild(editSpan);
        var span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
}
listContainer.addEventListener("click", function (e) {
    var _a;
    var target = e.target;
    if (target.tagName === "LI") {
        target.classList.toggle("checked");
    }
    else if (target.tagName === "SPAN") {
        (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    }
    else {
        editText(target.parentElement);
    }
}, false);
function editText(element) {
    console.log(element);
    var childNodes = Array.from(element.childNodes);
    var textNode = childNodes.find(function (node) { return node.nodeType === Node.TEXT_NODE; });
    console.log(textNode);
    var updated = prompt('What is the updated content?');
    if (textNode && updated !== null) {
        textNode.textContent = updated;
    }
}
function showTask() {
    console.log(listContainer);
    listContainer.querySelectorAll('.edit').forEach(function (editButton) {
        editButton.addEventListener('click', function (e) {
            console.log(7);
            editText(e.target.parentElement);
        });
    });
}
showTask();
