import { AuthController } from "./authController.js";
import { HttpModel } from "../model/httpModel.js";
import { Router } from "../../../../router.js";

export class AppController {
    constructor() {
        this.httpModel = new HttpModel() 
        this.authController = new AuthController(this.httpModel)
    }


    routeTo(viewId, viewParameters = {}) {
        
    }
}