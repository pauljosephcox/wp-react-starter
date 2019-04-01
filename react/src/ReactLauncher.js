import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';


const ConvertToReact = (instance) => {

    // Create Component
    let instanceComponent = React.createElement(instance.component,instance.props);

    // Create Provider
    let instanceProvider = React.createElement(Provider,{store:configureStore()},instanceComponent);

    // Create A Div
    let div = document.createElement('div');
    div.setAttribute('data-component-type',instance.tagName)

    // Replace With Div
    instance.el.parentNode.replaceChild(div, instance.el);

    // Render Component
    ReactDOM.render(instanceProvider,div);

}

/**
 * Tag Converter
 * Convert WebComponent Tags into Ract Components
 * @param component ReactComponent
 */

const TagConverter = (component) => {

    // Get Elements By Tag
    var arrayOfElements = [].slice.call(document.getElementsByTagName(component.tagName));

    // Convert Elements to Vue Components
    var instances = arrayOfElements.map((element,index) => {

        // Read Attributes into Props Array
        var props = {};
        [].slice.call(element.attributes).map(attr => props[attr.name] = attr.value);

        return {
            props: props,
            component: component.component,
            tagName: component.tagName,
            el: element,
        };

    });

    // Convert To React Apps
    instances.forEach(ConvertToReact)

}

/**
 * React Launcher
 * Makes Components Accessible Globally
 * @param components Array
 */

const ReactLauncher = (components) => {

    components.forEach(TagConverter);

}

export default ReactLauncher;
