// Create an <svg> element
export const menuSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

// Set the attributes for the SVG
menuSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
menuSvg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
menuSvg.setAttribute('width', '24');
menuSvg.setAttribute('height', '24');
menuSvg.setAttribute('viewBox', '0 0 24 24');


// Include the SVG content within the <svg> element
menuSvg.innerHTML = `
<path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
`;



