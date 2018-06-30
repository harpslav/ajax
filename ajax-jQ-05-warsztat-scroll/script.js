'use strict';
$( function() {

    window.addEventListener('scroll', function (){
        console.log("działa");
    });
    
    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.offsetHeight;

});