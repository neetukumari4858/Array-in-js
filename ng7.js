// Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]
var a=[1,2,3,4,5] ;
var b=[]
var c=a.length-1;
b.push(a[c])
for (var i=0; i<=a.length-2; i++){
    b.push(a[i])
}
console.log(b)