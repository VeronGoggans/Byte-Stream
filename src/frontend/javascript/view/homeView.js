import { Animations } from "../animations.js";

export class HomeView {
    constructor() {

        this.initDomElements();
        this.listen();
        Animations.fadeInFromBottom(this.viewElement);
    }



    listen() {

    }
    
    initDomElements() {
        this.viewElement = document.querySelector('.home-view');
    }
} 