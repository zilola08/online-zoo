const inputDesktop = document.querySelector('.input-1600')
const inputSmallDesktop = document.querySelector('.input-1000')
const inputMarkers = Array.from(document.querySelectorAll('.range-marker'));
const inputDots = Array.from(document.querySelectorAll('.range-option'));


const amount = document.querySelector('.amount')
let index = 0;



for (i = 0; i < inputMarkers.length; i++) {

    inputMarkers[i].value = `${inputMarkers[i].textContent.slice(1)}`

    inputMarkers[i].addEventListener('click',function () {
        index = inputMarkers.indexOf(this);
        inputMarkers.forEach(marker => {
            marker.classList.remove('selected')
        });
        this.classList.add('selected');

        inputDots.forEach(dot => {
            dot.classList.remove('selected-dot');
        });
        inputDots[index].classList.add('selected-dot');

        inputDesktop.value = `${index + 1}`;
        inputSmallDesktop.value = `${index + 1}`;
        amount.value = `${inputMarkers[index].textContent.slice(1)}`;
    })

    inputDots[i].addEventListener('click',function () {
        dotIndex = inputDots.indexOf(this);
        // console.log(this,this.value,dotIndex);
        inputMarkers.forEach(marker => {
            marker.classList.remove('selected');
        });
        inputMarkers[dotIndex].classList.add('selected');

        inputDots.forEach(dot => {
            dot.classList.remove('selected-dot');
        });
        inputDots[dotIndex].classList.add('selected-dot');

        amount.value = `${inputMarkers[dotIndex].textContent.slice(1)}`;

        inputDesktop.value = `${dotIndex + 1}`
        inputSmallDesktop.value = `${dotIndex + 1}`;
        // console.log(inputMarkers[dotIndex].value,dotIndex);
    })
}


amount.addEventListener('input',function () {
    inputMarkers.forEach(marker => {
        marker.classList.remove('selected')
    });
    inputDots.forEach(dot => {
        dot.classList.remove('selected-dot')
    });
    if (amount.value.length > amount.max) {
        alert("Input should not contain more than four digits. Please modify your input. Thanks!");
        amount.value = "";
    }
    for (i = 0; i < inputMarkers.length; i++) {
        index = inputMarkers.indexOf(this);
        if (amount.value == inputMarkers[i].value) {
            inputMarkers[i].classList.add('selected');
            inputDots[i].classList.add('selected-dot');
            let selected = document.querySelector('.selected')
            let selectedIndex = inputMarkers.indexOf(selected)
            inputDesktop.value = `${selectedIndex + 1}`
            inputSmallDesktop.value = `${selectedIndex + 1}`;
        }
    }
})


// window.onresize = function () { location.reload(); }

const tablet = window.matchMedia('(max-width: 641px)');
checkIfTablet();
function checkIfTablet() {
    if (tablet.matches) {

        const burgerMenuIcon = document.querySelector('.navbar-collapse-menu-icon');
        const burgerMenu = document.querySelector('.navbar-burger')
        const closeIcon = document.querySelector('.closing-icon')
        const burgerLink = document.querySelectorAll('.nav-burger-item')
        const overlay = document.querySelector('.overlay')

        burgerMenuIcon.addEventListener('click',(e) => {
            setTimeout(() => {
                burgerMenu.classList.toggle('shown');
                overlay.style.display = 'block';
            },0.01);
        })

        closeIcon.addEventListener('click',(e) => {
            setTimeout(() => {
                burgerMenu.classList.remove('shown');
                overlay.style.display = 'none';
            },0.01);
        })

        burgerLink.forEach(link =>
            link.addEventListener('click',(e) => {
                setTimeout(() => {
                    burgerMenu.classList.remove('shown');
                    overlay.style.display = 'none';
                },0.01);
            }
            ))

        document.addEventListener('click',(e) => {
            const clickedPoint = e.target;
            if (!burgerMenu.contains(clickedPoint)) {
                burgerMenu.classList.remove('shown');
                overlay.style.display = 'none';
            }
        })

    }

}
