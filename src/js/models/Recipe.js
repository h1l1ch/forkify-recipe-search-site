import axios from 'axios';

export default class Recipe {
    constructor (id) {
        this.id = id;
    }

    async getRecipe () {
        try {
            // API call receiving recipe data from the server
            const res = await axios (`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.author = res.data.recipe.publisher;
            this.image = res.data.recipe.image_url;
            this.title = res.data.recipe.title;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        } catch (error) {
            console.log(error)
        };
    } 

    calcTime () {
        const ingInt = this.ingredients.length;
        const periods = Math.ceil(ingInt / 3);
        this.time = 15 * periods;
    }

    calcServs () {
        this.servings = 4;
    }

    parseIngr () {
        const newIngredients = this.ingredients.map(ingredient => {
            // 1. Universal Units
            ingredient.toLowerCase();
            const unitsLong = ['teaspoons', 'teaspoon', 'tablespoons', 'tablespoon', 'ounces', 'ounce', 'cups', 'pounds'];
            const unitsShort = ['tsp', 'tsp', 'tbsp', 'tbsp', 'oz', 'oz', 'cup', 'pound'];

            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitsShort[i]) // ingredients is a string not an array thus unitsLong strings can be replaced by the unitsShort element with the same index. 
            });
                // 2. Remove parenthesis
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
        
            
            // 3. Parse the ingredients into three parts: count, units, ingredient
            const arrayIng = ingredient.split(' ');
            const unitIndex = arrayIng.findIndex(el => unitsShort.includes(el));

            // There are three possible cases 
            let objIng;
            if (unitIndex > -1) {
                // Case 1: There IS a UNIT
                let count
                if (unitIndex > 1) {
                    count = eval(arrayIng.slice(0, unitIndex).join('+'));
                } else {
                    count = eval(arrayIng[0].replace('-', '+'));
                }
                objIng = {
                    count,
                    unit: arrayIng[unitIndex],
                    ingredient: arrayIng.slice(unitIndex + 1).join(' ') 
                }

            } else if (parseInt(arrayIng[0], 10)) {
                // Case 2: There IS NO UNIT, but there IS a NUMBER
                objIng = {
                    count: parseInt(arrayIng[0]).toFixed(2),
                    unit: '',
                    ingredient: arrayIng.slice(1).join(' ') 
                }
            } else if (unitIndex === -1) {
                // Case 3: There IS NO UNIT
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient
                }
            }
            return objIng;
        })
        this.ingredients = newIngredients;
    }

    updateServings (type) {
        console.log('method is working')
        // Update Servings
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1; 
        // Update Ingredients 
        this.ingredients.forEach(el =>( el.count *= (newServings / this.servings)));
        this.servings = newServings;
    }
} 


