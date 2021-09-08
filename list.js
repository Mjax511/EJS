const createList = (arr) => {
    let count = 0;
    const formList = () => {
        if (count >= arr.length-1) {
            const tempObj = {value: arr[count], next: undefined};
            return tempObj;
        } else {
            const thisObj = {};
            thisObj.value = arr[count];
            count++;
            thisObj.next = formList();
            return thisObj;
        }
    }
    return formList();
}

const createArr = (obj, retArr = []) => {
    // const retArr = [];
    if (!obj.next) retArr.push(obj.value);
    else {
        retArr.push(obj.value);
        createArr(obj.next, retArr);
    }
    return retArr;
}
const newList = (element, list) => {
    return {
        value: element,
        next: list
    }
}
const nth = (list, index) => {
     if (index == 0) return list;
     return nth(list.next, index-1);
 }

console.log(createList([4,11]));
console.log(createList([4,11,14]));
console.log(createList([4,11,14]).next);
const arrObj = createList([4,11,14,21,898]);
console.log(createArr(arrObj));
const testArr = [];
const arrObj2 = (newList(88, arrObj));
console.log(createArr(arrObj2));
console.log(nth(arrObj2, 4));

// const newObj = {};
// console.log(newObj);
// Object.assign(newObj,{
//     value: 'test',
//     next: 'test'
// });
// console.log(newObj);
