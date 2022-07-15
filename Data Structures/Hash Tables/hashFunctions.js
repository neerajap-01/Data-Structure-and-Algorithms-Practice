//Basic Hash Function

function basicHash(key, arrayLen){
  let total = 0
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}

//Improved Hash Function

function improvedHash(key, arrayLen){
  let total = 0
  let WEIRD_PRIME = 31
  for (let i = 0; i < Math.min(arrayLen,100); i++) {
    let char = key[i]
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen
  }
  return total
}