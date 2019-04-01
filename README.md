# Wordpress React WebComponents
A react psuedo web-component based React Compiler for Wordpress


## Getting Starter
```
cd react
npm install
```


## Setting Up your testing site for Wordpress
1. Open react/public/index.html
2. Add your CSS include in the head to your active theme. (yes this is manual for now)

## Create New Components
In addition to creating components in React we have to make them available to the ReactLauncher.
1. Open index.js
2. Import your component.
3. Add your component to the Launcher.

```
ReactLauncher([
    {tagName: 'HelloWorld', component: HelloWorld},
]);

```

## Develop
```
npm start // For development

npm run build // This builds and will be included in your wordpress site.
```

## Notes
There are a couple of weird things..
1. You have to close your tags `<HelloWorld />` will fail but `<HelloWorld></HelloWorld>` will work.
