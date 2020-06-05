export default class Likes {
    constructor () {
        this.elements = [];
    }

    addLiked (id, image, title, publisher) {
        // Creating an element
        const recipe = {
            id,
            image,
            title,
            publisher
        } 
        // Adding recipe element into the likes List
        this.elements.push(recipe)

        // Persist data in local storage
        this.persistData();
        return recipe
    }
    
    removeLiked (id) {
        const index = this.elements.findIndex(el => el.id === id);
        this.elements.splice(index, 1);

        // Persist data in local storage
        this.persistData();
    }

    isLiked (id) {
        return this.elements.findIndex(el => el.id === id) !== -1;
    }

    getNumberLikes () {
        return this.elements.length;
    }

    persistData () {
        localStorage.setItem('likes', JSON.stringify(this.elements));
    }
    
    retrieveData () {
        const storage = JSON.parse(localStorage.getItem('likes'));

        // Retrieving likes from storage 
        if (storage) this.elements = storage;
    }
}