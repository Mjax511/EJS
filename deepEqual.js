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
const deepEqual = (obj1, obj2) => {
    const obj1arr = Object.keys(obj1);
    const obj2arr = Object.keys(obj2);
    console.log(obj1arr,obj2arr);
    if (obj1arr.length != obj2arr.length) return false;
    for (let i = 0; i < obj1arr.length; i++) {
        if (typeof obj1[obj1arr[i]] == 'object' && typeof obj2[obj2arr[i]] == 'object'){
            return deepEqual(obj1[obj1arr[i]], obj2[obj2arr[i]]);
        }
        if(obj1[obj1arr[i]] != obj2[obj2arr[i]]){
            return false;
        }
    }
    return true;
}
const arr = [1,3,2,1];
const arr2 = [1,3,5,41, 2];
const test = createList(arr);
const test2 = createList(arr2);
console.log(deepEqual(test, test));
