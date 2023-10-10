import './style.css';
import { homeContent } from './bodyContainer';
import { header } from './menu-bar';
import { footer } from './footer';

const element = document.getElementById('content')

element.appendChild(header)


element.appendChild(homeContent)

element.appendChild(footer)

