function relativeSortArray(arr1, arr2) {
    let preValue = arr2[0], j = 0;

    arr1.sort((a, b) => { return a - b });
    // 6  8  17 22 28 44

    let len = arr1.length - 1;
    for (let i = 0; i < arr1.length; i++) {
        while ((arr1[i] != arr2[j]) || (arr1[i] != preValue) && len>0) {
            swap(arr1, i, len);
            len--;

        }
        j++;
        len = arr1.length - 1;
        preValue = arr1[i];
    }
    return arr1;

    //for(let i)

};
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr1 = [28, 6, 22, 8, 44, 17], arr2 = [22, 28, 8, 6];
console.log(relativeSortArray(arr1, arr2))