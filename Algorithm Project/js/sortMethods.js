const mergeSort = function (arr, key) {
    if (arr.length <= 1) return arr;
  
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid), key);
    const right = mergeSort(arr.slice(mid), key);
  
    return merge(left, right, key);
  };
  
  function merge(left, right, key) {
    let result = [], i = 0, j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i][key] < right[j][key]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
  
    return result.concat(left.slice(i)).concat(right.slice(j));
  }

  const quickSort = function (arr, key) {
    if (arr.length <= 1) return arr;
  
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i][key] < pivot[key]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left, key), pivot, ...quickSort(right, key)];
  };

  const radixSort = function (arr, key) {
    let nums = arr.slice(); // clone
  
    const maxDigits = getMaxDigits(nums.map(obj => obj[key]));
  
    for (let k = 0; k < maxDigits; k++) {
      const buckets = Array.from({ length: 10 }, () => []);
  
      for (let i = 0; i < nums.length; i++) {
        const digit = getDigit(nums[i][key], k);
        buckets[digit].push(nums[i]);
      }
  
      nums = [].concat(...buckets);
    }
  
    return nums;
  };
  
  function getMaxDigits(nums) {
    let max = 0;
    for (let num of nums) {
      max = Math.max(max, num.toString().length);
    }
    return max;
  }
  
  function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }
  