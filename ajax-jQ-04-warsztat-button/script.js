'use strict';


$(function () {

    $("button").click(function () {
        $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/", function (data) {
            console.log(data);
            	
            $( "body" ).append( "<p></p>" );
                $ ("p").text(data.userId, data.userName);
        });

    });

});