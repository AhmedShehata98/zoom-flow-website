// importing zoom flow library
import {Zoomify} from './ZoomIfy.js'

// create new object from library
const zoomFlow : Zoomify = new Zoomify();
const imagesGallery = document.querySelectorAll<HTMLElement>('#images-gallery .box img') ;

imagesGallery.forEach( (images : HTMLImageElement) =>{
    images.addEventListener('click' , (e)=>{
        zoomFlow.ZoomOverlay((e.target as HTMLImageElement).src);
    })
})