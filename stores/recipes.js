import { makeAutoObservable } from "mobx";
const defaultRecipeItems = [{
  id: "Tas6BePoW6xoanUy8onuG",
  ingridients: [
    {
      id: "Xbi4vCIKIQlfXI5EOBcvz",
      name: "ingridient",
      quantity: "2",
    },
  ],
  steps: [
    {
      id: "NKQ5KT_x0swgGqT8jmxaM",
      name: "step",
    },
  ],
  values: {
    name: "Name",
  },
},
{
  id: "Tab6BePoW6xoanUy8onuG",
  ingridients: [
    {
      id: "Xbi3vCIKIQlfXI5EOBcvz",
      name: "ingridient",
      quantity: "2",
    },
  ],
  steps: [
    {
      id: "NKQ4KT_x0swgGqT8jmxaM",
      name: "step",
    },
  ],
  values: {
    name: "Name new",
  },
  stars: 3,
}]
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
  deleteAll() {
    this.recipes = []
  }
}
export default new Recipes()