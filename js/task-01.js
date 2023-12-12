const numberOfCategories = document.querySelector("#categories");
const numberOfItem = numberOfCategories.querySelectorAll(".item");

console.log(`Number of categories: ${numberOfItem.length}`);

numberOfItem.forEach((category) => {
    const categoryName = category.querySelector("h2").textContent;
    const categoryNumber = category.querySelectorAll("ul li").length;
    
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryNumber}`);
});