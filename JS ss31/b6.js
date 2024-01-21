function fakeFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      const currentElement = arr[i];
      if (callback(currentElement)) {
        return currentElement;
      }
    }
    return undefined;
  }
  const result1 = fakeFind([1, 2, 3, 4], function (e) {
    return e % 2 === 0;
  });
  console.log(result1); 
  
  const result2 = fakeFind([1, 2, 3, 4], function (e) {
    return e % 2 !== 0;
  });
  console.log(result2); 
  