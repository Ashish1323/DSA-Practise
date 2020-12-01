class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
    set(element,hashh){
        let index=this._hash(element)
        if(!this.data[index]){
            this.data[index]=[]
           
        }
        this.data[index].push([element,hashh])
        return this.data
    }
    get(element){
        let add=this._hash(element)
        let currentKey=this.data[add]
        if(currentKey){
            for(let i=0;i<currentKey.length;i++){
                if(currentKey[i][0]===element){
                    return currentKey[i][1]
                }
            }
        }
        return undefined
    }
  }
  
  const myHashTable = new HashTable(2);
  console.log(myHashTable.set('grapes', 10000))
  console.log(myHashTable.get('grapes'))
  console.log(myHashTable.set('apples', 9))
  console.log(myHashTable.get('apples'))

   
//   myHashTable.set('apples', 9)
//   myHashTable.get('apples')
  