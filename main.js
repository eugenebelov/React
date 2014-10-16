define(['react', 'jsx!component'], function (React, Component) {
   
   React.renderComponent(new Component(), document.getElementById('viewExported'));
   
});