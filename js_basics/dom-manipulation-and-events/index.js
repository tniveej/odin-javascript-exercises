const container = document.querySelector("#container")

const redText = document.createElement('p');
redText.style.color = 'red';
redText.textContent = "Hey I'm Red";
container.appendChild(redText);

const blueH3 = document.createElement('h3');
blueH3.style.color = 'blue';
blueH3.textContent = "I'm a blue h3!";
container.appendChild(blueH3);

const div = document.createElement('div');
div.style.backgroundColor= 'pink';
div.style.border = "2px solid black";
container.appendChild(div);

const text_h1 = document.createElement('h1');
text_h1.textContent = "I'm a div";
div.appendChild (text_h1);

const text_p = document.createElement('p');
text_p.textContent = "Me too";
div.appendChild(text_p)

// the JavaScript file
const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");
btn.addEventListener("click", () => alert("Hello World"));
