const reverseArr = (arr) => {
    const l = arr.length;
    for (let i = 0; i < l/2; i++) {
        const temp = arr[arr.length-1-i];
        const temp2 = arr[i];
        arr[i] = temp;
        arr[arr.length-1-i] = temp2
        console.log(arr);
    }
    console.log(arr, 'here');
    return arr;
}
const testArr = [1,2,3,4,5,6];
console.log(testArr);
console.log(reverseArr(testArr));
console.log(testArr, 'after call');
const shorten = (arr) => {
    arr.pop()
}

const test2arr = [7,8,9];
// shorten(test2arr);
console.log(test2arr[0]);
