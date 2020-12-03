var backspaceCompare = function(S, T) {
    let str1=[]
    let str2=[]
    for(i=0;i<S.length;i++){
        if(S[i]==="#"){
            str1.pop()
        }
        else{
        str1.push(S[i])
        }
    }
    for(i=0;i<T.length;i++){
        if(T[i]==="#"){
            str2.pop()
        }
        else{
        str2.push(T[i])
        }
    }

    return str1.join('')== str2.join('')

};

console.log(backspaceCompare("ab#c","ad#c"))