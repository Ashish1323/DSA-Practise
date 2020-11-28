const reverse= strings => {
    // check if string  is there and logic for that....
    if(typeof(strings)=== 'string'){
        let reversedstring=""
        for(let i=strings.length-1; i>=0; i--){
            reversedstring+= strings[i]
        }
        return reversedstring
    }
    // else if array  is there and logic for that....
    else if(typeof(strings)=== 'object' &&  strings instanceof Array){
        let reversedarray=[]
        for(let i=strings.length-1,j=0; i>=0; i--,j++){
            reversedarray[j] = strings[i]
        }
        return reversedarray
    }
    else{
        return ("Please Pass Correct Datatype!!")
    }
}

console.log(reverse("abcs xyzc"))
// output czyx scba
console.log(reverse([1,2,4,5,'a','b',10000000,11.5465,[1,4,6],6]))
// output [ 6, [ 1, 4, 6 ], 11.5465, 10000000, 'b', 'a', 5, 4, 2, 1 ]
console.log(reverse({0:1}))
// Please Pass Correct Datatype!!