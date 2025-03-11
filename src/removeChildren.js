
function removeChildren(element) {
   while (element.lastChild) {
      element.removeChild(element.firstChild);
   }
}

export default removeChildren;