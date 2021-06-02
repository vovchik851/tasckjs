//#1
//const apartment = {
    //imgUrl: "https://via.placeholder.com/640x480",
    //descr: "Spacious apartment in the city center",
    //rating: 4,
    //price: 2153,
    //tags: ["premium", "promoted", "top"]
//};

//#2

//const apartment = {//
    //imgUrl: 'https://via.placeholder.com/640x480',
    //descr: 'Spacious apartment in the city center',
    //rating: 4,
    //price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   owner: {
//   name: "Henry",
//   phone: "982-126-1588",
//   email: "henry.carter@aptmail.com"}
//   };

//#3

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// }
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

//#4

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// console.log(ownerName);
// const ownerPhone = apartment.owner.phone;
// console.log(ownerPhone);
// const ownerEmail = apartment.owner.email;
// console.log(ownerEmail);
// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags);
// const firstTag = apartment.tags[0];
// console.log(firstTag);
// const lastTag = apartment.tags[2];
// console.log(lastTag);

//#5

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

//#6 Изменение свойств

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');
// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags);

//#7 Добавление свойств

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//     country: "Jamaica",
//     city : "Kingston",
// }
// console.log(apartment.area);
// console.log(apartment.rooms);
// console.log(apartment.location);

//#8 Короткие свойства

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//     name,
//     price,
//     image,
//     tags
// };
// console.log(product);

//#9 Вычисляемые свойства

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam"
// };

//#10 Цикл for...in

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for (const key in apartment) {
//     keys.push(key);
// values.push(apartment[key]);
// }

//#11 Метод hasOwnProperty()

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
// }
// console.log(keys);
// console.log(values);
// console.log(apartment.service);

//#12 Задача. Подсчёт свойств

// function countProps(object) {
//   let propCount = 0;
// for (const obj in object) {
//     if (object.hasOwnProperty(obj)) {
//         propCount += 1;
//     }
// }
//   return propCount;
// }

//#13 Метод Object.keys()

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);
// }

//#14

// function countProps(object) {
//   let propCount = 0;
//     const keys = Object.keys(object);
//   for (const key of keys) {
//       propCount += 1;
//   }

//   return propCount;
// }

//#15 Метод Object.values()

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);


//#16 Задача. Расходы на зарплату

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     const values = Object.values(salaries);
//     for (const value of values) {
//        totalSalary += value;
//   }
//   return totalSalary;
// }


//#17 Массив объектов

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (let color of colors) {
// hexColors.push(color.hex);
// rgbColors.push(color.rgb)
// };

//#18 Задача. Поиск объекта по значению свойства

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     for (const product of products) {
//         if (productName === product.name) {
//             return product.price;
//         }
//     }
//     return null;
// }

//#19 Задача. Коллекция значений свойства

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     const arrProducts = [];
//     for (const product of products) {
//         if (product[propName]) {
//       arrProducts.push(product[propName]);
//     }
//   }
//   return arrProducts;
// }



//#20



//#21



//#22



//#23



//#24



//#25



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



//#37



//#38



//#39



//#40



//#41