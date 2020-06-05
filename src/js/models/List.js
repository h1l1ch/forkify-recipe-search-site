import uniqid from 'uniqid';

export default class List {
    constructor () {
        this.elements = [];
    }

    addElement (count, unit, ingredient) {
        // Creating an element
        const element = {
            id: uniqid(),
            count,
            unit,
            ingredient
        } 
        // Adding an element into the List
        this.elements.push(element)
        return element
    }

    removeElement (id) {
        const index = this.elements.findIndex(el => el.id === id);
        this.elements.splice(index, 1);
    }

    changeCount (newCount, id) {
        this.elements.find(el => el.id === id).count = newCount;
    }
}