// Initialize the Swiper instance
let mySwiper;

function initializeSwiper() {
    mySwiper = new Swiper('.my-swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            375: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1, 
            },
            1024: {
                slidesPerView: 3, 
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3, 
                spaceBetween: 30,
            },
            1440: {
                slidesPerView: 3, 
                spaceBetween: 30,
            },
        },
        on: {
            slideChange: function () {
                console.log('Active Slide Index:', this.activeIndex);
            
                
                if (this.activeIndex === 0) {
                    document.querySelector('.swiper-button-prev').style.display = 'none';
                } else {
                    document.querySelector('.swiper-button-prev').style.display = 'flex';
                }

                
                if (this.activeIndex === this.slides.length - this.params.slidesPerView) {
                    document.querySelector('.swiper-button-next').style.display = 'none';
                } else {
                    document.querySelector('.swiper-button-next').style.display = 'flex';
                }
            },
        },
    });

    document.getElementById('swiper-disabled-message').style.display = 'none';
    
    
    document.querySelector('.my-swiper').style.display = 'block';

    
    if (mySwiper.activeIndex === 0) {
        document.querySelector('.swiper-button-prev').style.display = 'none';
    }
}


initializeSwiper();

// Toggle Swiper initialization/destroy
const toggleButton = document.getElementById('toggle-swiper');
toggleButton.addEventListener('click', () => {
    if (mySwiper) {
        mySwiper.destroy(true, true);
        mySwiper = null;
        console.log('Swiper destroyed');

        
        document.getElementById('swiper-disabled-message').style.display = 'flex';

        
        document.querySelector('.my-swiper').style.display = 'none';
    } else {
        initializeSwiper();
        console.log('Swiper initialized');
    }
});
