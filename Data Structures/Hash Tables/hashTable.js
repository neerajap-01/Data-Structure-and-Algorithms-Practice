//Hash Class

class HashTable{
  constructor(size=53){
    this.keyMap = new Array(size)
  }

  __hash(key){
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length,100); i++){
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }
 
/*
///!Set

- Accepts a key and a value
- Hashes the key
- Stores the key-value pair in the hash table array via separate chaining
*/  
  set(key,value){
    let data = [key,value];
    let hashIdx = this.__hash(key)
    if(!this.keyMap[hashIdx]){
      this.keyMap[hashIdx] = []
    }
      this.keyMap[hashIdx].push(data)
  }
 
/*
///!Get

- Accepts a key
- Hashes the key
- Retrieves the key-value pair in the hash table
- If the key isn't found, returns undefined
*/  
  get(key){
    let hashIdx = this.__hash(key)
    if(this.keyMap[hashIdx]){
      for(let val of this.keyMap[hashIdx]){
        if(val[0] == key) return val[1]
      }
    }
    return undefined
  }

/*
///!Keys

- Loops through the hash table array and returns an array of keys in the table
*/  
  keys(){
    let res = []
    for(let val of this.keyMap){
        if(val){
            for(let key of val){
                if(!res.includes(key[0])) res.push(key[0])
            }
        }
    }
    return res
  }  

/*  
///!Values

- Loops through the hash table array and returns an array of values in the table.
*/   
  values(){
    let res = []
    for(let val of this.keyMap){
        if(val){
            for(let key of val){
                if(!res.includes(key[1])) res.push(key[1])
            }
        }
    }
    return res
  }  
}

let hash = new HashTable()