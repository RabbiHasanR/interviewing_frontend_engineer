/*
  Hi there! Thanks for taking on this code test. The requirements are listed below:
  
  1. Create a "Foods" class or constructor that will take two arguements: a root element and a data object (foodData).
  2. Render all of the items in the data object into the DOM with the root element as the parent
  3. If the user clicks a food item, it should be removed from the list
  
  Rules:
  - Only vanilla JS
  - Feel free to use Google, Bing, DuckDuckGo to look things up
  - Time limit: 30 minutes
*/

/* DO NOT MODIFY */
const rootElement = document.querySelector(".foods");

const foodData = [
  {
    id: 1,
    image: "🌮",
    name: "taco",
  },
  {
    id: 2,
    image: "🍔",
    name: "burger",
  },
  {
    id: 3,
    image: "🍆",
    name: "eggplant",
  },
  {
    id: 4,
    image: "🍎",
    name: "apple",
  },
  {
    id: 5,
    image: "🥞",
    name: "pancakes",
  },
];
/* DO NOT MODIFY */

/** YOUR CODE BELOW **/

class Foods {
  constructor(el, foodData) {
    this._root = el;
    this._data = foodData;
  }

  renderList() {
    this._root.addEventListener("click", (event) => {
      const { target } = event;
      target.remove();
    });

    const fragment = document.createDocumentFragment();

    this._data.forEach((i) => {
      fragment.appendChild(this.createFoodItem(i));
    });

    this._root.appendChild(fragment);
  }

  createFoodItem(item) {
    const itemEl = document.createElement("div");
    itemEl.innerText = item.image;
    itemEl.classList.add(item.name);

    return itemEl;
  }
}


const foods = new Foods(rootElement, foodData);
foods.renderList();
