const flatten = (arr) => {
    const retArr = arr.reduce((a,b) => a.concat(b),[]);
    return retArr;
}

const myLoop = (value, tf, bf, uf) => {
    for (let i = 0; i < value; i++) {
        if (!tf(i)) return false;
        bf(i);
        i = uf(i);
    }
}

const everything = (arr, func) => {
    if (arr.some(e => !func(e) ? true : false)) return false;
    return true;

    // flag = true
    // arr.forEach(e => {
    //     if (!func(e)){
    //         console.log(e)
    //         flag = false;
    //         return;
    //     }
    // })

    // return flag;
}

const test = [[],[89,6],[8,98,78],[4]];
const test2 = [89,6,8,98,78];

console.log(flatten(test));
console.log(everything(test2, n => n > 10));
