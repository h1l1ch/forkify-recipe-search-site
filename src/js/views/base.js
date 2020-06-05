export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    resList: document.querySelector('.results__list'),
    totalRes: document.querySelector('.results'),
    pagesRes: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe'),
    recipeDetails: document.querySelector('.recipe__details'),
    shoppingList: document.querySelector('.shopping__list'),
    shoppingCount: document.querySelector('.shopping__count'),
    likesList: document.querySelector('.likes__list'),
    likesMenu: document.querySelector('.likes__field'),
}

export const elementStrings = {
    loader: "loader",
}

export const renderLoader = parent => {
    const loader = `
       <div class=${elementStrings.loader}>
           <svg>
               <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;

    parent.insertAdjacentHTML('afterbegin', loader);
};

export const removeLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) loader.parentNode.removeChild(loader)
};