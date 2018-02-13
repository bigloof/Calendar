// Calculate Weekend Days
function CalculateWeekendDays(fromDate, toDate) {
    var weekendDayCount = 0;

    while (fromDate < toDate) {
        fromDate.setDate(fromDate.getDate() + 1);
        if (fromDate.getDay() === 0 || fromDate.getDay() == 6) {
            ++weekendDayCount;
        }
    }

    return weekendDayCount;
}

// Calculate Weekdays
function CalculateWeekDays(fromDate, toDate) {
    var weekDayCount = 0;

    while (fromDate < toDate) {
        fromDate.setDate(fromDate.getDate() + 1);
        if (fromDate.getDay() === 1 || fromDate.getDay() === 2 || fromDate.getDay() === 3 || fromDate.getDay() === 4 || fromDate.getDay() == 5) {
            ++weekDayCount;
        }
    }

    return weekDayCount;
}

//Datepicker
var dateObj = new Date();
var month1 = dateObj.getUTCMonth() + 1; //months from 1-12
var day1 = dateObj.getUTCDate();
var year1 = dateObj.getUTCFullYear();

newdate = year1 + ", " + month1 + ", " + day1;
olddate = year1 - 1 + ", " + (month1 + 9) + ", " + day1;



setInterval(function ThaDate() {
    document.getElementById("WD").innerHTML = "Number of week days: "  + (CalculateWeekDays(new Date(olddate), new Date(newdate)));
    document.getElementById("CWD").innerHTML = "Weekday layoffs Allowed: "  + (CalculateWeekDays(new Date(olddate), new Date(newdate))) * '.25';
    document.getElementById("WE").innerHTML = "Number of weekend days: "  + (CalculateWeekendDays(new Date(olddate), new Date(newdate)));
    document.getElementById("CWE").innerHTML = "Weekend layoffs Allowed: "  + (CalculateWeekendDays(new Date(olddate), new Date(newdate))) * '.25';
});
function results(){
    var name = documentgetElementById('name').value;
    var email = document.getElementById('email').value;
    
    document.write("thank you");
    document.write("blah");
    document.write("Your Data");
    
    document.write(name + "<br>");
    document.write(email + "<br>");
}