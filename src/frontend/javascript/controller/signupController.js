import { SignupView } from "../view/signupView.js"


export class SignupController {
    constructor(httpModel) {
        this.httpModel = httpModel;
    }

    init() {
        this.view = new SignupView();
    }


    signupUser() {

    }

    loginUser() {

    }
}

