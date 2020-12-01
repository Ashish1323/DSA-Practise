var maxArea = function(height) {
    var area;
    var max=0;
    for (let i=0,j=height.length-1; i<height.length;){
        // get area and move the smaller pointer...
            if(height[i]>=height[j]){
                area=height[j]*(j-i)
                j--
            }
            else{
                area=height[i]*(j-i)
                i++
            }
            
            if(area>max){
                max=area;
            }
    }
    return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([4,3,2,1,4]))
console.log(maxArea([1,2,1]))