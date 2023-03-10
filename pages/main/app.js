const testiProgress = document.querySelector('.testi-progress-bar');
const testiCards = document.querySelector('.testi-cards')

testiProgress.addEventListener('input', function () {
    let value = this.value;
    console.log(value, this.value);
    let cardWidth = 268;
    testiCards.style.left = `${-value * (cardWidth + 25)}px`
    console.log(testiCards.style.left)
})

// PETS-SLIDER

const petsSliderBox = document.querySelector('.pets-slider-box');
const petsSliderPage = document.querySelector('.pets-slider-page');
const petCards = Array.from(document.querySelectorAll('.pets-card'));
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');
const arrows = Array.from(document.querySelectorAll('.arrow'));
let petCardWidth = 366;
let sliderPages;

const moveLeft = () => {
    arrowLeft.removeEventListener('click', moveLeft);

    let clonePage = petsSliderPage.cloneNode(true);
    clonePage.classList.add('clone')
    petsSliderBox.append(clonePage);

    Array.from(clonePage.children).forEach(petCard => {
        petCard.style.order = `${Math.ceil(Math.random() * 6)}`
    })

    sliderPages = document.querySelectorAll('.pets-slider-page')
    sliderPages[0].classList.add('fade-to-left');

    clonePage.classList.add('fade-in-right');

    setTimeout(() => {
        for (let i = 0; i < sliderPages.length; i++) {
            sliderPages[i].classList.remove('fade-in-right');
            sliderPages[i].classList.remove('fade-to-left');
            sliderPages[i].classList.remove('clone');
        }
        sliderPages[0].remove()
        arrowLeft.addEventListener('click', moveLeft)
    }, 700);
};

arrowLeft.addEventListener('click', moveLeft);
// const moveRight = ;

const moveRight = () => {
    arrowRight.removeEventListener('click', moveRight);

    let clonePage = petsSliderPage.cloneNode(true);
    clonePage.classList.add('clone')
    petsSliderBox.prepend(clonePage);

    Array.from(clonePage.children).forEach(petCard => {
        petCard.style.order = `${Math.ceil(Math.random() * 6)}`
    })

    sliderPages = document.querySelectorAll('.pets-slider-page')
    sliderPages[1].classList.add('fade-to-right');

    clonePage.classList.add('fade-in-left');

    setTimeout(() => {
        for (let i = 0; i < sliderPages.length; i++) {
            sliderPages[i].classList.remove('fade-to-right');
            sliderPages[i].classList.remove('fade-in-left');
            sliderPages[i].classList.remove('clone');
        }
        sliderPages[1].remove();
        arrowRight.addEventListener('click', moveRight)
    }, 700);
}

arrowRight.addEventListener('click', moveRight)

// MEDIA QUERIES

window.onresize = function () { location.reload(); }


const smallDesktop = window.matchMedia('(min-width: 1000px) and (max-width: 1559px)');
checkIfsmallDesktop();
function checkIfsmallDesktop() {
    if (smallDesktop.matches) {
        testiProgress.addEventListener('input', function () {
            let value = this.value;
            console.log(value, this.value);
            let cardWidth = 293;
            testiCards.style.left = `${-value * (cardWidth + 25)}px`
            console.log(testiCards.style.left)
        })
    }
}


const tablet = window.matchMedia('(max-width: 999px)');
checkIfTablet();
function checkIfTablet() {
    if (tablet.matches) {

        const burgerMenuIcon = document.querySelector('.navbar-collapse-menu-icon');
        const burgerMenu = document.querySelector('.navbar-burger')
        const closeIcon = document.querySelector('.closing-icon')
        const burgerLink = document.querySelectorAll('.nav-burger-item')
        const overlay = document.querySelector('.overlay')

        burgerMenuIcon.addEventListener('click', (e) => {
            // setTimeout(() => {
            burgerMenu.classList.toggle('shown');
            overlay.style.display = 'block'
            // }, 0.01);
        })

        closeIcon.addEventListener('click', (e) => {
            // setTimeout(() => {
            burgerMenu.classList.remove('shown');
            overlay.style.display = 'none';
            // }, 0.01);
        })

        burgerLink.forEach(link =>
            link.addEventListener('click', (e) => {
                // setTimeout(() => {
                burgerMenu.classList.remove('shown');
                overlay.style.display = 'none'
                // }, 0.01);
            }
            ))

        overlay.addEventListener('click', () => {
            burgerMenu.classList.remove('shown');
            overlay.style.display = 'none';
        })

        // REVIEW-POPUP
        const reviewWrapper = document.querySelector('.testi-card-wrapper')
        const reviews = document.querySelectorAll('.testi-card')
        const reviewsPop = document.querySelectorAll('.testi-card-popup')
        const popupCloseIcon = document.querySelector('.testi-card-popup-close')

        for (let i = 0; i < reviews.length; i++) {
            reviews[i].addEventListener('click', (e) => {
                const index = i;
                // setTimeout(() => {
                reviewWrapper.classList.add('popup');
                reviewsPop.forEach(reviewPop => {
                    reviewPop.style.display = 'none';
                });
                reviewsPop[index].style.display = 'block';
                overlay.style.display = 'block';
            })
        }

        // reviews.forEach(review =>
        //         review.addEventListener('click', (e) => {
        //             // setTimeout(() => {
        //             reviewWrapper.classList.add('popup');
        //             overlay.style.display = 'block';
        //             // }, 0.01);
        //         }))

        popupCloseIcon.addEventListener('click', (e) => {
            // setTimeout(() => {
            // reviewWrappers.forEach(reviewWrapper => {
            reviewWrapper.classList.remove('popup');
            // });
            overlay.style.display = 'none';
            // }, 0.01);
        })

        overlay.addEventListener('click', () => {
            // reviewWrappers.forEach(reviewWrapper => {
            reviewWrapper.classList.remove('popup');
            // });
            overlay.style.display = 'none';
        })
    }

}
