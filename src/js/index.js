// Global app controller
import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import {elements, renderLoader, removeLoader} from './views/base';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';

// Carries an information about current state
const state = {
    // 1. Search Object
    
    // 2. Search query and list
    
    // 3. Shopping list
    
    // 4. Liked recepies
}

// ***** SEARCH CONTROLLER *****
const controlSearch = async () => {

    // 1. Get query from the view
    const query = searchView.getInput();
    if (query) {
        // 2. Create a new Search object
        state.search = new Search(query);

        // 3. Prepare UI for results (cleaning space / updating)
        searchView.clearButtons();
        searchView.clearInput();
        searchView.clearList();
        renderLoader(elements.totalRes);

        // 4. Call an API
        try {
            await state.search.getResults();
            // 5. Rendering for results
            removeLoader();
            searchView.renderResults(state.search.result);
        } catch (error) {
            console.log(error)
            removeLoader();
        }
    }

}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})

elements.pagesRes.addEventListener('click', e => {
    e.preventDefault();

    
    const button = e.target.closest('.btn-inline');
    if (button) {
        searchView.clearList();
        searchView.clearButtons();
        const pageGoto = parseInt(button.dataset.goto, 10);
        searchView.renderResults(state.search.result, pageGoto)
    }
})

// ***** TESTING CONTROLLER *****
window.addEventListener('load', e => {
    e.preventDefault();
    controlSearch();
})


// ***** RECIPE CONTROLLER *****
const controlRecipe = async () => {
    const id = window.location.hash.replace('#', '');
    
    if (id) {
        state.recipe = new Recipe (id);
        // Creating a new recipe object
        
        // Preparing UI for the results
        recipeView.clearRecipe();
        renderLoader(elements.recipe);
        if (state.search) searchView.hilightSelected(id);
        
        // TESTING
        window.r = state.recipe;
        try {
            // Get recipe data and parse ingredients 
            await state.recipe.getRecipe();
            state.recipe.parseIngr();
            
            // Calculate servings and cooking time
            state.recipe.calcTime();
            state.recipe.calcServs();
            
            // Rendering for the recipe results
            removeLoader();    
            recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
        } catch (error) {
            console.log("Something went wrong. Could not get the recipe :(")
        }
    }
};

// ***** SHOPPING LIST CONTROLLER *****
const controlList = () => {
    // Create shopping list if there is none yet
    if (!state.list) state.list = new List ();

    // Render all recipe ingredients to the shopping list 
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addElement(el.count, el.unit, el.ingredient);
        listView.renderList(item);
    })
}

// Retrieving liked recipes data from Local Storage
window.addEventListener('load', () => {
    // Create new Likes class
    state.likes = new Likes ();

    // Retrieve the likes data from the Local Storage 
    state.likes.retrieveData();

    // Toggle Likes Menu Button 
    likesView.toggleLikesMenu(state.likes.getNumberLikes());

    // Display retrieved data onto the UI
    state.likes.elements.forEach(el => likesView.renderLiked(el))
})

// ***** LIKES CONTROLLER *****
const controlLikes = () => {
    // Create Likes array if there is none yet
    if (!state.likes) state.likes = new Likes ();
    const currentID = state.recipe.id;
    // Love button can be in two initial states upon click event happens
    // Recipe has NOT been liked
    if (!state.likes.isLiked(currentID)) {
        // 1. Add recipe to the list 
        const newLiked = state.likes.addLiked(
            currentID,
            state.recipe.image,
            state.recipe.title,
            state.recipe.author,
        );
        // 2. Toggle love button
        likesView.toggleLikedBtn(true)   

        // 3. Display to the UI
        likesView.renderLiked(newLiked);
        
    } else {
        // Recipe HAS been liked 
        //  1. Remove recipe from the list
        state.likes.removeLiked(
            currentID,
        );
        // 2. Toggle love button 
        likesView.toggleLikedBtn(false)   

        // 3. Display to the UI
        likesView.removeLiked(currentID)
    }
    likesView.toggleLikesMenu(state.likes.getNumberLikes());
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

// Handling list button clicks
elements.shoppingList.addEventListener('click', event => {
    const item = event.target.closest('.shopping__item');
    const id = item.dataset.itemid;
    console.log(id)
    if (item) {
        // Delete an element from shopping list
        if (event.target.matches('.shopping__delete, .shopping__delete *')) {
            state.list.removeElement(id);
            listView.removeList(id);
        } else if (event.target.matches('.shopping__count--value')) {
            const val = parseFloat(event.target.value, 10);
            state.list.changeCount(val, id);
        }
    } 
})

// Handling recipe button clicks
elements.recipe.addEventListener('click', event => {
    if (event.target.matches('.btn-decrease, .btn-decrease *') && state.recipe.servings > 1) {
        // "Decrease servings" button
        state.recipe.updateServings('dec');
    } else if (event.target.matches('.btn-increase, .btn-increase *')) {
        // "Increase servings" button
        state.recipe.updateServings('inc');
    } else if (event.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        // "Add to shopping list" button 
        controlList();
    } else if (event.target.matches('.recipe__love, .recipe__love *')) {
        // "Like" button 
        controlLikes();
    } 
    recipeView.updateServingsIngredients(state.recipe); 
    console.log(state.recipe)
})

