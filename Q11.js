l=["m","o","k"]
l2=[]
for ( var i=l.length-1; i>=0;i--){
    l2.push(l[i])
}
var c=0
for (var j=0; j<=l.length-1;j++){
    if (l2[j]===l[j]){
        c++
    }
}
if (c===l.length){
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}