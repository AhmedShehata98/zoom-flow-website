// importing zoom flow library
import { Zoomify } from './ZoomIfy.js';
// create new object from library
var zoomFlow = new Zoomify();
var imagesGallery = document.querySelectorAll('#images-gallery .box img');
imagesGallery.forEach(function (images) {
    images.addEventListener('click', function (e) {
        zoomFlow.ZoomOverlay(e.target.src);
    });
});
