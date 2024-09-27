import { Animations } from "../animations.js";

export class ShareView {
    constructor() {

        this.initDomElements();
        this.listen();
        Animations.fadeInFromBottom(this.viewElement);
    }



    listen() {

    }
    
    initDomElements() {
        this.viewElement = document.querySelector('.share-view');
    }
} 