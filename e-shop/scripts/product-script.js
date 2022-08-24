let productImage = document.querySelector('.product_images');
let btnRight = productImage.querySelector('.right');
let btnLeft = productImage.querySelector('.left');
let imageP = productImage.querySelector('.image-slideshow');

function slidesShowAdd(nameClass, n) {
    imageP.classList.add(nameClass);
    imageP.classList.add('slideshow_active');
    imageP.classList.remove('slideshow-' + n.toString());
}



btnRight.onclick = function (event) {

    event.preventDefault();
    imageP.style.transition = 'opacity 2s, transform 2s';

    let i = 1;
    while (i <= 3) {
        if (i < 3) {
            let n = i;
            if (imageP.classList.contains('slideshow-' + i.toString())) {

                imageP.classList.remove('slideshow_active');
                n++;
                window.setTimeout(function () { slidesShowAdd('slideshow-' + n.toString(), i) }, 1000);
                break;
            }
        } else {
            let n = i;
            imageP.classList.remove('slideshow_active');
            window.setTimeout(function () { slidesShowAdd('slideshow-1', n) }, 1000);
        }
        i++;
    }

}

btnLeft.onclick = function (event) {

    event.preventDefault();
    imageP.style.transition = 'opacity 1s, transform 1s';

    let i = 1;
    while (i <= 3) {
        if (i != 1) {
            let n = i;
            if (imageP.classList.contains('slideshow-' + i.toString())) {

                imageP.classList.remove('slideshow_active');
                window.setTimeout(function () {
                    slidesShowAdd('slideshow-' + (n - 1).toString(), n)
                }, 1000);
                break;
            }
        } else if (imageP.classList.contains('slideshow-' + i.toString())) {
            // let n = i;
            imageP.classList.remove('slideshow_active');
            window.setTimeout(function () { slidesShowAdd('slideshow-3', 1) }, 1000);
        }
        i++;
    }

}