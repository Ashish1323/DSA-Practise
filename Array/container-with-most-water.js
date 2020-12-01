var maxArea = function(height) {
    var area;
    var max=0;
    for (let i=0; i<height.length;i++){
        for(let j=i+1;j<height.length;j++){
            if(height[i]>=height[j]){
                area=height[j]*(j-i)
            }
            else{
                area=height[i]*(j-i)
            }
            
            if(area>max){
                max=area;
            }
        }
    }
    return max;
};



console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([4,3,2,1,4]))
console.log(maxArea([1,2,1]))

var maxArea1= height => {
    var area;
    var max=0;
    var maxArrayElement=0, index=0;
    for(i=0;i<height.length;i++){
        if(height[i]>maxArrayElement){
            maxArrayElement=height[i]
            index=i
        }
    }
    //console.log(maxArrayElement,index +"loda")
    for(i=0;i<height.length;i++){
        if(height[i]<=maxArrayElement){
            var b=(index-i)
            var l=height[i]
            area=l*b
        }
        else{
            var b=(index-i)
            var l=maxArrayElement
            area=l*b
        }
        a1=Math.abs(area)
        //console.log(area,max)
        if(a1>max){
            max=a1;
        }
    }
    return max;
}

// // console.log(maxArea1([1,8,6,2,5,4,8,3,7]))
// // console.log(maxArea1([4,3,2,1,4]))
// console.log(maxArea1([1,2,1]))

