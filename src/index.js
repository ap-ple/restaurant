import "./styles.css";

import homeContent from "./homeContent";
import menuContent from "./menuContent";
import contactContent from "./contactContent";

import loadContent from "./loadContent";

const main = document.body.querySelector("main");

const navigationMap = {
   "home": homeContent,
   "menu": menuContent,
   "contact": contactContent,
};

for (const pageName in navigationMap) {
   const button = document.getElementById(pageName);
   const content = navigationMap[pageName];

   button.addEventListener("click", () => loadContent(main, content));
}

loadContent(main, homeContent);