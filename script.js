function addCourse() {
    let div = document.createElement("div");
    div.classList.add("course");

    div.innerHTML = `
        <input type="text" placeholder="Course Name">
        <input type="number" placeholder="Marks (0-100)">
        <input type="number" placeholder="Credits">
        <span class="grade"></span>
    `;

    document.getElementById("courses").appendChild(div);
}

function calculateGPA() {
    let courses = document.querySelectorAll(".course");
    let totalCredits = 0;
    let totalPoints = 0;

    courses.forEach(course => {
        let marksInput = course.querySelector("input:nth-child(2)");
        let creditsInput = course.querySelector("input:nth-child(3)");
        let gradeSpan = course.querySelector(".grade");

        let marks = parseFloat(marksInput.value);
        let credits = parseFloat(creditsInput.value);

        if (isNaN(marks) || isNaN(credits)) {
            gradeSpan.innerText = "";
            gradeSpan.style.backgroundColor = "transparent";
            return;
        }

        totalCredits += credits;
        let gradePoint = getGradePoint(marks);
        totalPoints += credits * gradePoint;

        let gradeText = getGradeLetter(marks);
        gradeSpan.innerText = gradeText;
        gradeSpan.style.backgroundColor = getGradeColor(gradeText);
    });

    let gpa = totalPoints / totalCredits;
    gpa = Math.floor(gpa * 100) / 100;

    document.getElementById("result").innerText = totalCredits > 0 ? "Your GPA: " + gpa.toFixed(2) : "";
    document.getElementById("total-credits").innerText = totalCredits > 0 ? "Total Credits: " + totalCredits : "";
}

function getGradePoint(marks) {
    if (marks >= 85) return 4.00;
    else if (marks >= 70) return 4.00;
    else if (marks >= 65) return 3.70;
    else if (marks >= 60) return 3.30;
    else if (marks >= 55) return 3.00;
    else if (marks >= 50) return 2.70;
    else if (marks >= 45) return 2.30;
    else if (marks >= 40) return 2.00;
    else if (marks >= 35) return 1.70;
    else if (marks >= 30) return 1.30;
    else if (marks >= 25) return 1.00;
    else return 0.00;
}

function getGradeLetter(marks) {
    if (marks >= 85) return "A+";
    else if (marks >= 70) return "A";
    else if (marks >= 65) return "A-";
    else if (marks >= 60) return "B+";
    else if (marks >= 55) return "B";
    else if (marks >= 50) return "B-";
    else if (marks >= 45) return "C+";
    else if (marks >= 40) return "C";
    else if (marks >= 35) return "C-";
    else if (marks >= 30) return "D+";
    else if (marks >= 25) return "D";
    else return "E";
}

function getGradeColor(letter) {
    switch(letter) {
        case "A+": return "#4caf50"; 
        case "A": return "#43a047";
        case "A-": return "#66bb6a";
        case "B+": return "#cddc39";
        case "B": return "#ffeb3b";
        case "B-": return "#ffc107";
        case "C+": return "#ff9800";
        case "C": return "#ff5722";
        case "C-": return "#f4511e";
        case "D+": return "#e91e63";
        case "D": return "#d81b60";
        case "E": return "#9e9e9e";
        default: return "#9e9e9e";
    }
}

function clearAll() {
    const coursesDiv = document.getElementById("courses");
    coursesDiv.innerHTML = `
        <div class="course">
            <input type="text" placeholder="Course Name">
            <input type="number" placeholder="Marks (0-100)">
            <input type="number" placeholder="Credits">
            <span class="grade"></span>
        </div>
    `;

    document.getElementById("result").innerText = "";
    document.getElementById("total-credits").innerText = "";
}