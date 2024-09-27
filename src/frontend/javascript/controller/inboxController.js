import { InboxView } from "../view/inboxView.js"


export class InboxController {
    constructor(httpModel) {
        this.httpModel = httpModel;
    }

    init() {
        this.view = new InboxView();
    }


    signupUser() {

    }

    loginUser() {

    }
}

