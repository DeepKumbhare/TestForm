const num1=[1,5,7]
const num2=[2,3,6]

let i=0;
let j=0;
let num3=[]

while(i<num1.length && j<num2.length){
    if(num1[i]< num2[j]){
        num3.push(num1[i])
        i++;
    }
    else if(num1[i]>num2[j]){
        num3.push(num2[j])
        j++;
    }
}

if(i!==num1.length){
    while(i<num1.length){
        num3.push(num1[i]);
        i++;
    }
}

if(j!==num2.length){
    while(j<num2.length){
        num3.push(num2[j]);
        j++;
    }
}

console.log(num3)