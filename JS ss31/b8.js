Hàm Array.prototype.reduce() là một phương thức xây dựng sẵn trong JavaScript, thường được sử dụng để giảm một mảng thành một giá trị duy nhất thông qua việc thực hiện một hàm callback trên từng phần tử của mảng.

Cú pháp của hàm reduce như sau:

Trong đó:
array.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])


callback: Hàm được thực hiện cho mỗi phần tử của mảng, nhận vào bốn tham số (accumulator, currentValue, index, array).
accumulator: Giá trị được tích lũy từ các lần gọi trước của hàm callback hoặc giá trị khởi tạo (nếu được cung cấp).
currentValue: Giá trị của phần tử hiện tại.
index (tùy chọn): Chỉ số của phần tử hiện tại trong mảng.
array (tùy chọn): Mảng được gọi.
Dưới đây là một hàm fakeReduce để mô phỏng tác vụ của hàm reduce:   
function fakeReduce(arr, callback, initialValue) {
    let accumulator = initialValue === undefined ? arr[0] : initialValue;
    const startIdx = initialValue === undefined ? 1 : 0;
  
    for (let i = startIdx; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  
    return accumulator;
  }
  
  // Example usage:
  const sum = fakeReduce([1, 2, 3, 4], function (acc, currentValue) {
    return acc + currentValue;
  }, 0);
  console.log(sum); // Output: 10
  