const lengthOfLongestSubstring= s =>{
    let map={}
    let left=0;
    let longest=0;
    for (let right=0;right<s.length;right++){
        let currentChar=s[right]
        let previous=map[currentChar]
        if(previous>=left){
            left= previous +1
        }
        map[currentChar]=right
        longest= Math.max(longest,(right-left+1))
    }
    return longest
}

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("dvdf"))
console.log(lengthOfLongestSubstring("abcbdca"))