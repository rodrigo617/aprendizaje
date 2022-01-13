document.getElementById('leer').addEventListener("click",()=>{
    readme(document.getElementById("texto").value);
});

function readme(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}