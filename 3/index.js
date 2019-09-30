const express = require('express')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  const matrizPolibio = [
    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h', 'i', 'j'],
    ['kq', 'l', 'm', 'n', 'o'],
    ['p', 'r', 's', 't', 'u'],
    ['v', 'w', 'x', 'y', 'z']
  ]

  const { str } = req.query

  function findPosition ({ matrizPolibio, character }) {
    for (const row in matrizPolibio) {
      const rowMatriz = matrizPolibio[row]
      let pos

      rowMatriz.map((charRow, index) => {
        let patt = new RegExp(character)
        if (patt.test(charRow)) {
          pos = index
          return pos
        }
      })

      if (pos >= 0) return `${row}${pos}`
    }
  }

  function criptografa (str) {
    let arrayPositions = []
    for (const char in str) {
      let character = str[char]

      let charPosition = findPosition({ matrizPolibio, character })
      if (charPosition) {
        arrayPositions.push(charPosition)
      }
    }
    return arrayPositions.join('')
  }

  function decriptografa (strCrypto, matriz) {
    let decryted = []
    for (let i = 0; i < strCrypto.length; i += 2) {
      let [row, pos] = strCrypto.slice(i, i + 2)

      decryted.push(matriz[row][pos])
    }
    return decryted.join('')
  }

  res.send({
    criptografa: criptografa(str),

    decriptografa: decriptografa(criptografa(str), matrizPolibio)
  })
})

server.listen(process.env.PORT || 5000)
