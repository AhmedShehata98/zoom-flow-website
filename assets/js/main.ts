// importing zoom flow library
import {Zoomify} from './ZoomIfy.js'

// create new object from library
const zoomFlow : Zoomify = new Zoomify();
const imagesGallery = document.querySelectorAll<HTMLElement>('#images-gallery .box img') ;
const togglerBTN    = document.querySelector<HTMLButtonElement>('#toggler') ;
const NavbarMenu    = document.querySelector<Element>('.navgationBar') ;
const NavbarElementsList = document.querySelectorAll('.navgationBar a') as NodeListOf <HTMLAnchorElement>;
const sections      = document.querySelectorAll('body main')as NodeListOf<HTMLDivElement>;
console.log(NavbarElementsList);
console.log(sections);

togglerBTN.addEventListener('click' , ()=>{
    NavbarMenu.classList.toggle('open');
    document.body.classList.toggle('prevent_Scoll');
})

imagesGallery.forEach( (images : HTMLImageElement) =>{
    images.addEventListener('click' , (e)=>{
        zoomFlow.ZoomOverlay((e.target as HTMLImageElement).src);
    })
})

window.addEventListener('scroll' , (e)=>{
    scrollspy()
})



// functions
function scrollspy () :void {
    sections.forEach((section :HTMLDivElement )  =>{
        
        const secOffsetTop :number= section.offsetTop - 250;
        const SectionID :string = section.id ;

        if (window.scrollY >= secOffsetTop) {
            setActive(SectionID);
        }
    })
}

function setActive(Sectionid :string):void{
    NavbarElementsList.forEach((link :HTMLAnchorElement)=>{
        const linkID :string = link.href.split('#')[1]
        link.classList.contains('active') ? link.classList.remove('active') : '';
        if (linkID === Sectionid) {
            link.classList.add('active')
        }
    })
}
