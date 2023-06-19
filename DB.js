function guardarDatos() {
    let nombreI = document.getElementById("nombreI").value;
    let apellidoI = document.getElementById("apellidoI").value;
    let numDocuI = document.getElementById("numDocuI").value;
    let textoI = document.getElementById("textoI").value;
  
    let datos = {
      nombreI: nombreI,
      apellidoI: apellidoI,
      numDocuI: numDocuI,
      textoI: textoI,
    }
  
    let url = "http://localhost:8000/api/DatosBoutique";
    
  
    let parametro = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos),
    }
  
    fetch(url, parametro)
      .then(response => {
        console.log(response);
        console.log(response.json());
        if (response.status == 201 || response.status == 200) {
          alert("Datos guardados en DB!!");
          const url = `https://api.whatsapp.com/send?phone=${3164196511}&text=Hola,%20es%20un%20gusto%20poderte%20atender.`;
          window.open(url, '_blank');
          document.getElementById("nombreI").value = "";
          document.getElementById("apellidoI").value = "";
          document.getElementById("numDocuI").value = "";
          document.getElementById("textoI").value = "";
        } else {
          alert("Error en la creación de los datos o Por favor, guarde el numero.!!");
        }
      });
  
    return true;
  }
  

