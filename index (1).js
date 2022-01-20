// Создайте класс Goods. Класс должен содержать свойства name, amount.
// Создайте на его основе объект goods. Выведите в консоль созданный объект.
// Помните, все классы - в отдельных файлах. Имена классов с большой букв
// class Goods {
//   constructor() {
//     this.name = "name";
//     this.amount = "amount";
//   }
// }
// const goods = new Goods();
// goods.image = "logo.png";
// goods.count = 0;
// goods.draw = function () {
//   return `<div> <img src="${this.image}"> <h2>${this.name}</h2> <h3>${this.amount}</h3> </div>`;
// };

// const goods2 = new Goods();
// goods2.name = "Frog";
// goods2.amount = "amount";
// goods2.image = "logo.png";
// goods2.count = 0;
// goods2.draw = function () {
//   return `<div> <img src="${this.image}"> <h2>${this.name}</h2> <h3>${this.amount}</h3> </div>`;
// };

// document.querySelector(".out-4").innerHTML = goods2.draw();

// class Goods2 extends Goods {
//   sale = true;
//   //   constructor() {
//   //     this.sale = true;
//   //   }
//   draw = function () {
//     return `<div> <img src="${this.image}"> <h2>${this.name}</h2> <h3>${this.amount}</h3> <h4>${this.sale}</h4></div>`;
//   };
// }
// const stateElem = new Goods2();
// document.querySelector(".out-4").innerHTML = stateElem.draw();
//Добавьте в класс Goods свойства image и count - картинка и количество на складе.
//Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).
//Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.
// _______________
//Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false.
//  Перезапишите метод draw так, чтобы он выводил информацию о распродажах.
// _____________
//Создайте на основе класса Goods2 объект goods3. Заполните все поля.
//  Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.
// _____
// Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate.
//  Метод validate должен проверять длину пароля и писать false
//   в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.
class Valid {
  constructor() {
    this.email = "1111@.ru";
    this.password = "********";
    this.isValid = false;
    this.validate = function () {
      this.isValid = this.password.length >= 6 ? true : false;
    };
  }
  // this.isValid = this.validate();
}

const valid = new Valid();
console.log(valid.validate(), valid.isValid);
