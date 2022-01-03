l=[]
l2=[]
const b=[5,3,10,2,78,10,10,33,33,56];
for (var i of b){
    if (!l.includes(i)){
        l.push(i)
    }
}
for (var j of l){
    var c=0
    for (var k of b){
        if (k===j){
            c++
        }
    }
    if (c>1){
        l2.push(c +"  "+j)
    }
}
console.log(l2)













