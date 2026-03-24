'use strict';

import {User} from './User';

class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;

    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get pages() {return this.#pages; }
    get groups() {return this.#groups; }
    get canMonetize() {return this.#canMonetize; }

    getInfo() {
        return `${super.getInfo()} 
        `;
    }

}

export {Subscriber};