// function to scroll to the top of the screen
function goToTop() {
    window.onload = () => {
        document.querySelector('.go_top').addEventListener('click', e => {
            window.scrollTo(0, 0);
        });
    };
}
goToTop();



//add testimonial arrow click functions
function rightArrow() {
    let testimonial = document.getElementsByClassName('testimonial');
    let l = 0;
    l++;
    for (let i of testimonial) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l == 1) {
            i.style.left = "-1000px";
        }
        if (l > 1) {
            l = 1;
        }
    }
}
function leftArrow() {
    let testimonial = document.getElementsByClassName('testimonial');
    let l = 1;
    l--;
    for (let i of testimonial) {
        if (l == 0) {
            i.style.left = "0px";
        }
        if (l < 0) {
            l = 0;
        }
    }
}
function testimonialSlide() {
    let left_arrow = document.querySelector('#left_arrow');
    let right_arrow = document.querySelector('#right_arrow');
    left_arrow.addEventListener('click', () => {
        leftArrow();
    });
    right_arrow.addEventListener('click', () => {
        rightArrow();
    });
}
testimonialSlide();