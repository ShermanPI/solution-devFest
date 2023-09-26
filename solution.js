function decodeString (encodedString) {
    const encodedCharacters = encodedString.split('')

    const decodedCharacters = encodedCharacters.map(character => {
      const asciiCode = character.charCodeAt(0)
      const decodedAsciiCode = asciiCode - 5
      const decodedCharacter = String.fromCharCode(decodedAsciiCode)

      return decodedCharacter
    })

    const decodedString = decodedCharacters.reverse().join('')
    return decodedString
  }

  const decodedString = decodeString('8757%TLSNRTI%TYSFX%YXJK[JI%YF%^YWFU%JPFP%JMY%SNTO')
  console.log(decodedString)

