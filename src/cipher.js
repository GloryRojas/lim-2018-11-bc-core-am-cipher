  function Cipher(inText,Offset) {
  var inText2 = inText.toUpperCase()
    for (var i = 0; i < inText2.length; i++) {
      var AscciCode = ""
      var OutText = ""
      AscciCode += ((inText2.charCodeAt(i) - 65 + (Offset%26)) % 26 + 65)
    OutText += String.fromCharCode(AscciCode)
    console.log(OutText);
      }
  }

  function DesCipher(inText,Offset) {
var inText2 = inText.toUpperCase()
  for (var i = 0; i < inText2.length; i++) {
    var AscciCode = ""
    var OutText = ""
    AscciCode += ((inText2.charCodeAt(i) - 65 - (Offset%26)+26) % 26 + 65)
  OutText += String.fromCharCode(AscciCode)
  console.log(OutText);
    }
}
