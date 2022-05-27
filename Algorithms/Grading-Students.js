let Arr = [73,67,38,33]

function Umineko(grades){
    for(let i = 0; i< grades.length;i++){
        let test = grades[i] +1
        while(test%5 !== 0){
            test++;
        }
        if(grades[i] < 38) {
            continue
        }
        if(test-grades[i] < 3) grades[i] = test
    }
    return grades
}

console.log(Umineko(Arr))