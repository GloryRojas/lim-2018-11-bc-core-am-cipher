//Creamos una función vacia
let encButt = document.getElementById('ButtonEncode');
let cifrAdo = () => {
  let textIng = document.getElementById('inpText').value;
  let ofssetIng = document.getElementById('inpOffset').value;
    let textcif = cipher.encode (ofssetIng,textIng);
  document.getElementById('OutTextEncode').innerHTML = textcif;
}
encButt.addEventListener('click' , cifrAdo)

//Para descifrado
let decButt = document.getElementById('ButtonDecode');
let descifrAdo = () => {
  let textIng = document.getElementById('inpText').value;
  let ofssetIng = document.getElementById('inpOffset').value;
    let textcif = cipher.decode (ofssetIng,textIng);
  document.getElementById('OutTextEncode').innerHTML = textcif;
}
decButt.addEventListener('click' , descifrAdo)
