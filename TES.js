// Berikan spasi di antara kata yang terdapat pada string.
// Contoh 1:
// Input: SelamatPagiDunia
// Output: Selamat Pagi Dunia
function manipulateString(str) {
  // Write your code here
  let result = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str.toUpperCase()[i]) {
      result += " ";
    }
    result += str[i];
  }

  return result;
}

console.log(manipulateString("SelamatPagiDunia"));

// FUNGSI MENGHITUNG HURUF VOCAL (AIUEO)
function countVowels(str, vowels) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
