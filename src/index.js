//Creamos una función vacia
const encButt = document.getElementById('ButtonEncode');
const cifrAdo = () => {
  const textIng = document.getElementById('inpText').value;
  const ofssetIng = document.getElementById('inpOffset').value;
    const textcif = cipher.encode (ofssetIng,textIng);
  document.getElementById('OutTextEncode').innerHTML = textcif;
}
encButt.addEventListener('click' , cifrAdo)

//Para descifrado
const decButt = document.getElementById('ButtonDecode');
const descifrAdo = () => {
  const textIng = document.getElementById('inpText').value;
  const ofssetIng = document.getElementById('inpOffset').value;
    const textcif = cipher.decode (ofssetIng,textIng);
  document.getElementById('OutTextEncode').innerHTML = textcif;
}
decButt.addEventListener('click' , descifrAdo)
