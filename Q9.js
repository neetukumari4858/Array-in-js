var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
max=0
secmax=0
numbers.forEach(function (value){
    if (value>max){
        max=value
    }
});
numbers.forEach(function (value){
    if (value<max){
        if (value>secmax){
            secmax=value
        }
    }
});
console.log(secmax)

// with user input

l=[]
var n=require("readline-sync");
for (var j=0; j<9; j++){
    num=n.questionInt("Enter number:=")
    l.push(num)
}
max=0
secmax=0
l.forEach(function (value){
    if (value>max){
        max=value
    }
});
l.forEach(function (value){
    if (value<max){
        if (value>secmax){
            secmax=value
        }
    }
});
console.log(secmax)
