import loadContent from "./loadContent";

const heading = document.createElement("h2");
heading.innerText = "Menu";

const menu = document.createElement("ul");
menu.classList.add("menu");

function MenuItem(name, price, description) {
   const menuItem = document.createElement("li");

   const nameElement = document.createElement("h3");
   nameElement.innerText = name;

   const priceElement = document.createElement("div")
   priceElement.innerText = price;

   const descriptionElement = document.createElement("div");
   descriptionElement.innerText = description;
   descriptionElement.classList.add("description");

   loadContent(menuItem, [nameElement, priceElement, descriptionElement])

   return menuItem;
}

menu.appendChild(new MenuItem(
   "Steak Frites", 38,
   "12oz New York strip served with shoestring fries and house-made bearnaise sauce"
   )
);

menu.appendChild(new MenuItem(
   "Caesar Salad", 12,
   "Chopped romaine lettuce with caesar dressing, cracked black pepper, and fried croutons"
   )
);

menu.appendChild(new MenuItem(
   "Catch of the Day", "MP",
   "Fresh-caught bass, halibut, or cod, grilled or fried"
   )
);

menu.appendChild(new MenuItem(
   "Grilled Chicken Sandwich", 18,
   "Dry-rubbed chicken breast, grilled and served on a fresh bread roll with lettuce and tomato"
   )
);

menu.appendChild(new MenuItem(
   "Chocolate Cake", 4,
   "Slice of decadent 3-layer chocolate cake"
   )
);

export default [heading, menu,];