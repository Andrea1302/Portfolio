require('./bootstrap');

window.Vue = require('vue');

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

document.addEventListener("DOMContentLoaded", function() {
    
    const app = new Vue({
        el: '#app',
    });  
});

