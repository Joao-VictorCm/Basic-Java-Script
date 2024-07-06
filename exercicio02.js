//Life in Weeks Coding Exercise

function lifeInWeeks(age) {
    var yersRemaining= 90 - age;
    var dias = yersRemaining * 365;
    var semnas = yersRemaining * 52;
       var meses = yersRemaining * 12;
    
    console.log('You have ' + dias + ' days, ' + semnas + ' weeks, and ' + meses + ' months left.');
}

lifeInWeeks(12);