'use strict';

import {User} from './User.js';

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
        return `
        <div class="profile-card">
            <img src="./assets/media/user-image.JPG" class="profile-img">
            <h2>${this.name}</h2>
            <p>@${this.userName}</p> // @ is used to display the username like social media handles
            <div class="profile-details">
                <p><strong>Email:</strong> ${this.email}</p>
                <p><strong>Pages:</strong> ${this.pages.join(', ')}</p>
                <p><strong>Groups:</strong> ${this.groups.join(', ')}</p>
                <p><strong>Monetization:</strong> ${this.canMonetize ? 'Enabled' : 'Disabled'}</p>
            </div>
        </div>
        `;
    }

}

export {Subscriber};