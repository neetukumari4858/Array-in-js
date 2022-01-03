var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
unique=[]
duplicate=[]
for (var i of n){
    if (!unique.includes(i)){
        unique.push(i)
    }
}
for (var j of unique){
    var c=0
    for (var k of n){
        if (k===j){
            c++
        }
    }
    if (c>1){
        duplicate.push(j)
    }
}
console.log(duplicate)
console.log(unique)


