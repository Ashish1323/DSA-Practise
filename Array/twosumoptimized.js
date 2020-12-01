
const twosum1 = (arr,sum) =>{
    let i=0;
    let j=0
    var Map={}
    for(i=0;i<arr.length;i++){
        if(Object.keys(Map).find(ele=>ele==arr[i])){
            console.log(Map)
            return [i,Map[arr[i]]]
        }
        let remainingNumber=sum-arr[i]
        Map[remainingNumber]=i       
    }
    console.log(Map)
}

console.log(twosum1([3,2,4],6))
