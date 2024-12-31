//Simple if else
function checkAge(age){
    if(age>=18){
        console.log('You are eligible to vote.');
    }
    else{
        console.log("You are not eligible to vote.");
    }
}

checkAge(9);
checkAge(21);
checkAge(0);

//multiple if else 

function checkNumber(num){
    if(num > 0){
        console.log("Positive number");
    }
    else if(num<0){
        console.log("negative number");
    }
    else{
        console.log("Zero number found");
    }
}

checkNumber(-5);
checkNumber(0);
checkNumber(25);

//Nested if-else condition

function checkGrade(score){
    let grade;
    if(score>=90){
        grade = 'A';
    }
    else{
        if(score>=80){
            grade = 'B';
        }
        else{
            if(score>=70){
                grade = 'C';
            }
            else{
                grade = 'D';
            }
        }
    }
    console.log(grade);
}

checkGrade(50);
checkGrade(95);
checkGrade(70);
checkGrade(85);


