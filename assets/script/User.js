'use strict';

class User {
    //Private properties
    #id;
    #name;
    #userName;
    #email;

    //constructor
    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    //Getters
    get id() {return this.#id; }
    get name() {return this.#name; }
    get userName() {return this.#userName; }
    get email() {return this.#email; }

    getInfo() {
        return `
        <div class="profile-card">
            <img src="./assets/media/user-image.JPG" class="profile-img">
            <h2>${this.#name}</h2>
            <p>@${this.#userName}</p> 
            <div class="profile-details">
                <p>Email: ${this.#email}</p>
            </div>
        </div>
        `;
    }

}

//now we export
export {User};