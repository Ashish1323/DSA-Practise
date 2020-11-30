const twosum = (arr,sum) =>{
    if(arr.length>2){
    let i=0;
    let j=arr.length-1;
    //arr.sort()
    while(i<j){
        if(arr[i]+arr[j]==sum){
            var done=1;
            return [i,j]
        }
        else if(arr[i]+arr[j]>sum){
            j--
        }
        else if(arr[i]+arr[j]>sum) {
            i++
        }
    }
    if(done!=1){
        return "Nikal"
}
    }
    else{
       return "chutiya samjha h kya"
    }
}




const twosum1 = (arr,sum) =>{
    let i=0;
    let j=0
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]+ arr[j]==sum){
                return [i,j]
            }
        }
    }
}
console.log(twosum([2],2))
