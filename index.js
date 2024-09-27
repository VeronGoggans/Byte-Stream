import { AppController } from "./src/frontend/javascript/controller/appController.js";
import { Router } from "./router.js";

document.addEventListener('DOMContentLoaded', () => {
    const APP = new AppController();
    const router = new Router(APP) 
});
