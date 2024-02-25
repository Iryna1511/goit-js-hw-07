const listCategories = document.querySelector("#categories");
const items = listCategories.children;

console.log(`Number of categories: ${items.length}`);

for (const item of items) {
  const categoryName = item.firstElementChild.textContent;
    console.log(`Category: ${categoryName}`);
    const numberOfSubItems = item.querySelectorAll(".item li").length;
    console.log(`Elements: ${numberOfSubItems}`);
}

