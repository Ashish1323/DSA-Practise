const reverse = string =>{
    // console.log(string[1])
    // let stringarray=[];
    // for(j=0; j<string.length; j++){
    //     stringarray[j]=string[j]
    // }
    // console.log(stringarray)
    // let reversedarray=[]
    let reversedarray=""
    for(let i=string.length-1,j=0; i>=0; i--,j++)
    {
        
        reversedarray=reversedarray + string[i]
    }
    console.log(reversedarray)

    let strings=""
      for(j=0; j<reversedarray.length; j++){
        strings=strings + reversedarray[j]
    }
    return strings
}

console.log(reverse("Hello Madarchod Bhenke lode"))