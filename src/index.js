import './style.css';
import { homeContent } from './bodyContainer';
import { header } from './menu-bar';
import { footer } from './footer';

function component(){
    const element = document.createElement('content')
    element.appendChild(header)
    element.appendChild(homeContent)
    element.appendChild(footer)

    return element
}

document.body.appendChild(component())