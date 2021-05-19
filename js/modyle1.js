
// #1
//const productName = "Droid";
//console.log(productName);
//const pricePerItem = 2000;
//console.log(pricePerItem);

//#2
//let productName = "Droid";
//let pricePerItem = 2000;
//productName = "Repair droid"
//pricePerItem = 2000 + 1500;

//#3
//const topSpeed = 160;
//const distance = 617.54;
//const login = "mango935";
//const isOnline = true;
//const isAdmin = false;

//#4
//const pricePerItem = 3500;
//const orderedQuantity = 4;
//const totalPrice = pricePerItem *orderedQuantity;
//console.log(3500 * 4);

//#5
//const productName = "Droid";
//const pricePerItem = 3500;
//const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
//console.log(message);

//#6
//const orderedQuantity = 6;
//const pricePerDroid = 800;
//const deliveryFee = 50;
//let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//console.log(totalPrice);
//const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//console.log(message);


//#7
//function sayHi() {
//console.log("Hello, this is my first function!");
//}
//sayHi(); 
//sayHi(); 
//sayHi();

//#8
//function add(a, b, c) {
//console.log(`Addition result equals ${a + b + c}`);
//}
//add(15, 27, 10);
//add(10, 20, 30);
//add(5, 10, 15);

//#9
//function add(a, b, c) {
//return a + b + c;
//}
//add(2, 5, 8); // 15
//let result = add(15, 27, 10);
//console.log(result);
//result = add(10, 20, 30);
//console.log(result);
//result = add(5, 10, 15);
//console.log(result);

//#10
//function makeMessage (name, price) {
//const message = (`You picked ${name}, price per item is ${price} credits`);
//return message;
//};
//let result = makeMessage("Radar", 6150);
//console.log(result);
//result = makeMessage("Scanner", 3500);
//console.log(result);
//result = makeMessage("Reactor", 8000);
//console.log(result);
//result = makeMessage("Engine", 4070);
//console.log(result);

//#11
//function calculateTotalPrice (orderedQuantity, pricePerItem) {
//const totalPrice = orderedQuantity*pricePerItem;
//return totalPrice;
//};
//let result = calculateTotalPrice(5, 100);
//console.log(result);
//result = calculateTotalPrice(8, 60);
//console.log(result);
//result = calculateTotalPrice(3, 400);
//console.log(result);
//result = calculateTotalPrice(1, 3500);
//console.log(result);
//result = calculateTotalPrice(12, 70);
//console.log(result);

//#12
//function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//const message = (`You ordered droids worth  ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`);
//return message;
//}
//let result = makeOrderMessage(2, 100, 50);
//console.log(result);
//result = makeOrderMessage(4, 300, 100);
//console.log(result);
//result = makeOrderMessage(10, 70, 200);
//console.log(result);

//#13
//function isAdult(age) {
//const passed = age >= 18;
//return passed;
//}
//let result = isAdult(20);
//console.log(result);
//result = isAdult(14);
//console.log(result);
//result = isAdult(8);
//console.log(result);
//result = isAdult(37);
//console.log(result);

//#14
//function isValidPassword(password) {
//const SAVED_PASSWORD = 'jqueryismyjam';
//const isMatch = password === SAVED_PASSWORD;
//return isMatch;
//}
//let result = isValidPassword("mangodab3st");
//console.log(result);
//result = isValidPassword("kiwirul3z");
//console.log(result);
//result = isValidPassword("jqueryismyjam");
//console.log(result);

//#15
//function checkAge(age) {
//let message;
    //if (age >= 18) {   
    //message = 'You are an adult';
//} else {
    //message = 'You are a minor';
//}
//return message;
//}
//let result = checkAge(20);
//console.log(result);
//result = checkAge(8);
//console.log(result);
//result = checkAge(14);
//console.log(result);
//result = checkAge(38);
//console.log(result);

//#16

//function checkStorage(available, ordered) {
  //let message;
  //if (available >= ordered) {   
    //message = "Order is processed, our manager will contact you.";
  //} else
  //{ message = "Not enough goods in stock!";
//}
//return message;
//}
//let result = checkStorage(100, 50);
//console.log(result);
//result = checkStorage(100, 130);
//console.log(result);
//result = checkStorage(200, 20);
//console.log(result);
//result = checkStorage(200, 150);
//console.log(result);
//result = checkStorage(150, 180);
//console.log(result);

//#17

//let a = 5;
//let b = 10;
//let c = 15;
//let d = 20;
//a += 2;
//b -= 4;
//c *= 3;
//d /= 10;

//#18

//function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    //let message;
    //let totalPrice = pricePerDroid * orderedQuantity;
    //if (totalPrice > customerCredits) {
        //message = `Insufficient funds!`;
    //} else {
        //message = `You ordered ${orderedQuantity} droids, you have ${customerCredits-totalPrice} credits left`;
    //}
  //return message;
//}
//let result = makeTransaction(3000, 5, 23000);
//console.log(result);
//result = makeTransaction(1000, 3, 15000);
//console.log(result);
//result = makeTransaction(5000, 10, 8000);
//console.log(result);
//result = makeTransaction(2000, 8, 10000);
//console.log(result);
//result = makeTransaction(500, 10, 5000);
//console.log(result);

//#19

//function checkPassword(password) {
  //const ADMIN_PASSWORD = 'jqueryismyjam';
  //let message;

  //if (password===null) { 
    //message =  'Canceled by user!';
  //} else if (password===ADMIN_PASSWORD) { 
    //message = 'Welcome!';
  //} else {
    //message = 'Access denied, wrong password!';
  //}

 // return message;
//}
//let result = checkPassword("mangohackzor");
//console.log(result);
//result = checkPassword(null);
//console.log(result);
//result = checkPassword("polyhax");
//console.log(result);
//result = checkPassword("jqueryismyjam");
//console.log(result);

//#20

//function checkStorage(available, ordered) {
  //let message;
  //if (ordered === 0) { 
    //message = "There are no products in the order!";
  //} else if (ordered > available) { 
   // message = "Your order is too large, there are not enough items in stock!";
  //} else {
    //message = "The order is accepted, our manager will contact you";
  //}

  //return message;
//}
//let result = checkStorage(100, 50);
//console.log(result);
//result = checkStorage(100, 130);
//console.log(result);
//result = checkStorage(70, 0);
//console.log(result);
//result = checkStorage(200, 20);
//console.log(result);
//result = checkStorage(200, 250);
//console.log(result);
//result = checkStorage(150, 0);
//console.log(result);

//#21

//function isNumberInRange(start, end, number) {
  //const isInRange = (number>=start && number<=end);
  //return isInRange;
//}

//#22

//function checkIfCanAccessContent(subType) {
  //const canAccessContent = (subType === "pro" || subType === "vip");
  //return canAccessContent;
//}

//#23

//function isNumberNotInRange(start, end, number) {
  //const isInRange = number >= start && number <= end;
  //const isNotInRange = !isInRange;
  //return isNotInRange;
//}

//#24

//function getDiscount(totalSpent) {
  //const BASE_DISCOUNT = 0;
  //const BRONZE_DISCOUNT = 0.02;
  //const SILVER_DISCOUNT = 0.05;
  //const GOLD_DISCOUNT = 0.1;
  //let discount;
    //if (totalSpent >= 50000) {
        //discount = GOLD_DISCOUNT;
    //} else if (totalSpent >= 20000 && totalSpent <= 50000) {
        //discount = SILVER_DISCOUNT;
    //} else if (totalSpent >= 5000 && totalSpent <= 20000) {
        //discount = BRONZE_DISCOUNT;
    //} else {
        //discount = BASE_DISCOUNT;
    //}
//////return discount;
//////}
//////let result = getDiscount(137000);
//////console.log(result);
//////result = getDiscount(137000);
//////console.log(result);
//////result = getDiscount(46900);
////console.log(result);
////result = getDiscount(8250);
////console.log(result);
////result = getDiscount(1300);
////console.log(result);
////result = getDiscount(5000);
//console.log(result);
//result = getDiscount(20000);
//console.log(result);
//result = getDiscount(50000);
//console.log(result);

//#25

//function checkStorage(available, ordered) {
  //let message;
    //{
    //message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  //}
  //return message;
//}
//let result = checkStorage(100, 130);
//console.log(result);
//result = checkStorage(200, 20);
//console.log(result);

//#26



//#27
//#28
//#29
//#30
//#31
//#32
//#33
//#34
//#35
//#36