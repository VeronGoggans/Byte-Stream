export class Router {
    constructor(appController) {
        this.appController = appController;
        this.tabs = document.querySelectorAll('nav a')
        this.initRouter();
    }

    initRouter() {     
            for (let i = 0; i < this.tabs.length; i++) {
            this.tabs[i].addEventListener('click', () => {

                const viewId = this.tabs[i].getAttribute('data-view');                
                this.appController.routeTo(viewId);
                this.#showActiveTab(viewId);
            })
        }  
    }
    
    #showActiveTab(viewId) {
        this.tabs.forEach(tab => tab.classList.remove('active-tab'));
        document.querySelector(`#${viewId}`).classList.add('active-tab');
    }
}