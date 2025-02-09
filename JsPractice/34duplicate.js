const number = [1, 2, 3, 4, 4, 4, 5, 2, 3, 5, 5, 2, 6, 7, 8];
const langs = ["java", "javascript", "Ruby", "R", 'Go', 'Go', 'java', 'R'];


const uniqueNumbers = [... new Set(number)];
console.log(uniqueNumbers);

const uniqueLang = [... new Set(langs)];
console.log(uniqueLang);
