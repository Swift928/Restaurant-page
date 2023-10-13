import Flickity from 'flickity';
import 'flickity/css/flickity.css';


function carouselSetup (item){
    const flkty = new Flickity(item, {
        cellAlign: 'center',
        contain: false,
        wrapAround: true,
        autoPlay: false,
        prevNextButtons: false,
        pageDots: false,
        initialIndex: 2,
    });

    // flkty.resize()
    return flkty
}

export {carouselSetup}