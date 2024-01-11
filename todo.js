function addtask() {
    var newtask = document.createElement("li");
    var input = document.getElementById("mytask").value.trim();
    
    if (input === "") {
        alert("Enter a task");
    } else {
        var textNode = document.createTextNode(input);
        newtask.appendChild(textNode);

        var span = document.createElement("SPAN");
        
        var dele = document.createElement("BUTTON");
        span.className = "close";
        var edit = document.createElement("button");
        edit.innerText = "Edit";
        edit.onclick = function() {
            var newText = prompt("Edit the task:", textNode.nodeValue);
            if (newText !== null) {
                textNode.nodeValue = newText;
            }
        }
        dele.innerText = "DELETE";
        dele.onclick = function() {
            var div = this.parentElement.parentElement;
            div.style.display = "none";
        };
        
        span.appendChild(dele); 
        span.appendChild(edit);
        newtask.appendChild(span);

        document.getElementById("myul").appendChild(newtask);
    }
    document.getElementById("mytask").value = "";
    console.log(document.getElementById('myul').childElementCount);
}
// script.js File 
const container = document.querySelector("#myul");
function onMouseDrag({ movementX, movementY }) {
	let getContainerStyle = window.getComputedStyle(container);
	let leftValue = parseInt(getContainerStyle.left);
	let topValue = parseInt(getContainerStyle.top);
	container.style.left = `${leftValue + movementX}px`;
	container.style.top = `${topValue + movementY}px`;
}
container.addEventListener("mousedown", () => {
	container.addEventListener("mousemove", onMouseDrag);
});
document.addEventListener("mouseup", () => {
	container.removeEventListener("mousemove", onMouseDrag);
});
