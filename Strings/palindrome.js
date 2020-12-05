var isPalindrome = function(s) {
    s=s.toLowerCase()
    let rev=""
    let news=""
    a=[0,1]
  for(let i=0;i<s.length;i++){
    if(s[i]!=" " && s.charCodeAt(i)>96 && s.charCodeAt(i)<123 || (s.charCodeAt(i)>47 && s.charCodeAt(i)<58) ){
        news+=s[i]
    }  
  }
  for(let j=s.length-1;j>=0;j--){
    if(s[j]!=" " && s.charCodeAt(j)>96 && s.charCodeAt(j)<123 || (s.charCodeAt(j)>47 && s.charCodeAt(j)<58)){
        rev+=s[j]
    }  
  }
  console.log(rev)
  console.log(news)
  return news===rev 
};

console.log(isPalindrome("aba"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("0P"))