// current water= Min(maxL,maxR) - Current Height
// var trap = function(height) {
//     let maxL=0, maxR=0, currentWater=0, totalWater=0
//     for(let i=0;i<height.length;i++){
       
//         for(j=i;j>=0;j--){
//             if(height[j]>maxL){
//                 maxL=height[j]
//             }
//         }
//         if(height[i]>maxR){
//             maxR=height[i]
//         }
//         console.log(maxR)
//         currentWater= Math.min(maxR,maxL) - height[i]
//         //console.log(currentWater)
//         if(currentWater>0){
//             totalWater+=currentWater
//         }
//     }
//     return totalWater

// };

let trap = height =>{
    let maxRight=[]
    let maxLeft=[]
    let len=height.length
    maxLeft[0]=height[0]
    maxRight[len-1]=height[len-1]

    for(i=1;i<len;i++){
        if(height[i]>maxLeft[i-1]){
            maxLeft.push(height[i])
        }
        else{
            maxLeft.push(maxLeft[i-1])
        }
    }
    for(j=len-2;j>=0;j--){
        if(height[j]>maxRight[j+1]){
            maxRight[j]=height[j]
        }
        else{
            maxRight[j]=maxRight[j+1]
        }
    }
    let sum=0
    for(k=0;k<len;k++){
        sum= sum +(Math.min(maxRight[k],maxLeft[k]) - height[k])
    }
 
    return sum
}

console.log(trap([0,1,0,2,1,0,3,1,0,1,2]))
//lmax=          [0,1,1,2,2,2,3,3,3,3,3]
// rmax=         [3,3,3,3,3,3,3,2,2,2,2] 
console.log(trap([4,2,0,3,2,5]))
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))

