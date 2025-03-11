import removeChildren from "./removeChildren";

function loadHomeContent(root, parent) {
   removeChildren(parent);

   const welcome = root.createElement("h2");
   welcome.innerText = "Welcome!";

   parent.appendChild(welcome);
}

export default loadHomeContent;