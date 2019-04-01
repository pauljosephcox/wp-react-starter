// Convert Web Components to React Components
import ReactLauncher from './ReactLauncher';
import * as serviceWorker from './serviceWorker';

// Components
import HelloWorld from './components/HelloWorld/HelloWorld';

/**
 * Add Your Components here to make them available to the scaper.
 */
ReactLauncher([
    {tagName: 'HelloWorld', component: HelloWorld},
]);

// Service Worker
serviceWorker.unregister();
