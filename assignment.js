//https://github.com/ssafoundation/assignment3

// =============================

//kilometer To Meter
function kilometerToMeter(meter) {
    var kilometer = meter * 1000;
    return kilometer;
}
var totalMeter = kilometerToMeter(1);
console.log(totalMeter);

//kilometer To Meter


// ======================================


// budget

function budgetCalculator(watch, mobile, laptop) {
    watch = watch * 50;
    mobile = mobile * 100;
    laptop = laptop * 500;
    var total = watch + mobile + laptop;
    return total;
}
var totalBudget = budgetCalculator(1, 2, 3);
console.log(totalBudget);

// budget


// ===================================


// hotel rent 
function hotelCost(perDay) {
    var perDayCost = 0;

    if (perDay <= 10) {
        perDayCost = perDay * 100;
    } else if (perDay <= 20) {
        var firstPert = 10 * 100;
        var remaining = perDay - 10
        var secondPert = remaining * 80;
        perDayCost = firstPert + secondPert;
    } else {
        var firstPert = 10 * 100;
        var remaining = perDay - 10
        var secondPert = remaining * 50;
        perDayCost = firstPert + secondPert;
    }

    return perDayCost;
}

var totalCost = hotelCost(50);
console.log(totalCost);

// hotel rent





// =====================================


























//mega-friend
var friendList = ['kafi', 'rafi', 'hadi', 'tamim', 'iqbal', 'topu', 'akhtaruzzaman', 'monyr'];
var frinds = '';

function megaFriend(frinds) {
    for (var i = 0; i < friendList.length; i++) {

        if (friendList[i].length > frinds.length) {
            frinds = friendList[i];
        }
    }
    return frinds;
}
var bestFriend = megaFriend(friendList);
console.log(bestFriend);
//mega-friend