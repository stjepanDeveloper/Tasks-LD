// Custom Element Definition
class LuxurySection extends HTMLElement {
    constructor() {
        super();
        this.toggleVisibility();
        this.initButtonToggle();
    }

    
    toggleVisibility() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1'; 
                } else {
                    entry.target.style.opacity = '0'; 
                }
            });
            }, {
            threshold: 0.05, 
            rootMargin: "50px 0px 50px 0px"  
        });

        observer.observe(this); 
    }

    
    initButtonToggle() {
        const button = this.querySelector('#svgButton');
        const moreText = this.querySelector('#moreText');
        const buttonImg = this.querySelector('#svgButton img');

        if (button) {
            button.addEventListener('click', () => {
                if (moreText.style.display === 'block') {
                    
                    moreText.style.opacity = '0';
                    setTimeout(() => {
                        moreText.style.display = 'none';
                        buttonImg.src = './svg/button.svg'; 
                    }, 500);
                } else {
                    
                    moreText.style.display = 'block';
                    setTimeout(() => {
                        moreText.style.opacity = '1';
                        buttonImg.src = './svg/button.svg'; 
                    }, 10);

                    button.style.transition = 'opacity 0.5s ease';
                    button.style.opacity = '0';

                    setTimeout(() => {
                        button.style.visibility = 'hidden';
                    }, 500);
                }
            });
        }
    }
}


customElements.define('luxury-section', LuxurySection);
