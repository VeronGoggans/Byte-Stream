import { LoginView } from "../view/loginView.js"


export class LoginController {
    constructor(httpModel) {
        this.httpModel = httpModel;
    }

    init() {
        this.view = new LoginView();
    }


    signupUser() {

    }

    loginUser() {

    }
}

