import { LoginController } from "../controller/loginController.js"
import { SignupController } from "../controller/signupController.js"
import { HomeController } from "../controller/homeController.js"
import { ShareController } from "../controller/shareController.js"
import { InboxController } from "../controller/inboxController.js"
import { FriendController } from "../controller/friendController.js"
import { HttpModel } from "../model/httpModel.js";
import { TEMPLATES } from "../templates.js";

export class AppController {
    constructor() {
        this.httpModel = new HttpModel() 
        this.viewElement = document.querySelector('.content');
        this.homeController = new HomeController(this.httpModel)
        this.shareController = new ShareController(this.httpModel)
        this.inboxController = new InboxController(this.httpModel)
        this.friendController = new FriendController(this.httpModel)
        this.loginController = new LoginController(this.httpModel)
        this.signupController = new SignupController(this.httpModel)
        this.controllers = {
            home: this.homeController,
            share: this.shareController,
            inbox: this.inboxController,
            friends: this.friendController,
            login: this.loginController,
            signup: this.signupController
        }
    }


    routeTo(viewId, viewParameters = {}) {        
        const viewTemplate = TEMPLATES[viewId];
        const controller = this.controllers[viewId]
        this.viewElement.innerHTML = viewTemplate;
        controller.init();
    }
}