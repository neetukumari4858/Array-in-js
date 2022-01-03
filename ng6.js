var a="My name is Neetu ";
var b=["a","e","i","o","u"];
var  Vowel_c=0
var consonant_c=0
for (var i of a){
    if (b.includes(i)){
        Vowel_c++
    }else{
        consonant_c++
    }
}
console.log("vowel count",Vowel_c)
console.log("consonant",consonant_c)