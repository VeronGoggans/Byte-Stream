import { Animations } from "../animations.js";

export class SignupView {
    constructor() {

        this.initDomElements();
        this.listen();
        Animations.fadeInFromBottom(this.viewElement);
    }



    listen() {

    }
    
    initDomElements() {
        this.viewElement = document.querySelector('.signup-view');
    }
} 