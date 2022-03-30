// importing zoom flow library
import { Zoomify } from './ZoomIfy.js';
// create new object from library
var zoomFlow = new Zoomify();
var imagesGallery = document.querySelectorAll('#images-gallery .box img');
var togglerBTN = document.querySelector('#toggler');
var NavbarMenu = document.querySelector('.navgationBar');
var NavbarElementsList = document.querySelectorAll('.navgationBar a');
var sections = document.querySelectorAll('body main');
console.log(NavbarElementsList);
console.log(sections);
togglerBTN.addEventListener('click', function () {
    NavbarMenu.classList.toggle('open');
    document.body.classList.toggle('prevent_Scoll');
});
imagesGallery.forEach(function (images) {
    images.addEventListener('click', function (e) {
        zoomFlow.ZoomOverlay(e.target.src);
    });
});
window.addEventListener('scroll', function (e) {
    scrollspy();
});
// functions
function scrollspy() {
    sections.forEach(function (section) {
        var secOffsetTop = section.offsetTop - 250;
        var SectionID = section.id;
        if (window.scrollY >= secOffsetTop) {
            setActive(SectionID);
        }
    });
}
function setActive(Sectionid) {
    NavbarElementsList.forEach(function (link) {
        var linkID = link.href.split('#')[1];
        link.classList.contains('active') ? link.classList.remove('active') : '';
        if (linkID === Sectionid) {
            link.classList.add('active');
        }
    });
}
