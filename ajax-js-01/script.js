'use strict';

//definicja funkcja ajax
function ajax(method, url) {

    //utworzenie obiektu
    var httpReq = new XMLHttpRequest();

    //ww obiekt można wyświetlić przez
    //console.log(httpReq);

    //metoda do funkcji ajax
    httpReq.open(method, url);

    //pobieranie obiektu JSON ze strony
    //httpReq.open("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");
    //to jest do sparametryzowania - uniwersalna funkcja ajax
    
    httpReq.onreadystatechange = function () {

        console.log(httpReq.readyState);
        //zmiany statusu

        if (httpReq.readyState == 4) {
            if (httpReq.status == 200) {

                //            var returnData = httpReq.responseXML;
                //wyświetla null

                var returnData = httpReq.responseText;
                //wyświetla w formacie JSON
                var returnJSONdata = JSON.parse(returnData);

//                console.log(returnData);
                  console.log(returnJSONdata);
                //wyświetla jako obiekt JSON

                httpReq = null;
            }
        }
    }


    httpReq.send();
    
}

ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl");

ajax("GET", "http://echo.jsontest.com/Student1/Jan/Student2/Ola")
//klucz i wartość
//http://echo.jsontest.com/insert-key-here/insert-value-here/key/value
