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



//№ 24

//№ 25

//№ 26

//№ 27

//№ 28

//№ 29

//№ 31

//№ 32

