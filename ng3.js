a=[10,4,5,1,50,6,9]
var max=0;
var min=a[0]
for (var i of a){
    if (i>max){
        max=i
    }
    if (i<min){
        min=i
    }
}

console.log("max",max)
console.log("min",min)

