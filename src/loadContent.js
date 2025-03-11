import removeChildren from "./removeChildren";

function loadContent(parent, elements) {
   removeChildren(parent);

   for (const element of elements) {
      parent.appendChild(element);
   }
}

export default loadContent;