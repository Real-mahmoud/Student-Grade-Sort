let mergeSortTime = 0;

const mergeSort = function (arr, key) {
  const start = performance.now();

  if (arr.length <= 1) {
    mergeSortTime += performance.now() - start;
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), key);
  const right = mergeSort(arr.slice(mid), key);

  const result = merge(left, right, key);
  mergeSortTime += performance.now() - start;


  return result;
};

function merge(left, right, key) {
  const start = performance.now();

  let result = [], i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i][key] < right[j][key]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  const merged = result.concat(left.slice(i)).concat(right.slice(j));

  mergeSortTime += performance.now() - start;
  return merged;
}




let quickSortTime = 0;

const quickSort = function (arr, key) {
  const start = performance.now();

  if (arr.length <= 1) {
    quickSortTime += performance.now() - start;
    return arr;
  }

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

  const result = [...quickSort(left, key), pivot, ...quickSort(right, key)];
  quickSortTime += performance.now() - start;

  return result;
};


let radixSortTime = 0;

const radixSort = function (arr, key) {
  const start = performance.now();

  let nums = arr.slice();
  const maxDigits = getMaxDigits(nums.map(obj => obj[key]));

  for (let k = 0; k < maxDigits; k++) {
    const buckets = Array.from({ length: 10 }, () => []);

    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i][key], k);
      buckets[digit].push(nums[i]);
    }

    nums = [].concat(...buckets);
  }

  radixSortTime += performance.now() - start;
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
