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
console.log("averge",odd_sum+even_sum/2)
console.log("even count", c1)
console.log("odd count",c2)
console.log("even sum ",even_sum)
console.log("odd sum", odd_sum)
