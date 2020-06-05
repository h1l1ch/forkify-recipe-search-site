import {elements} from './base';

export const getInput = () => elements.searchInput.value;
export const clearInput = () => elements.searchInput.value = '';
export const clearList = () => elements.resList.innerHTML = '';
export const clearButtons = () => elements.pagesRes.innerHTML = '';

export const titleCut = (title, limit = 17) => {
    if (title.length > limit) {
        const newTitle = [];
        title.split(' ').reduce((acc, cur) => {
            if (acc <= limit) {
                newTitle.push(cur)
            }
            return acc + cur.length
        }, 0)
        return `${newTitle.join(' ')} ...`
    }
    return title;
};


const renderRecipe = recipe => {
    
    const elementHtml = `
    <li>
        <a class="results__link results__link--active" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">"${titleCut(recipe.title)}"</h4>
                <p class="results__author">"${recipe.publisher}"</p>
            </div>
        </a>
    </li>
    `;
    
    elements.resList.insertAdjacentHTML('beforeend', elementHtml);
};

const createButton = (page, type) => {
    const buttonPage = `
        <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
            <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
            </svg>
        </button>
    `
    elements.pagesRes.insertAdjacentHTML('afterbegin', buttonPage);
};

const renderPages = (page, totalRes, onePageRes) => {
    const pages = Math.ceil(totalRes / onePageRes);
    let button;
    
    if (page === 1 && pages > 1) {
        // Construct a "next" page
        button = createButton(page, 'next')
    } else if (page < pages) {      
        // Construct both pages
        button = `
        ${createButton(page, 'next')}
        ${createButton(page, 'prev')}
        `;
    } else if (page === pages && pages > 1) {
        // construct a "prev" page
        button = createButton(page, 'prev')
    };
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    const begin = (page - 1) * (resPerPage);
    const end = page * (resPerPage);
    recipes.slice(begin, end).forEach(renderRecipe);
    renderPages(page, recipes.length, resPerPage);
};

export const hilightSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(el => {
        el.classList.remove('results__link--active');
    })
    document.querySelector(`.results__link[href="#${id}"]`).classList.add('results__link--active')
}
