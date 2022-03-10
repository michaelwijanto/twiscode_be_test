function palindrome(text) {
  const rexp = /[^A-Za-z0-9]/g;
  const formatted = text.toLowerCase().replace(rexp, "");
  const reversed = formatted.split("").reverse().join("");
}
