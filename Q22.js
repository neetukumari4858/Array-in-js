
const mainStr = 'The quick brown fox jumped over the lazy dog .the dog slept over the verandah.';
const data = mainStr.split(' ');
subStr = "over"
space=" "
for (var i of  data){
    if (i===subStr){
        space=space+" "
    }
    else{
        space=space+i+" "
    }
}
console.log(space)



