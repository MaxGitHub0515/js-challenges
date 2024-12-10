// Rendering vDOM to the Real DOM
const {
    vDom,
    createElement
} = require('./test-virtual-dom');

debugger;

function render(vNode) {
    if (typeof vNode === 'string') {
        return document.createTextNode(vNode);
    }
    const item = document.createElement(vNode.type);

    Object.entries(vNode.props).forEach(([key, value]) => {
        item.setAttribute(key, value);
    })

    vNode.children.forEach(child => item.appendChild(render(child)));

    return item;

}
// renderingvdom to the real dom

const root = document.getElementById('#root');
root.appendChild(render(vDOM))