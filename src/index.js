//Creamos una funcion que llame a la propiedad encode y la ligamos a los datos ingresados por el usuario.
let cifrAdo = () => {
  const textIng = document.getElementById('inpText').value;
  const ofssetIng = document.getElementById('inpOffset').value;
    let textcif = cipher.encode (ofssetIng,textIng);
  document.getElementById('OutTextEncode').innerHTML = textcif;
}
//Creamos una variable que llame al boton y la asociamos a la funcion anterior y el evento click.
let encButt = document.getElementById('ButtonEncode');
encButt.addEventListener('click' , cifrAdo)

//Lo mismo que el anterior para descifrado
let descifrAdo = () => {
  const textIng = document.getElementById('inpText').value;
  const ofssetIng = document.getElementById('inpOffset').value;
    let textcif = cipher.decode (ofssetIng,textIng);
  document.getElementById('OutTextEncode').innerHTML = textcif;
}
let decButt = document.getElementById('ButtonDecode');
decButt.addEventListener('click' , descifrAdo)
