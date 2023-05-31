(function(){
    $(`[data-toggle="tooptip"]`).tooltip()
})

arrayNum = JSON.parse(localStorage.getItem('arrayNum')) || [];
 arrayInfo = JSON.parse(localStorage.getItem('arrayInfo')) || [];
function numero(){
    let numeroE = document.getElementById("numeroE").value;
    let nombreE = document.getElementById("nombreE").value;
    setLocalStorageNum(numeroE, nombreE)
    localStorage.setItem('numeroE', numeroE)
}
document.getElementById('numero').addEventListener('click', function(){numero})

function enviarMensaje(){
    let numeroE = localStorage.getItem('numeroE')
    if(numeroE){
        const url = `https://api.whatsapp.com/send?phone=${3164196511}&text=Hola,%20es%20un%20gusto%20poderte%20atender.`;
        window.open(url, '_blank');
        
    } else {
        alert('Por favor, guarde el numero.')
    }
}
document.getElementById('enviarMensaje').addEventListener('click', function(){
    enviarMensaje()
})

function setLocalStorageNum(numeroE, nombreE){
    const mensaje = alert("Nos comunicaremos pronto!!!");
    arrayNum.push({arrayNumNew: numeroE, arrayNomNew: nombreE});
    localStorage.setItem("arrayNum",JSON.stringify(arrayNum));
    document.getElementById("mensaje");
}

function info(){
    let nombreI =document.getElementById("nombreI").value ;
    let apellidoI =document.getElementById("apellidoI").value ;
    let textoI =document.getElementById("textoI").value ;
    setLocalStorageInfo(nombreI, apellidoI, textoI)
}

function setLocalStorageInfo(nombreI, apellidoI, textoI){
    const mensaje = alert("Nos comunicaremos pronto!!!");
    arrayInfo.push({arrayNom: nombreI, arrayApe: apellidoI, arrayTex: textoI});
    localStorage.setItem("arrayInfo",JSON.stringify(arrayInfo));
    document.getElementById("mensaje");
}


  