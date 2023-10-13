import './style.css';
import { bodyContainer } from './bodyContainer';
import { header } from './menu-bar';
import { footer } from './footer';

// Page structure setup
function component() {
    const element = document.createElement('content');
    element.appendChild(header);
    element.appendChild(bodyContainer);
    element.appendChild(footer);

    return element;
}
  
document.body.appendChild(component());
  