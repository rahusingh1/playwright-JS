// String length method
console.log("JavaScript".length);
let str = "Rahul"
console.log(str.length);

// char position
console.log("JavaScript"[4]);
console.log("JavaScript".charAt(2));
console.log("JavaScript".charCodeAt(2));// it show the ASCII code of that char // a-z: 97-122

// string in lower and uppercase
console.log("JavaScript".toLowerCase());
console.log("JavaScript".toUpperCase());

// slice method
console.log("JavaScript".slice(2, -4)); // don't include end value 4th index not included

// substring
console.log("JavaScript".substring(2, 5));
console.log("JavaScript".substring(2, -5));
console.log("JavaScript".substring(-2, 3)); // -ve becomes 0 so here it becomes (0, 6)

//concat() method
console.log("Rahul,".concat(" Javascript").concat(" Learner."));

// split returns array
const str1 = "Naveen_Automation_Labs";
let arr = str1.split("_")
console.log(arr[0]);
console.log(arr[2]);

// include
console.log("javaScript".includes("java"));

// replace - it will replace the first occurance only
console.log("dev working with another dev".replace("dev", "QA"))

// replaceAll - it is used to replace all the occurance
console.log("dev working with another dev".replaceAll("dev", "QA"))

// trim - remove all the spaces before and after
console.log("  remove spaces ".trim());
console.log("  remove spaces  ".trimStart());
console.log("  remove spaces ".trimEnd());

// padding - add characters in start or end.
console.log("rahul".padStart(10, "*"));
console.log("rahul".padEnd(10, "*"));

// startwith & endwith which word
console.log("JavaScript".startsWith("J"));
console.log("JavaScript".startsWith('j'));
console.log("JavaScript".endsWith("Script"));

// repeat method
console.log("java ".repeat(2));

// indexOf
console.log("JavaScript".indexOf(3))
console.log("Rahul Singh".indexOf("S"))
console.log("Rahul Singh".indexOf("Rahul"))

// lastindexOf  
console.log("vrinda sakhi vrinda".lastIndexOf("vrinda"))

// search() - where exactly the specific value or keywords available
console.log("Naveen automation labs".search("automati"));


