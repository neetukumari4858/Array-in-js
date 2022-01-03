// without user input
var c=0
var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
numbers.forEach(function(value){
    c=c+1
});
console.log(c)



// with  user input
l=[]
var n=require("readline-sync");
for (var j=0; j<9; j++){
    num=n.questionInt("Enter number:=")
    l.push(num)
}
var c=0
l.forEach(function(value){
        c=c+1
});
console.log(c)
