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
    get id() {return this.#name; }
    get id() {return this.#userName; }
    get id() {return this.#email; }

    getInfo() {
        return `
            <p><strong>Name:</strong> ${this.#name}</p>
            <p><strong>Username:</strong> ${this.#userName}</p>
            <p><strong>Email:</strong> ${this.#email}</p>
        `;
    }

}

//now we export
export {User};