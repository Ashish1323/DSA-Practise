var isValid = function(s) {
  for(let i=0;i<s.length;i++){
      if(s[i]== "("){
          i++
          if(s[i]==")"){
              return true
          }
          else{
              if(s[i]=="{" || "["){
                i++
                if(s[i]=="}" || "]"){
                    return true
                }
                i++
              }
              if(s[i]==")"){
                return true
            }
          }
        return false  
      }
      else if(s[i]== "{"){
        i++
        if(s[i]=="}"){
            return true
        }
        else{
            if(s[i]=="(" || "["){
              i++
              if(s[i]==")" || "]"){
                  return true
              }
              i++
            }
            if(s[i]=="}"){
                return true
            }
        }
        return false  

    }
    else if(s[i]== "["){
        i++
        if(s[i]=="]"){
            return true
        }
        else{
            if(s[i]=="(" || "{"){
              i++
              if(s[i]==")" || "}"){
                  return true
              }
              i++
            }
            if(s[i]=="]"){
                return true
            }
        }
    }
    return false  

  }
  return false  
};

var isValid1 = function(s) {
    
  for(let i=0;i<s.length;i++){
    
    if(s[i]== "("){
    var a=b=0

        i++
        a++
        if(s[i]==")"){
            a--
        }
        else{
            if(s[i]=="{" || "["){
              b++
              i++
              if(s[i]=="}" || "]"){
                  b--
              }
              i++
            }
            if(s[i]==")"){
              a--
          }
        }
    }
    else if(s[i]== "{"){
        var a=b=0
    
            i++
            a++
            if(s[i]=="}"){
                a--
            }
            else{
                if(s[i]=="(" || "["){
                  b++
                  i++
                  if(s[i]==")" || "]"){
                      b--
                  }
                  i++
                }
                if(s[i]=="}"){
                  a--
              }
            }
        }
        else if(s[i]== "["){
            var a=b=0
        
                i++
                a++
                if(s[i]=="]"){
                    a--
                }
                else{
                    if(s[i]=="(" || "{"){
                      b++
                      i++
                      if(s[i]==")" || "}"){
                          b--
                      }
                      i++
                    }
                    if(s[i]=="]"){
                      a--
                  }
                }
            }
}
if(a==0 & b==0){
    return true
}
else{
    return false
}

};




// i++
// i--
// J++
// j--
// k++
// k--

var isValid2 =function(s) {
    var stack=[]
    var open= new Map([["{","}"],["(",")"],["[","]"]])
    var close= new Map([["}","{"],[")","("],["]","["]])
  for(let i=0;i<s.length;i++){
  if(open.get(s[i])){
    stack.push(s[i])
    console.log(stack)
    
  } else if(close.get(s[i])== stack[stack.length-1]){
    console.log(close.get(s[i]))
    stack.pop()
    console.log(stack)
  } 
  else{
      return false
  }
}
return stack.length == 0
}

// console.log(isValid2("()[]{}"))
 //console.log(isValid2("{[]}"))
console.log(isValid2("([)]"))
// console.log(isValid2("(]"))
// console.log(isValid2("()"))