import { Animations } from "../animations.js";


export class FriendView {
    constructor() {

        this.initDomElements();
        this.listen();
        Animations.fadeInFromBottom(this.viewElement);
    }

    listen() {

    }
    
    initDomElements() {
        this.viewElement = document.querySelector('.friends-view');

    }
} 