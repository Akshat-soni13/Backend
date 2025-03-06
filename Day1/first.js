const {Sum}=require("./second");

console.log("Hello Akshat soni");
 
//Require is part of common js module system. It is used to load modules.
// once we write it then we can use another file in the current file.
// Here we are requiring the second file in the first file.
// So, the output will be:
// Hello Vansh soni
// Hello Akshat soni
Sum(2,3);
