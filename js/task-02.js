const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = ingredients.map(ingredient => {
  let ingredientItem = document.createElement('li')
  ingredientItem.textContent = ingredient
  ingredientItem.classList.add("item")
    return ingredientItem
  })
  const ingredientsList = document.querySelector("#ingredients")
    ingredientsList.append(...ingredientsEl)
