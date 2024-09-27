export class Router {
    constructor(appController) {
        this.appController = appController;
        this.tabs = document.querySelectorAll('nav a')
        this.initRouter();
        this.#reRoute('home');
    }

    initRouter() {     
        for (let i = 0; i < this.tabs.length; i++) {
            const viewId = this.tabs[i].getAttribute('data-view');;
            this.tabs[i].addEventListener('click', () => {
                this.#reRoute(viewId)
            })
        }  
    }

    #reRoute(viewId) {   
        this.appController.routeTo(viewId);
        this.#showActiveTab(viewId);
    }
    
    #showActiveTab(viewId) {
        this.tabs.forEach(tab => tab.classList.remove('active-tab'));
        document.querySelector(`#${viewId}`).classList.add('active-tab');
    }
}