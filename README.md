# wp-react-starter
A react psuedo web-component based React Compiler for Wordpress


## Getting Starter
```
cd react
npm install
```


## Setting Up your testing site for Wordpress
1. Open react/public/index.html
2. Add your CSS include in the head to your active theme. (yes this is manual for now)


## Develop
```
npm start // For development

npm run build // This builds and will be included in your wordpress site.
```

## Notes
There are a couple of weird things..
1. You have to close your tags `<HelloWorld />` will fail but `<HelloWorld></HelloWorld>` will work.
