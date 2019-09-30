const matrizPolibio = [
  ['a', 'b', 'c', 'd', 'e'],
  ['f', 'g', 'h', 'i', 'j'],
  ['k|q', 'l', 'm', 'n', 'o'],
  ['p', 'r', 's', 't', 'u'],
  ['v', 'w', 'x', 'y', 'z']
]

const str = 'bola polibio'

function findPosition ({ matrizPolibio, character }) {
  for (const key in matrizPolibio) {
    const rowMatriz = matrizPolibio[key]
    console.log('rowMatriz: ', rowMatriz)
    console.log('character: ', character)
    let pos
    rowMatriz.map((charRow, index) => {
      if (character === charRow) {
        pos = index
      }
    })

    if (pos) return { pos, key }
    continue
  }
}

for (const char in str) {
  let character = str[char]

  let charPosition = findPosition({ matrizPolibio, character })
  console.log('charPosition: ', charPosition)
}
