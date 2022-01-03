var a="google"
l=[]
for (var i of a){
    if (!l.includes(i)){
        l.push(i)
    }
}
console.log(l)
for (var j of l){
    var c=0
    for (var k of a){
        if (k===j){
            c++
        }
    }
    console.log(j,c)
}
