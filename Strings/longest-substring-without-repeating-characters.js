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
        map= {} 
    }
    
    count++ 
    map[s[i]]=i 
  }

  finalArray.push(count)
  //console.log(finalArray)
  return Math.max(...finalArray)
};

var lengthOfLongestSubstring1 = function(s) {
  let count=0;
  let finalArray=[]
  let map={}
  var j=0
  let leftKey=0;
  let RightKey=0;

  for(let i=0; i<s.length ; i++){
    if(Object.keys(map).find(ele=>ele==s[i]) && map[s[i]]>=leftKey){
        RightKey=i
        count=RightKey-leftKey
        finalArray.push(count)
        leftKey=map[s[i]]+1
        count=0
        i=leftKey
        // j=map[s[i]]+1
        // i=j;
       // map= {} 
    }
    
    count++ 
    map[s[i]]=i
    
  }
  finalArray.push(count)
  console.log(finalArray) 

  //console.log(finalArray)
  return Math.max(...finalArray)
};



console.log(lengthOfLongestSubstring1("abcabcbb"))
console.log(lengthOfLongestSubstring1("bbbbb"))
console.log(lengthOfLongestSubstring1("pwwkew"))
console.log(lengthOfLongestSubstring1("dvdf"))
console.log(lengthOfLongestSubstring1("abcbdca"))