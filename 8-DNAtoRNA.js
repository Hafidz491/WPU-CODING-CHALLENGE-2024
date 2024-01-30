// WPU CHALLENGE 2024
// 8/366
// https://www.codewars.com/kata/5556282156230d0e5e000089

// function DNAtoRNA(dna) {
//   let rna = "";
//   for (let i = 0; i < dna.length; i++) {
//     rna += dna[i] === "T" ? "U" : dna[i];
//   }

//   return rna;
// }

// MAPPING
// const DNAtoRNA = (dna) =>
//   dna
//     .split("")
//     .map((el) => (el === "T" ? "U" : el))
//     .join("");

// REGEX
const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

console.log(DNAtoRNA("TTTT"));
