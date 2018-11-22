window.cipher = {
  encode : (string,Offset) => {
      var string2 = string.toUpperCase()
      var OutText = ''
      for (var i = 0; i < string2.length; i++) {
        AscciCode = ((string2.charCodeAt(i) - 65 + (Offset%26)) % 26 + 65)
        OutText += String.fromCharCode(AscciCode)
        }
      return OutText;
      } ,
 decode : (string,Offset) => {
      var string2 = string.toUpperCase()
      var OutText = ''
      for (var i = 0; i < string2.length; i++) {
        AscciCode = ((string2.charCodeAt(i) - 65 - (Offset%26)+26) % 26 + 65)
        OutText += String.fromCharCode(AscciCode)
        }
      return OutText;
    }
 };
