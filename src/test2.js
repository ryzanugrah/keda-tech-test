/*************************************************
*
*  2. Buatlah fungsi dengan input array integer
*  untuk mengurutkan angka dari kecil kebesar
*  dan besar kekecil dengan manual tanpa fungsi
*  bawaan javascript
*
*************************************************/

const array1 = [5, 4, 9, 2, 1];
const array2 = [-5, -4, -9, -2, -1];

function sortArrayAscending(arr) {
    // sort array by ascending using bubble sort algorithm
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

function sortArrayDescending(arr) {
    // sort array by descending using bubble sort algorithm
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

console.log(sortArrayAscending(array1));
console.log(sortArrayDescending(array2));

module.exports = { sortArrayAscending, sortArrayDescending }