import { Animations } from "../animations.js";

export class InboxView {
    constructor() {

        this.initDomElements();
        this.listen();
        Animations.fadeInFromBottom(this.viewElement);
    }



    listen() {

    }
    
    initDomElements() {
        this.viewElement = document.querySelector('.inbox-view');
    }
} 