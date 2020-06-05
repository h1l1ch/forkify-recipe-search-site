import {elements} from './base';

import {titleCut} from './searchView';

export const toggleLikedBtn = isLiked => {
    const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
    document.querySelector('.recipe__love use').setAttribute('href', `img/icons.svg#${iconString}`);
};

export const toggleLikesMenu = numLikes => {
    //  CSS coding
    elements.likesMenu.style.visibility = numLikes > 0 ? 'visible' : 'hidden'
};

export const renderLiked = recipe => {
    const markup = `
        <li>
            <a class="likes__link" href="#${recipe.id}">
                <figure class="likes__fig">
                    <img src="${recipe.image}" alt="Test">
                </figure>   
                <div class="likes__data">
                    <h4 class="likes__name">${titleCut(recipe.title)}</h4>
                    <p class="likes__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `
    elements.likesList.insertAdjacentHTML('beforeend', markup);
};  

export const removeLiked = id => {
    const el = document.querySelector(`.likes__link[href="#${id}"]`).parentElement;
    if (el) el.parentElement.removeChild(el)
}