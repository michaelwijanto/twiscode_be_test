function palindrome(text) {
  const rexp = /[^A-Za-z0-9]/g;
  const arr = text.split(" ");
  let palindrome = "";
  let formatted = "";
  let reversed = "";
  for (let i = 0; i < arr.length - 1; i++) {
    formatted = (arr[i] + arr[i + 1]).toLowerCase().replace(rexp, "");
    reversed = formatted.split("").reverse().join("");
    if (formatted == reversed) {
      palindrome = arr[i] + " " + arr[i + 1];
    }
  }
  return palindrome;
}

console.log(palindrome("aku suka"));
console.log(palindrome("aku suka makan nasi"));
console.log(palindrome("di rumah saya ada kasur rusak"));
// console.log(palindrome("abcde edcbza"));
