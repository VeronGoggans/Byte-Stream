import { TEMPLATES } from "src/frontend/javascript/templates.js"

export class Router {
    constructor(appController) {
        this.appController = appController;
        this.tabs = document.querySelectorAll('nav a');
        this.initRouter();
    }

    initRouter() {       
        for (let i = 0; i < this.tabs.length; i++) {
            this.tabs[i].addEventListener('click', () => {

                const viewId = this.tabs[i].dataView;
                this.appController.routeTo(viewId,
                    {
                        template:  ''
                    }
                );

                this.#showActiveTab(viewId);
            })
        }
    }

    
    #showActiveTab(viewId) {
        document.querySelector(`#${viewId}`).classList.add('active-tab');
    }
}



