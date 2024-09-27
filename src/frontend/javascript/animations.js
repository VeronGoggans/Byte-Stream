export class Animations {

    static fadeInFromBottom(card) {
        setTimeout(() => {
            card.classList.add('fadeInFromBottom');
        }, 30);
    }


    static fadeInFromSide(card) {
        setTimeout(() => {
            card.classList.add('fadeInFromSide');
        }, 30);
    }


    static fadeOutCard(card) { 
        card.classList.add('fadeOut');
        setTimeout(() => {
            card.remove();
        }, 700);
    }


    static fadeIn(node) {
        node.classList.add('fadeIn');
    }


    static fadeOut(node) {
        node.classList.remove('fadeIn');
        setTimeout(() => {
            node.style.display = 'none';
        }, 150);
    }
}