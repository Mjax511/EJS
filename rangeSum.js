const range = (start, end, step = 1) => {
    const retArr = [];
    for (i = start; i <= end; i+=step) {
        retArr.push(i);
    }
    return retArr;
}

const sumRange = (arr, afunc) => {
    console.log(arr);
    return afunc(arr);
}

const sum = (arr) => arr.reduce((a,b) => a+b);

console.log(sumRange(range(5,2,-1), sum));
// console.log(Math.sum([1,2,3]));
