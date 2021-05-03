// problem-01(kilometerToMeter)
function kilometerToMeter(kilometer) {
  if (kilometer >= 0) {
    var meter = kilometer * 1000;
    return meter;
  } else {
    return "Distance can't be negative!!";
  }
}
var result = kilometerToMeter(8);
console.log(result);



//Problem-02(budgetCalculator)
function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
  var totalCost =
    numberOfWatch * 50 + numberOfPhone * 100 + numberOfLaptop * 500;
  return totalCost;
}
var ultimateCost = budgetCalculator(1, 1, 1);
console.log(ultimateCost);



//problem-03(hotelCost)
function hotelCost(stayingDays) {
  var cost = 0;
  if (stayingDays <= 10) {
    cost = stayingDays * 100;
  } else if (stayingDays <= 20) {
    cost = 1000 + (stayingDays - 10) * 80;
  } else {
    cost = 1000 + 800 + (stayingDays - 20) * 50;
  }
  return cost;
}
var ultimateCost = hotelCost(23);
console.log(ultimateCost);



//Problem-04(megaFriend)
var friendsGroup = ["Anik", "Naresh", "Joya", "Arnob", "Puspayan"];
function megaFriend(names) {
  var largestIndex = 0;
  for (var i = 0; i < names.length; i++) {
    if (names[i].length > names[largestIndex].length) {
      largestIndex = i;
    }
  }
  return names[largestIndex];
}
var verification = megaFriend(friendsGroup);
console.log(verification);
