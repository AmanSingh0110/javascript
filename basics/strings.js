const name =  "aman"
const repocount = 38
console.log(name + repocount + "value")

console.log(`my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('Aman')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('t'));
console.log(gameName.charAt(3));

const newString = gameName.substring(0,2)
console.log(newString);

const anotherString = gameName.slice(-4,1)
console.log(anotherString);

const newstring = "   ncssdks;l   " 
console.log(newstring);
console.log(newstring.trim());

const url = "http://aman.com/aman%20singh"
console.log(url.replace('%20','__')); 
console.log(url.includes('dchk'));
console .log(gameName.split('a'));



