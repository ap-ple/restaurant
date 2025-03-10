
function loadHomeContent(root) {
   const main = root.body.querySelector("main");

   const welcome = root.createElement("h2");
   welcome.innerText = "Welcome!";

   main.appendChild(welcome);
}

export default loadHomeContent;