import { FriendView } from "../view/friendView.js"

export class FriendController {
    constructor(httpModel) {
        this.httpModel = httpModel;
    }

    init() {
        this.view = new FriendView();
    }


}

