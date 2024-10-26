

function customRender(reactElement,mainContainer){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // mainContainer.appendChild(domElement)

    const domElement1 = document.createElement (reactElement.type)
    domElement1.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        domElement1.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement1)
}


const reactElement = {
    type:'a',
    props: {
        href: " https://google.com",
        target : '_blank'
    },
    children : 'Click me  to visit google'

}

const mainContainer= document.getElementById('root')


customRender(reactElement, mainContainer)