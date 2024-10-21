function result() {
    let student = document.getElementById("name").value;
    let english = parseInt(document.getElementById("eng").value);
    let islamiat = parseInt(document.getElementById("ist").value);
    let math = parseInt(document.getElementById("maths").value);
    let physics = parseInt(document.getElementById("phy").value);

    let obtain_m = english + islamiat + math + physics;
    let total_m = 350;
    let per = (obtain_m / total_m) * 100;
    let grade = "";
    let remarks = "";

    if (per >= 80) {
        grade = "Grade: 'A+1'";
        remarks = "Congratulations!✨🎊 for Excellent performance🎊.Keep it up!👍";
    } else if (per >= 70) {
        grade = "Grade: 'A'";
        remarks = "Remarks:  Congratulations!✨you passed!.Keep it up!";
    } else if (per >= 60) {
        grade = "Grade:  'B'";
        remarks = "Remarks:  You passed! but need more attention 😊.";
    } else if (per >= 50) {
        grade = "Grade:  'C'";
        remarks = "Remarks:  You passed! Need hard work.😐";
    } else if (per >= 40) {
        grade = "Grade:  'D'";
        remarks = "Remarks:  You passed! Need hard work🙁.";
    } else if (per >= 33) {
        grade = "Grade:  'E'";
        remarks = "Remarks:  You passed! Need hard work☹";
    } else if (per < 33) {
        remarks = "Failed!";
    }

    document.getElementById("student-name").innerText = "Student name :" + " " + student;
    document.getElementById("obtain-marks").innerText = "Obtained Marks :" + " " + obtain_m + "" + "(out of 350)";
    document.getElementById("percentage").innerText = "Percentage :" + " " + per.toFixed(2) + "%";
    document.getElementById("grade").innerText = grade;
    document.getElementById("remarks").innerText = remarks;
}



