function fakeFilter(arr, callback) {
    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
      const currentElement = arr[i];
      if (callback(currentElement)) {
        filteredArray.push(currentElement);
      }
    }
    return filteredArray;
  }
  const result1 = fakeFilter([1, 2, 3, 4], function (e) {
    return e % 2 === 0;
  });
  console.log(result1); 
  
  const result2 = fakeFilter([1, 2, 3, 4], function (e) {
    return e % 2 !== 0;
  });
  console.log(result2);
  