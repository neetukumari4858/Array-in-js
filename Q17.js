var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var even_sum=0;
var odd_sum=0;
c1=0
c2=0
for (var i of elements ){
    if (i%2===0){
        even_sum=even_sum+i
        c1++
        
    }
    else{
        odd_sum=odd_sum+i
        c2++
    }
}
console.log(parseInt(odd_sum+even_sum/c2))
