const arr = [1, 2, 3, 4, 1, 0, 2, 2];

function divide(arr, n) {
    let subarrays = [];
    let currentSubarray = [];
    let currentSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        // Agar currentSum + arr[i] n se zyada hai, toh hum currentSubarray ko subarrays mein daal denge
        if (currentSum + arr[i] > n) {
            subarrays.push(currentSubarray);
            currentSubarray = [];
            currentSum = 0;
        }
        currentSubarray.push(arr[i]);
        currentSum += arr[i];
    }
    
    // Last subarray ko bhi add kardo
    subarrays.push(currentSubarray);
    
    return subarrays;
}

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
