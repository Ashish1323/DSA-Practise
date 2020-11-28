const reverse= strings => {
    // check if string  is there and logic for that....
    if(typeof(strings)== 'string'){
        let reversedstring=""
        for(let i=strings.length-1; i>=0; i--){
            reversedstring+= strings[i]
        }
        return reversedstring
    }
    // else if array  is there and logic for that....
    else{
        let reversedarray=[]
        for(let i=strings.length-1,j=0; i>=0; i--,j++){
            reversedarray[j] = strings[i]
        }
        return reversedarray
    }
   // if(typeof(string))
}

console.log(reverse("abcs"))
// output scba
console.log(reverse([1,2,4]))
// output [ 4, 2, 1 ]