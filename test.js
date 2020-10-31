function initPieces() {
    return Array.apply(null, Array(8)).map((_, i) => {
        return Array.apply(null, Array(8)).map((_, j) => {
            if ((i === 3 && j === 4) || (i === 4 && j === 3)) return 1;
            if ((i === 3 && j === 3) || (i === 4 && j === 4)) return 2;
            return 0;
        });
    })
}

initPieces();


// Array.apply(null, [1,2,3,4,5]).map(function(){
//     return new Array(5);
// });

let array1 = [1,2,3,4];
let map1 = array1.map(x => x*2);

console.log(map1);

let array2 = Array.apply(null, Array(8));
let map2 = array2.map(x => 0);
console.log(map2);