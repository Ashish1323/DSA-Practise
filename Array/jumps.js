var canJump = function(nums) {
  for(let i=0;i<nums.length;){
      if(nums[i]==0){
        return false
      }
      var currentIndex=nums[i]
      var nextIndex=i+currentIndex
      //console.log("c", currentIndex)
      //console.log("n", nextIndex)
      if(nextIndex==nums.length-1){
        return true
    }
      i=nextIndex
}
  return false  
};
var canJump = function(nums) {
var newArray=nums.splice
  //   for(let i=0;i<nums.length;){
//       if(nums[i]==0){
//         return false
//       }
//       var currentIndex=nums[i]
//       var nextIndex=i+currentIndex
//       //console.log("c", currentIndex)
//       //console.log("n", nextIndex)
//       if(nextIndex==nums.length-1){
//         return true
//     }
//       i=nextIndex
// }
//   return false  
};



console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))

var canJump = function(nums) {
  let idx = 0;
  let max = 0;
  let target = nums.length - 1;

  while(idx < nums.length) {
    max = Math.max(max, idx + nums[idx]);
    
    if (max >= target) {
      return true;
    }
    
    if (max <= idx && nums[idx] === 0) {
      return false;
    }
    
    idx++;
  }
  
  return false;
};