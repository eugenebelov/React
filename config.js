require.config({
  paths: {
    "react": "build/react",
    "JSXTransformer": "build/JSXTransformer",
    "jsx": "build/jsx",
    "text": "//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text"
  },
  jsx: {
  	fileExtension: '.jsx'
  }
});

require(['main'], function(main){
  
});