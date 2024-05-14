'use strict';


function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = pricePerDroid * quantity;
    const message = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    console.log(message);
    return;

};
makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);


