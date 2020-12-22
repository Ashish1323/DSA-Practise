// mergeSortedArrays([0,3,4,31], [3,4,6,30]);

const mergeSortedArrays =(array1, m, array2, n) =>{
    //
    length1 =m
    length2=n
    let mergedArray=[]
   let i=0,j=0;
    while(i<length1 && j<length2){
        //checks the duplicates
        let equalArray=array2[j]==array1[i]
        if(false){
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

var merge = function(nums1, m, nums2, n) {
    length1 =m
    length2=n
   let i=0,j=0;
    var copiedarray=nums1
    while(i<length1 && j<length2){
        // check which one is smaller and pushing it and increasing the pointer of it    
        if(nums1[i]<nums2[j]){
        i++;
        }
        else{
            nums1.splice(i,0,nums2[j])
            i++;
            j++;
        }
    
}
    nums1=nums1.slice(0,i+j)
// pushing last element
    while(i<length1){
        nums1.push(copiedarray[i])
        i++
    }
    while(j<length2){
        nums1.push(nums2[j])
        j++
    }
    return nums1
};


//console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]))
//console.log(mergeSortedArrays([], [3,4,6,30]))
console.log(mergeSortedArrays([1,2,3,0,0,0],3, [2,5,6],3))
console.log(merge([1,2,3,0,0,0],3, [2,5,6],3))