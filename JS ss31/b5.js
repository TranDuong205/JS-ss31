function chunkArrayInGroups(arr, n) {
    const result = [];
    for (let i = 0; i < arr.length; i += n) {
      const chunk = arr.slice(i, i + n);
      result.push(chunk);
    }
  
    return result;
  }
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 3));