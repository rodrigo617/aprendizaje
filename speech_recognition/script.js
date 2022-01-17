let rec;
    if(!(webkitSpeechRecognition in window)){
        alert("disculpa, tu sistema operativo debe ser windows para usar esta API");
    } else {
        rec = new webkitSpeechRecognition();
        rec.lang = "es-AR";
        rec.continuos = true;
        rec.interim = true;
        rec.addEventListener("result", inciciar);

    }

function iniciar(event){
    for(i= event.resultIndex; i< event.results.length; i++){
        document.getElementById('text').innerHTML = event.results[i][0].transcript;
    }
}

rec.start();