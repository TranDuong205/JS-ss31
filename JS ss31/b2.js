function largestOfArrs(...arrays) {
    if (arrays.length === 0) {
      return [];
    }
  
    const result = [];
  
    for (const arr of arrays) {
      if (arr.length === 0) {
        result.push(undefined);
      } else {
        const max = Math.max(...arr);
        result.push(max);
      }
    }
  
    return result;
  }
  console.log(largestOfArrs([1, 2, 3, 4], [-1, -2, -3], [5, 1, 2, 9]));
  console.log(largestOfArrs([1, 2, 3, 4], [5, 1, 2, 9]));
  console.log(largestOfArrs());