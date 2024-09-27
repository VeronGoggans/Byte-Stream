import { Animations } from "../animations.js";

export class LoginView {
    constructor() {

        this.initDomElements();
        this.listen();
        Animations.fadeInFromBottom(this.viewElement);
    }



    listen() {

    }
    
    initDomElements() {
        this.viewElement = document.querySelector('.login-view');
    }
} 