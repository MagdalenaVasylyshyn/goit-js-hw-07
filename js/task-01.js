const categories = document.querySelector("#categories");
const item = document.querySelectorAll('.item');
const h2 = document.querySelector("h2");
const ul = document.querySelector("ul");
const li = document.querySelector("li");

console.log(`Number of categories: ${item.length}`)

item.forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.children.length}`);
});