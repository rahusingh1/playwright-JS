function checkDayOfWeek(dayNumber){
    let day;
    switch (dayNumber) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        default:
            console.log("Invalid input");
            break;
    }
    // console.log(day);   
    return day;
}

weekday = checkDayOfWeek(0);
console.log(weekday);
console.log(checkDayOfWeek(3));
console.log(checkDayOfWeek(7));

function checkMonth(monthNumber){
    let mon;
    switch(monthNumber){
        case 1:
            mon = 'jan';
            break;
        case 2:
            mon = 'feb';
            break;
        default:
            console.log("invalid entry");
            break;
    }

    console.log(mon);
}

checkMonth(1);
checkMonth(6);

function checkBrowser(browserName){
    let browser;
    switch (browserName){
        case "chrome":
            browser = "chrome";
            break;
        case "firefox":
            browser = "firefox";
            break;
        case "edge":
            browser = "edge";
            break;
        default:
            console.log("invalid browser");
            break;
    }
    return browser;
}

console.log(checkBrowser("opera"));

//multi env: dev, qa, uat, prod
// multi user: admin, customer,seller, distributor, cat manager.