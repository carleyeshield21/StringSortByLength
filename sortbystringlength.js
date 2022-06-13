// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript

function sortByLength (array) {
    // We create an array arr so we can push each length of each element, then arrange it to ascending order
    arr = []
    for(i=0; i<=array.length-1; i++){
        // console.log(array[i], array[i].length)
        arr.push(array[i].length)
    }
    // Sorting the array arr in ascending order
    arr.sort(function(a, b){return a-b});
    // console.log(arr)

    // Comparing each value element of the array arr to the string length of the array, if it satisfies that the numerical value is equal to the length of the string, we will push it to the array newarr. It will now be in ascending order of the length of each string because we have already sorted the numerical values of the arr array above
    newarr = []
    for(i=0; i<=arr.length-1; i++){
        for(j=0; j<=array.length-1; j++){
            console.log(arr[i], array[j])
            if(arr[i] == array[j].length){
                newarr.push(array[j])
            }
        }
        // console.log('========')
    }
    console.log(newarr)

};
sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"])
console.log('========')
sortByLength(["Beg", "Life", "I", "To"])
console.log('========')
sortByLength(["", "Moderately", "Brains", "Pizza"])