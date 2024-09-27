import { ShareView } from "../view/shareView.js"


export class ShareController {
    constructor(httpModel) {
        this.httpModel = httpModel;
    }

    init() {
        this.view = new ShareView();
    }


    signupUser() {

    }

    loginUser() {

    }
}

