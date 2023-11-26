// toán tử  ++ --
// prefix & postfix
//  var a = 7;
//  việc 1 : +1 cho a = a + 1  = 6
// việc 2 : trả về a sau khi được + 1
//  console.log(a)  tiền tố
// hậu tố
//  var a = 6; // việc 1 : copy của a  = 6;
//             // việc 2  : copy của a = a +1;
//             // việc 3 trả về a copy
//   var  output  = a++;
//   console.log('output', output)
//   console.log('a',a);
//  var number  = 8;
//  var output = number++ + --number;
//  //8+7=
//  console.log('output', output);
var number = 4;
var output = ++number *2 + --number *2 + number-- *2;
// 18
console.log('output', output);