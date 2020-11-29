// mergeSortedArrays([0,3,4,31], [3,4,6,30]);

const mergeSortedArrays =(array1, array2) =>{
    //
    length1 =array1.length
    length2=array2.length
    let mergedArray=[]
   let i=0,j=0;
    while(i<length1 && j<length2){
        //checks the duplicates
        if(array2[j]==array1[i]){
            mergedArray.push(array2[j])
            i++
            j++
        } else{
        // check which one is smaller and pushing it and increasing the pointer of it    
        if(array1[i]<array2[j]){
        mergedArray.push(array1[i])
        i++;
        }
        else{
            mergedArray.push(array2[j])
            j++;
        }
    }
}
// pushing last element
    while(i<length1){
        mergedArray.push(array1[i])
        i++
    }
    while(j<length2){
        mergedArray.push(array2[j])
        j++
    }
    return mergedArray
}


console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]))
console.log(mergeSortedArrays([0,1,3,5], [3,4,6,30]))