const orderPieces = 4;
const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_DENIED = 'Недостаточно средств на счету!';
let totalPrice;
let balanceCredit;
let message;
totalPrice =  orderPieces * pricePerDroid;
balanceCredit = credits - totalPrice;
if (orderPieces == null) {
message = CANCELED_BY_USER;
}
else if (balanceCredit >= 0) {
message = 'Вы купили '+orderPieces+' дроидов, на счету осталось '+balanceCredit+' кредитов';
}
else if (balanceCredit < 0) {
message = ACCESS_DENIED;
}
console.log(message);