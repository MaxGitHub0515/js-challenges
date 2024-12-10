// Defined Virtual DOM node
function createElement(type, props, ...children) {
    return {
        type,
        props: props || {},
        children
    };
}

const vDOM = createElement('div', { id: 'app' },
    createElement('h1', null, "Virtual DOM"),
    createElement('p', null, "Example present")
)

console.log(vDOM)

module.exports = {
    vDOM,
    createElement
}