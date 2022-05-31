function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let countApple = 0;
    let countOranges = 0;


    for (let i = 0; i < apples.length; i += 1){
        apples[i] += a    
        if(apples[i] >= s && apples[i] <= t) countApple += 1   
    }
    
    for (let i = 0; i < oranges.length; i += 1){
        oranges[i] += b    
        if(oranges[i] >= s && oranges[i] <= t) countOranges += 1   
    }
    
   console.log(countApple)
   console.log(countOranges)
}