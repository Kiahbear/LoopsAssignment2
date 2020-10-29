/* 
 * initialize an arry with a set of 5 test scores
 * calculate the average score
 * display the grade according to the following scale:
 *      90+ = A
 *      80-89 = B
 *      70-79 = C
 *      60-69 = D
 *      <60 = F
 *      
 * BONUS: Get scores from the user instead of initializing them in the program
 * 
 * Kiah Nicholson-Wilcox
 */

document.write("<p>Grade calculation program</p>");

let grades = [];
let total = 0;
let score = 0;
let counter = 1;
while (counter <= 5){
    score = prompt("Enter the score: ");
    score = Number(score);
    total = total + score;
    grades.push(score);
    counter = counter + 1;
}

let avg = total/5;
document.write("The grade % is " + avg);

if (avg < 60){
    document.write("<br>F");
} 
if (avg >= 60){
    if (avg <=69){
        document.write("<br>D");
    }
}
if (avg >= 70){
    if (avg <= 79){
        document.write("<br>C");
    }
}
if (avg >= 80){
    if (avg <= 89){
        document.write("<br>B");
    }
}
if (avg >= 90){
    document.write("<br>A");
}