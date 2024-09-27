import { HomeView } from "../view/homeView.js"

export class HomeController {
    constructor(httpModel) {
        this.httpModel = httpModel;
    }

    init() {
        this.view = new HomeView();
    }


    signupUser() {

    }

    loginUser() {

    }
}

