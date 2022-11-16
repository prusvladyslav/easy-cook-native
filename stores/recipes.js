import { makeAutoObservable } from "mobx";
const defaultRecipeItems = [
  {
  id: "Tas6BePoW6xoanUy8onuG",
  ingridients: [
    {
      id: "Xbi4vCIKIQlfXI5EOBcvz",
      name: "all-purpose flour",
      quantity: "2 cups",
    },
    {
      id: "Xbi5vCIKIQlfXI5EOBcvz",
      name: "baking powder",
      quantity: "3 teaspoons",
    },
    {
      id: "Xbi6vCIKIQlfXI5EOBcvz",
      name: "salt",
      quantity: "1/2 teaspoon ",
    },
    {
      id: "Xbi7vCIKIQlfXI5EOBcvz",
      name: "white sugar",
      quantity: "3/4 cup",
    },
    {
      id: "Xbi8vCIKIQlfXI5EOBcvz",
      name: "egg",
    },
    {
      id: "Xbi8vCIKIQlfXI1EsBcvz",
      name: "milk",
      quantity: "1 cup",
    },
    {
      id: "Xbi9vCIKIQlfXI1EOBcvz",
      name: "vegetable oil",
      quantity: "1/4 cup",
    },
  ],
  steps: [
    {
      id: "NKQ5KT_x0swgGqT8jmxaM",
      name: "Preheat the oven to 400 degrees F (200 degrees C). Grease a 12-cup muffin tin or line cups with paper liners.",
    },
    {
      id: "NKQ4KT_x0swgGqT8jmxaM",
      name: "Stir flour, baking powder, salt, and sugar together in a large bowl; make a well in the center.",
    },
    {
      id: "NKQ3KT_x0swgGqT8jmxaM",
      name: "Beat egg with a fork in a small bowl or 2-cup measuring cup; whisk in milk and oil. Pour egg mixture all at once into flour mixture; mix quickly and lightly with a fork until just moistened. The batter will be lumpy. (Fold in additional ingredients if using; see variations below). Spoon batter into the prepared muffin cups, filling each 3/4 full.",
    },
    {
      id: "NKQ2KT_x0swgGqT8jmxaM",
      name: "Bake in the preheated oven until tops spring back when lightly pressed, about 25 minutes.",
    },
  ],
  values: {
    name: "Best ever muffins",
  },
}
]
class Recipes {
  // recipes = []
  recipes = defaultRecipeItems
  sortBy = 'rating'
  constructor() {
    makeAutoObservable(this)
  }
  addNewRecipe(recipe) {
    this.recipes.push(recipe)
  }
  deleteRecipe(id) {
    this.recipes = this.recipes.filter((recipe) => recipe.id !== id)
  }
  getLastRecipe() {
    return this.recipes[this.recipes.length - 1]
  }
  getRecipeById(id) {
    return this.recipes.filter((recipe) => recipe.id === id)[0]
  }
  hasRecipe(){
    return this.recipes.length > 0
  }
  isRecipeComplete(id) {
    const thisRecipe = this.getRecipeById(id)
    const ingridientsComplete = thisRecipe?.ingridients.every((ingridient) => ingridient.checked === true)
    const stepsComplete = thisRecipe?.steps.every((step) => step.checked === true)
    return ingridientsComplete && stepsComplete
  }
  isRecipeInProgress(id){
    const thisRecipe = this.getRecipeById(id)
    const ingridientsInProgress = thisRecipe?.ingridients.some((ingridient) => ingridient.checked === true)
    const stepsInProgress= thisRecipe?.steps.some((step) => step.checked === true)
    return ingridientsInProgress || stepsInProgress
  }
  getItemById(type, id, recipeId) {
    return this.getRecipeById(recipeId)[type].filter((item) => item.id === id)[0]
  }
  editItemById(type, id, recipeId, propetry, value) {
    this.getRecipeById(recipeId)[type].filter((item) => item.id === id)[0][propetry] = value
  }
  startOverRecipe(id) {
    this.getRecipeById(id).ingridients.forEach((item) => item.checked = false)
    this.getRecipeById(id).steps.forEach((item) => item.checked = false)
  }
  addNewPropetyToRecipe(recipeId, property, value) {
    this.getRecipeById(recipeId)[property] = value
  }
  getAllRecipesSorted() {
    if (this.sortBy === 'oldest') return this.recipes
    if (this.sortBy === 'newest') return this.recipes.slice().reverse()
    if (this.sortBy === 'rating') {
      function compare( a, b ) {
        if (a.stars && !b.stars) return -1
        if (b.stars && !a.stars) return 1
        if ( a.stars < b.stars){
          return 1;
        }
        if ( a.stars> b.stars){
          return -1;
        }
        return 0;
      }
      return this.recipes.slice().sort(compare)
    }
  }
  changeSort(value) {
    this.sortBy = value
  }
  deleteAllRecipes() {
    this.recipes = []
  }
}
export default new Recipes()