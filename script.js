// 1 varianti
let age = -64;
let ticketPrice;

if (age < 0 || age > 120) {
    console.log(`არასწორი ასაკი`)
}
else if (age <= 12) {
    ticketPrice = 5
    console.log(`ბილეთის ფასია: $${ticketPrice}`)
} else if (age <= 17){
    ticketPrice = 10
    console.log(`ბილეთის ფასია: $${ticketPrice}`)
} else if ( age <= 64) {
    ticketPrice = 15
    console.log(`ბილეთის ფასია: $${ticketPrice}`)
} else {
    ticketPrice = 8
    console.log(`ბილეთის ფასია: $${ticketPrice}`)
}


// meore varianti

// let age = -20;
// let ticketPrice;

// if (age < 0 || age > 120) {
//     console.log("არასწორი ასაკი");
// } else if (age <= 12) {
//     ticketPrice = 5;
// } else if (age <= 17) {
//     ticketPrice = 10;
// } else if (age <= 64) {
//     ticketPrice = 15;
// } else {
//     ticketPrice = 8;
// }

// if (ticketPrice !== undefined) {
//     console.log("ბილეთის ფასი: $" + ticketPrice);
// }