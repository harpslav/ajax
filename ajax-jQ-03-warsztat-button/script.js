'use strict';

//Definicja funkcji
function pobierzDane(event) {
    ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/");
}

//Wywolanie funkcji

let btn = document.getElementById("pobierz-dane");


btn.onclick = pobierzDane;
btn.addEventListener("click", pobierzDane);

//ręczne wywołanie funkcji: pobierzDane(5);

function ajax(method, url) {

    var httpReq = new XMLHttpRequest();
    httpReq.open(method, url);

    httpReq.onreadystatechange = function () {

        //        console.log(httpReq.readyState);

        if (httpReq.readyState == 4) {
            if (httpReq.status == 200) {

                var returnData = httpReq.responseText;
                //parsuje text w JSON na obiekt JSON
                var returnJSONData = JSON.parse(returnData);

                //tworzę nowy obiekt paragraf
                let par = document.createElement("p");
                //tworzę nowy obiekt txtNode
                let txtNode = document.createTextNode(returnJSONData.userName + " " + returnJSONData.userId);
                //wzrzucam tekst z txtNode do paragrafu
                par.appendChild(txtNode);
                /* inny sposób:
                     par.innerText = returnJSONData.userName + " " + returnJSONData.userId;*/

                //jest paragraf z tekstem, ale trzeba go wrzucić gdzieś na stronę
                document.getElementsByTagName("body")[0].appendChild(par);
                //            lub 
                //            document.body.appendChild(par);


                console.log(returnJSONData);
                httpReq = null;

            }
        }
    }


    httpReq.send();

}