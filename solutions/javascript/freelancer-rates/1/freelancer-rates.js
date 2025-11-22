export function dayRate(ratePerHour) {
  return ratePerHour*8;
}
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget/(ratePerHour*8));
}
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let numMonth = Math.floor(numDays/22);
  let fullMonthBill = (numMonth*22*8*ratePerHour)*(1-discount);
  let otherBill = (numDays - (numMonth*22))*8*ratePerHour;
  let totalBill = fullMonthBill + otherBill;
  return Math.ceil(totalBill);
}
