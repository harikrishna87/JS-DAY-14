// 1 Question

let a = prompt("Enter the Value: ");

let b = "people are there";

let c = "nobody is there in house"

if (a == "b") {
    console.log("Turn on Lights & Adjust the temperature")
}
else {
    if(a == 18) {
        console.log("Its Summer Season");
    }
    else {
        if (a == 24) {
            console.log("Its Winter Season");
        }
        else {
            if (a == "c") {
                console.log("Turn off Lights & Lock the Door !!");
            }
            else {
                console.log("Enter Valid Input !!");
            }
        }
    }
}

// 2 Question

let a1 = prompt("Enter the Marks: ");

let a2 = prompt("Enter the marks: ")

if ((a1 & a2  >=50) && (a1 & a2 <= 100)) {
    console.log("You are Graduated !!");
}
else {
    console.log("You are not Graduated !!");
}

// 3 Question

let b1 = prompt("Enter the Value :");

let b2 = prompt("Enter the Value: ");

if (b1 <=500 && (b2 == "Departs in the Morning" || b2 == "Provides a Meal During the Journey")) {
    console.log("Book The Flight !! ");
}
else {
    console.log("Choose Alternate Flight Which Meets Your Criteria !!")
}

// 4 Question

let c1 = prompt("Enter the Value :");

let c2 = prompt("Enter the Value: ");

if (c1 <=80000 && c2 == "Good Graphic Card") {
    console.log("Buy The Laptop !!");
}
else {
    console.log("Choose Alternate Laptop Which Meets Your Criteria !!")
}

// 5 Question

let attendence = prompt("Enter the Attendance :");

let marks = prompt("Enter the Marks : ");

if ((attendence >= 85 && attendence <=100)  && (marks >= 80 && marks <=100)) {
    console.log("You are eligible to Attend Classes");
}
else {
    console.log("You are not eligible to Attend Classes")
}