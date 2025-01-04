// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redText = document.createElement("p");
redText.textContent = "Hey I'm red!";
redText.style.color = "red";

const heading3 = document.createElement("h3");
heading3.textContent = "I'm a blue h3!";
heading3.style.color = "blue";  

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";

const p = document.createElement("p");
p.textContent = "ME TOO!";

const div = document.createElement("div");
div.appendChild(heading1);
div.appendChild(p);

container.appendChild(content);
container.appendChild(redText);
container.appendChild(heading3);
container.appendChild(div);


function onClickHandler(e){
    console.log(e.target);
    e.target.classList.toggle("active");
}
