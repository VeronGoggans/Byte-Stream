import { AuthView } from "../view/authView.js"


export class AuthController {
    constructor(httpModel) {
        this.httpModel = httpModel;
    }

    init() {
        this.view = new AuthView();
    }


    signupUser() {

    }

    loginUser() {

    }
}

