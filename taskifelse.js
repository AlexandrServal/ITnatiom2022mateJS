const shortTermCost = 50;
const weekCoct = 40;
const longTermCost = 30;

console.log(
    getRentalPrice(2),
    getRentalPrice(5),
    getRentalPrice(10)
);

function getRentalPrice(numberOfDays) {
    if (numberOfDays <= 3) {
        return numberOfDays * 50;
    }

    let daysLeft = numberOfDays - 3;

    if (daysLeft <= 4) {
        return 3 * 50 + daysLeft *40;
    }
    daysLeft = numberOfDays - 7;

    return 3 * 50 + 4 * 40 + daysLeft * 30;
}