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
            <p>Name: ${this.#name}</p>
            <p>Username: ${this.#userName}</p>
            <p>Email: ${this.#email}</p>
        `;
    }

}

//now we export
export {User};