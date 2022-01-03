var n = [10, 11, 12, 13, 14, 17, 18, 19]
l=[]
var number =30;
for (var i of n){
    for (var j of n){
        if (i+j===number){
            l.push([i,j])
        }
    }
}
console.log(l)


// o/p  >>>>>[ [ 11, 19 ],
//   [ 12, 18 ],
//   [ 13, 17 ],
//   [ 17, 13 ],
//   [ 18, 12 ],
//   [ 19, 11 ] ]
