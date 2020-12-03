var lengthOfLongestSubstring = function(s) {
  let count=0;
  let finalArray=[]
  let map={}
  var j=0
  for(let i=j; i<s.length ; i++){
    if(Object.keys(map).find(ele=>ele==s[i])){
        finalArray.push(count)
        count=0
        j=map[s[i]]+1
        i=j;
        map= new Map() 
    }
    
    count++ 
    map[s[i]]=i 
  }

  finalArray.push(count)
  //console.log(finalArray)
  return Math.max(...finalArray)
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("dvdf"))