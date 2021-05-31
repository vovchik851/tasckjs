//№ 1

//function checkAge(age) {
  //if (age>=18) { 
    //return "You are an adult";
//}

//return "You are a minor";
//}

//№ 2

//function checkPassword(password) {
  //const ADMIN_PASSWORD = "jqueryismyjam";

  //if (password === ADMIN_PASSWORD) {
    //return "Welcome!";
    //}
    
    //return "Access denied, wrong password!";
//}


//№ 3

//function checkStorage(available, ordered) {

  //if (ordered === 0) {
    //return "Your order is empty!";
  //} if (ordered > available) {
    //return "Your order is too large, not enough goods in stock!";
  //} 
    //return "The order is accepted, our manager will contact you";
//}

//№ 4

//const fruits = ["apple", "plum", "pear", "orange"];

//№ 5

//const fruits = ["apple", "plum", "pear", "orange"];
//const firstElement = fruits[0];//первый элемент массива
//const secondElement = fruits[1];//второй элемент массива
//const lastElement = fruits[3];//последний элемент массива

//№ 6

//const fruits = ["apple", "plum", "pear", "orange"];
//fruits[1] = "peach";
//fruits[3] = "banana";

//№ 7

//const fruits = ["apple", "peach", "pear", "banana"];
//const fruitsArrayLength = (fruits.length);

//№ 8

//const fruits = ["apple", "peach", "pear", "banana"];
//const lastElementIndex = fruits.length - 1;
//const lastElement = fruits[lastElementIndex];

//№ 9

//function getExtremeElements(array) {
 //const firstElement = array[0];
  //const lastElementIndex = array.length - 1;
  //const lastElement = array[lastElementIndex];
//return [firstElement, lastElement];
//}

//let message = (getExtremeElements([1, 2, 3, 4, 5]));
//console.log(message);

//№ 10
//function splitMessage(message, delimeter) {
  //let words;
//words = message.split(delimeter);
  //return words;
//}
//let message = splitMessage("Mango hurries to the train", " ");
//console.log(message);

//№ 11

//function calculateEngravingPrice(message, pricePerWord) {
    //return message.split(" ").length * pricePerWord;
//}
//let message=calculateEngravingPrice("JavaScript is in my blood", 10)
//console.log(message);
//№ 12

//function makeStringFromArray(array, delimeter) {
  //let string;
//string = array.join(delimeter);
  //return string;
//}
//let result = makeStringFromArray (["Mango", "hurries", "to", "the", "train"], " ");
//console.log(result);

//№ 13

//function slugify(title) {

//return title.toLowerCase()
    //.trim()
    //.split(" ")
    //.join("-");

//}
//let result = slugify("Arrays for begginers");
//console.log(result);
//result = slugify("English for developer");
//console.log(result);

//№ 14

//const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
//const firstTwoEls = fruits.slice(0,2);
//const nonExtremeEls = fruits.slice(1,4);
//const lastThreeEls = fruits.slice(-3);

//№ 15

//const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
//const newClients = ['Peach', 'Houston'];

//const allClients = oldClients.concat(newClients);

//№ 16

    //function makeArray(firstArray, secondArray, maxLength) {
    //let allArray = firstArray.concat(secondArray);
    //const newArray = allArray.slice(0, maxLength);
        //return newArray;
  //}

//№ 17

//const start = 3;
//const end = 7;

//for (let i = start; i <= end; i += 1) { // Change this line
  //console.log(i);
//}

//№ 18 сума чисел

//function calculateTotal(number) {
//let sum=0;
//for (let i = 1; i <= number; i += 1) {
//sum+=i;
//}
  //return sum;
//}

//№ 19

//const fruits = ['apple', 'plum', 'pear', 'orange'];

//for (let i = 0; i < fruits.length; i+=1) { 
  //const fruit = fruits[i]; 
  //console.log(fruit);
//}

//№ 20

//function calculateTotalPrice(order) {
  //let total = 0;
//for ( let i = 0; i < order.length; i+=1) { 
  //total += order[i]; 
//}
  //return total;
//}

//№ 21

//function findLongestWord(string) {
    //const newArray = string.split(" ");
    //console.log(newArray);
    //let findLongestWord = newArray[0];
    //for (let i = 0; i < newArray.length; i+=1) { 
        //if (findLongestWord.length < newArray[i].length)
        //{
            //findLongestWord = newArray[i];
        //}
    //}
    //return findLongestWord;
//}
//let result = findLongestWord("The quick brown fox jumped over the lazy dog");
//console.log(result);

//№ 22 Метод push()

//function createArrayOfNumbers(min, max) {
  //const numbers = [];
//for(let i = min; i<=max; i+=1){
  //numbers.push(i);
  //}
  //return numbers;
//}

//№ 23

//function filterArray(numbers, value) {
    //const result = [];
    //for (let i = 0; i < numbers.length; i += 1) {
        //if (numbers[i] > value) {
            //result.push(numbers[i]);
        //}        
    //}
    //return result;
//}

//№ 24

//function checkFruit(fruit) {
  //const fruits = ["apple", "plum", "pear", "orange"];
  //return fruits.includes(fruit);
//}

//№ 25 Функция инклуд и пуш

//function getCommonElements(array1, array2) {
  //const uniqieElements = [];
	//for (const element of array1) {
      //if (array2.includes(element)) {
        //uniqieElements.push(element);
        //}
//}
	//return uniqieElements;
//} 

//№ 26 Цикл FOR....OF

//function calculateTotalPrice(order) {
  //let total = 0;
  //for (const item of order) {
    //total += item;
  //}
  //return total;
//}

//№ 27 Цикл FOR....OF

//function filterArray(numbers, value) {
  //const filteredNumbers = [];
  //for (const item of numbers) {
    //const number = item;
    //if (number > value) {
      //filteredNumbers.push(number);
    //}
  //}
  //return filteredNumbers;
//}

//№ 28

//const a = 3 % 1; //число 3 залишок 0
//const b = 4 % 3; // число 1 залишок 1
//const c = 11 % 8;
//const d = 12 % 7;
//const e = 8 % 6;

//№ 29

//function getEvenNumbers(start, end) {
//const filteredNumbers = [];
    //for (let i = start; i <= end; i += 1) {
        //if (i % 2 === 0) {
             //filteredNumbers.push(i);
         //}
    //}
//return filteredNumbers;
//}

//№ 30 Оператор break

//const start = 6;
//const end = 27;
//let number;

//for (let i = start; i < end; i += 1) {
  //if (i % 5 === 0) {
    //number = i;
    //break;
  //}
//}

//№ 31 Оператор return

//function findNumber(start, end, divisor) {
  //let number;
  //for (let i = start; i < end; i += 1) {
    //if (i % divisor === 0) {
     //return i;
    //}
  //}
  //return number;
//}

//№ 32

//function includes(array, value) {
  //for (const item of array) {
    //const number = item;
    //if (number === value) {
     //return true;
    //}
  //}
  //return false;
//}
