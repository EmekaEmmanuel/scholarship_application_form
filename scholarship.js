let firstNameError = document.getElementById("firstNameError")
let lastNameError = document.getElementById("lastNameError")
let phoneNumberError = document.getElementById("phoneNumberError")
let schoolNameError = document.getElementById("schoolNameError")
let genderError = document.getElementById("genderError")
let age = document.getElementById("age")
let ageError = document.getElementById("ageError")
// let continent = document.getElementById("continent")
let continentError = document.getElementById("continentError")
let country = document.getElementById("country")
let countryError  = document.getElementById("countryError")
let SubjectOneScoreError = document.getElementById("SubjectOneScoreError")
let SubjectTwoScoreError = document.getElementById("SubjectTwoScoreError")
let selectSubjectThree = document.getElementById("selectSubjectThree")
let selectSubjectThreeError = document.getElementById("selectSubjectThreeError")
let SubjectThreeScoreError = document.getElementById("SubjectThreeScoreError")
let selectSubjectFour = document.getElementById("selectSubjectFour")
let selectSubjectFourError = document.getElementById("selectSubjectFourError")
let SubjectFourScoreError = document.getElementById("SubjectFourScoreError")
let selectSubjectFive = document.getElementById("selectSubjectFive")
let selectSubjectFiveError = document.getElementById("selectSubjectFiveError")
let SubjectFiveScoreError = document.getElementById("SubjectFiveScoreError")
let selectSubjectSix = document.getElementById("selectSubjectSix")
let selectSubjectSixError = document.getElementById("selectSubjectSixError")
let SubjectSixScoreError = document.getElementById("SubjectSixScoreError")
let selectSubjectSeven = document.getElementById("selectSubjectSeven")
let selectSubjectSevenError = document.getElementById("selectSubjectSevenError")
let SubjectSevenScoreError = document.getElementById("SubjectSevenScoreError")
let selectSubjectEight = document.getElementById("selectSubjectEight")
let selectSubjectEightError = document.getElementById("selectSubjectEightError")
let SubjectEightScoreError = document.getElementById("SubjectEightScoreError")
let eligibleBtn = document.getElementById("eligibleBtn")
let summary = document.getElementById("summary")


// Getting the inputed value



// 

let one
let two
let three
let four
let five
let six
let seven
let eight


// naming variables for point
let agePoint
let countryPoint
let studentTotalPoint
let sumPoint
var subjectPoint


// var minScoreLength = 3
// var minNumber = 11

// if (element.length == minScoreLength) {
//     alert("ok")
// }



// Array
var africaOptions = ["Nigeria", "Cameroon", "Ghana"]
var asiaOptions = ["China", "Japan", "Korea"]
var southAmericaOptions = ["Mexico", "Columbia", "Brazil"]
var northAmericaOptions = ["Canada", "United States", "Peru"]
var restoftheWorldOptions = ["Australia", "Antartic"]
var subjects = ["Physics", "Chemistry", "Biology", "Economics", "Geography", "Commerce", "Government", "Literature", "Further Mathematics"]



// button

checkBtn.addEventListener("click", function () {
    validateForm()
    
})



// validation coding

function validateForm() {
    if (firstName.value =="") {
        firstNameError.innerHTML = "Enter your firstname"
    }
    else if (lastName.value == "") {
        lastNameError.innerHTML = "Enter your lastname"
    }
    else if (phoneNumber.value == "") {
        phoneNumberError.innerHTML = "Enter your Phone number"
    }
    else if (schoolName.value == "") {
        schoolNameError.innerHTML = "Enter your School name"
    }
    else if (gender.value == "") {
        genderError.innerHTML = "Enter your gender"
    }
    else if (age.value == "") {
        ageError.innerHTML = "Enter your age"
    }
    else if (continent.value == "") {
        continentError.innerHTML = "Enter your Continent"
    }
    else if (country.value == "") {
        countryError.innerHTML = "Enter your Country"
    }
    else if (SubjectOneScore.value == "") {
        SubjectOneScoreError.innerHTML = "Input Score"
    }
    else if (SubjectTwoScore.value == "") {
        SubjectTwoScoreError.innerHTML = "Input Score "
    }
    else if (selectSubjectThree.value == "") {
        selectSubjectThreeError.innerHTML = "Please add subject"
    }
    else if (SubjectThreeScore.value == "") {
        SubjectThreeScoreError.innerHTML = "Input Score"
    }
    else if (selectSubjectFour.value == "") {
        selectSubjectFourError.innerHTML = "Please add subject"
    }
    else if (SubjectFourScore.value == "") {
        SubjectFourScoreError.innerHTML = "Input Score"
    }
    else if (selectSubjectFive.value == "") {
        selectSubjectFiveError.innerHTML = "Please add subject"
    }
    else if (SubjectFiveScore.value == "") {
        SubjectFiveScoreError.innerHTML = "Input Score"
    }
    else if (selectSubjectSix.value == "") {
        selectSubjectSixError.innerHTML = "Please add subject"
    }
    else if (SubjectSixScore.value == "" ) {
        SubjectSixScoreError.innerHTML = "Input Score"
    }
    else if (selectSubjectSeven.value == "") {
        selectSubjectSevenError.innerHTML = "Please add subject"
    }
    else if (SubjectSevenScore.value == "") {
        SubjectSevenScoreError.innerHTML = "Input Score"
    }
    else if (selectSubjectEight.value == "") {
        selectSubjectEightError.innerHTML = "Please add subject"
    }
    else if (SubjectEightScore.value == "") {
        SubjectEightScoreError.innerHTML = "Input Score"
    }

    else {0
        ageCalc()
    }

    cleanError()
}


function cleanError() {
    if (firstName.value !="") {
        firstNameError.innerHTML = ""
    }
    if (lastName.value != "") {
        lastNameError.innerHTML = ""
    }
    if (phoneNumber.value != "") {
        phoneNumberError.innerHTML = ""
    }
    if (schoolName.value != "") {
        schoolNameError.innerHTML = ""
    }
    if (gender.value != "") {
        genderError.innerHTML = ""
    }
    if (age.value != "") {
        ageError.innerHTML = ""
    }
    if (continent.value != "") {
        continentError.innerHTML = ""
    }
    if (country.value != "") {
        countryError.innerHTML = ""
    }
    if (SubjectOneScore.value != "") {
        SubjectOneScoreError.innerHTML = ""
    }
    if (SubjectTwoScore.value != "") {
        SubjectTwoScoreError.innerHTML = ""
    }
    if (selectSubjectThree.value != "") {
        selectSubjectThreeError.innerHTML = ""
    }
    if (SubjectThreeScore.value != "") {
        SubjectThreeScoreError.innerHTML = ""
    }
    if (selectSubjectFour.value != "") {
        selectSubjectFourError.innerHTML = ""
    }
    if (SubjectFourScore.value != "") {
        SubjectFourScoreError.innerHTML = ""
    }
    if (selectSubjectFive.value != "") {
        selectSubjectFiveError.innerHTML = ""
    }
    if (SubjectFiveScore.value != "") {
        SubjectFiveScoreError.innerHTML = ""
    }
    if (selectSubjectSix.value != "") {
        selectSubjectSixError.innerHTML = ""
    }
    if (SubjectSixScore.value != "") {
        SubjectSixScoreError.innerHTML = ""
    }
    if (selectSubjectSeven.value != "") {
        selectSubjectSevenError.innerHTML = ""
    }
    if (SubjectSevenScore.value != "") {
        SubjectSevenScoreError.innerHTML = ""
    }
    if (selectSubjectEight.value != "") {
        selectSubjectEightError.innerHTML = ""
    }
    if (SubjectEightScore.value != "") {
        SubjectEightScoreError.innerHTML = ""
    }

}


function ageCalc() {
        agePoint=0
    if (age.value =="eighteen") {
        agePoint = agePoint + 100;
        console.log('you got 100 point here');
    }
    else if (age.value == "twentyfive") {
        agePoint = agePoint + 80;
        console.log('you got 80 point here');
    }
    else if (age.value == "thirtyone") {
        agePoint = agePoint + 50;
        console.log('you got 50 point here');
    }
    else if (age.value == "thirtysix") {
        agePoint = agePoint + 30;
        console.log('you got 30 point here');
    }
    else if (age.value == "fortyone") {
        agePoint = agePoint + 10;
        console.log('you got 10 point here');
    } 
    
    continentPointers() 
   
}


continent.addEventListener("change", function () {
    continentCalc()
})



function continentCalc() {
    
    if (continent.value == "africa") {
        let countryOptions = ""
        for (let a = 0; a < africaOptions.length; a++) {
            countryOptions += `<option value="${africaOptions[a]}">${africaOptions[a]} </option>`
            
        }
        country.innerHTML = `<option value="">Please select Country </option> ${countryOptions}`
        
}

    else if (continent.value == "asia") { 
        let countryOptions = ""
        for (let a = 0; a < asiaOptions.length; a++) {
            countryOptions += `<option value="${asiaOptions[a]}">${asiaOptions[a]} </option>`
            
        }
        country.innerHTML = `<option value="">Please select Country </option> ${countryOptions}`
    }

    else if (continent.value == "southAmerica") {
        let countryOptions = ""
        for (let a = 0; a < southAmericaOptions.length; a++) {
            countryOptions += `<option value="${southAmericaOptions[a]}">${southAmericaOptions[a]} </option>`
            
        }
        country.innerHTML = `<option value="">Please select Country </option> ${countryOptions}`
    }

    else if (continent.value == "northAmerica") {
        let countryOptions = ""
        for (let a = 0; a < northAmericaOptions.length; a++) {
            countryOptions += `<option value="${northAmericaOptions[a]}">${northAmericaOptions[a]} </option>`
            
        }
        country.innerHTML = `<option value="">Please select Country </option> ${countryOptions}`
    }

    else if (continent.value == "restoftheWorld") {
        let countryOptions = ""
        for (let a = 0; a < restoftheWorldOptions.length; a++) {
            countryOptions += `<option value="${restoftheWorldOptions[a]}">${restoftheWorldOptions[a]} </option>`
            
        }
        country.innerHTML = `<option value="">Please select Country </option> ${countryOptions}`
    }
    
    
}


function continentPointers() {
    countryPoint=0
    if (continent.value == "africa"){
    countryPoint = countryPoint + 50
    console.log("Plus 50 points");}

    else if (continent.value == "asia") {
    countryPoint = countryPoint + 40
    console.log("Plus 40 points");}

    else if (continent.value == "southAmerica") {
    countryPoint = countryPoint + 30
    console.log("Plus 30 points");}

    else if (continent.value == "northAmerica") {
    countryPoint = countryPoint + 20
    console.log("Plus 20 points");}

    else if (continent.value == "restoftheWorld") {
    countryPoint = countryPoint + 10
    console
    .log("Plus 10 points")}

    subjectScore()

}



selectSubjectThree.addEventListener("change", function () {
    let subjectIndex = selectSubjectThree.value
    subjects.splice(subjectIndex, 1)
    loopSubject4()
    loopSubject5()
    loopSubject6()
    loopSubject7()
    loopSubject8()
    
})

selectSubjectFour.addEventListener("change", function () {
    let subjectIndex = selectSubjectFour.value
    subjects.splice(subjectIndex, 1)
    loopSubject5()
    loopSubject6()
    loopSubject7()
    loopSubject8()
    
})

selectSubjectFive.addEventListener("change", function () {
    let subjectIndex = selectSubjectFive.value
    subjects.splice(subjectIndex, 1)
    loopSubject6()
    loopSubject7()
    loopSubject8()
})

selectSubjectSix.addEventListener("change", function () {
    let subjectIndex = selectSubjectSix.value
    subjects.splice(subjectIndex, 1)
    loopSubject7()
    loopSubject8()
})

selectSubjectSeven.addEventListener("change", function () {
    let subjectIndex = selectSubjectSeven.value
    subjects.splice(subjectIndex, 1)
    loopSubject8()
})

selectSubjectEight.addEventListener("change", function () {
    let subjectIndex = selectSubjectEight.value
    subjects.splice(subjectIndex, 1)
   
})



loopSubject3()
loopSubject4()
loopSubject5()
loopSubject6()
loopSubject7()
loopSubject8()



function loopSubject3() {
    let allSubjects=""
    for (let a = 0; a < subjects.length; a++) {
        allSubjects+=`<option value="${subjects[a]}">${subjects[a]}</option>`
        
    }
    selectSubjectThree.innerHTML=` <option value="">Add Subject</option> ${allSubjects}`
}

function loopSubject4() {
    let allSubjects=""
    for (let a = 0; a < subjects.length; a++) {
        allSubjects+=`<option value="${subjects[a]}">${subjects[a]}</option>`
        
    }
    selectSubjectFour.innerHTML=` <option value="">Add Subject</option> ${allSubjects}`
}

function loopSubject5() {
    let allSubjects=""
    for (let a = 0; a < subjects.length; a++) {
        allSubjects+=`<option value="${subjects[a]}">${subjects[a]}</option>`
        
    }
    selectSubjectFive.innerHTML=` <option value="">Add Subject</option> ${allSubjects}`
}

function loopSubject6() {
    let allSubjects=""
    for (let a = 0; a < subjects.length; a++) {
        allSubjects+=`<option value="${subjects[a]}">${subjects[a]}</option>`
        
    }
    selectSubjectSix.innerHTML=` <option value="">Add Subject</option> ${allSubjects}`
}

function loopSubject7() {
    let allSubjects=""
    for (let a = 0; a < subjects.length; a++) {
        allSubjects+=`<option value="${subjects[a]}">${subjects[a]}</option>`
        
    }
    selectSubjectSeven.innerHTML=` <option value="">Add Subject</option> ${allSubjects}`
}

function loopSubject8() {
    let allSubjects=""
    for (let a = 0; a < subjects.length; a++) {
        allSubjects+=`<option value="${subjects[a]}">${subjects[a]}</option>`
        
    }
    selectSubjectEight.innerHTML=` <option value="">Add Subject</option> ${allSubjects}`
   
}










function subjectScore() {
    


    let SubjectOneScore = document.getElementById("SubjectOneScore").value
    let SubjectTwoScore = document.getElementById("SubjectTwoScore").value
    let SubjectThreeScore = document.getElementById("SubjectThreeScore").value
    let SubjectFourScore = document.getElementById("SubjectFourScore").value
    let SubjectFiveScore = document.getElementById("SubjectFiveScore").value
    let SubjectSixScore = document.getElementById("SubjectSixScore").value
    let SubjectSevenScore = document.getElementById("SubjectSevenScore").value
    let SubjectEightScore = document.getElementById("SubjectEightScore").value



    // declaring holding variable
    let subjectTotalScore = 0
    let subjectAverageScore = 0
    let checkAverageScore = 0
    let sumPoint = 0
    
    // 

     one = SubjectOneScore
     let oneValue = one 
     console.log(oneValue);

     two = SubjectTwoScore 
     let twoValue = two
     console.log(twoValue);
     

     three = SubjectThreeScore 
     let threeValue = three 
     console.log(threeValue);

     four = SubjectFourScore 
     let fourValue = four
     console.log(fourValue); 

     five = SubjectFiveScore
     let fiveValue = five
     console.log(fiveValue);

     six = SubjectSixScore
     let sixValue = six
     console.log(sixValue);

     seven = SubjectSevenScore
     let sevenValue = seven
     console.log(sevenValue);

     eight = SubjectEightScore
     let eightValue = eight
     console.log(eightValue);

    subjectTotalScore = parseInt(oneValue)  + parseInt(twoValue) + parseInt(threeValue) + parseInt(fourValue) + parseInt(fiveValue) + parseInt(sixValue) + parseInt(sevenValue) + parseInt(eightValue)
    console.log(subjectTotalScore);

    averageScore = subjectTotalScore
    console.log(averageScore);

    subjectAverageScore = averageScore / 8
    console.log(subjectAverageScore);

    checkAverageScore = subjectAverageScore
    console.log(checkAverageScore);

    // 

    subjectPoint = 0

    if (checkAverageScore >= 90 &&  checkAverageScore <= 100) {
        subjectPoint = subjectPoint + 150
        console.log("You have 150 points");
    }
    else if (checkAverageScore >= 85 &&  checkAverageScore <= 89) {
        subjectPoint = subjectPoint + 140
        console.log("You have 140 points");
    }
    else if (checkAverageScore >= 75 &&  checkAverageScore <= 84) {
        subjectPoint = subjectPoint + 120
        console.log("You have 120 points");
    }
    else if (checkAverageScore >= 65 &&  checkAverageScore <= 74) {
        subjectPoint = subjectPoint + 100
        console.log("You have 100 points");
    }
    else if (checkAverageScore >= 60 &&  checkAverageScore <= 64) {
        subjectPoint = subjectPoint + 80
            console.log("You have 80 points");
    }
    else if (checkAverageScore >= 50 &&  checkAverageScore <= 59) {
        subjectPoint = subjectPoint + 50
            console.log("You have 50 points");
    }
    else if (checkAverageScore >= 40 &&  checkAverageScore <= 49) {
        subjectPoint = subjectPoint + 20
            console.log("You have 20 points");
    }

    
    
    console.log(subjectPoint);
    
    console.log('age'+agePoint);
    console.log('country'+countryPoint);
    console.log('subject'+subjectPoint);

    
    sumPoint = agePoint  + countryPoint  + subjectPoint 

    console.log(sumPoint);

    

    if (sumPoint >= 180) {
        summary.innerHTML=(" Summary; <br/> For agePoint, you scored " + agePoint + "  points. <br/> For continentPoint, you scored " + countryPoint + " points. <br/> For grade score your total score is " + subjectTotalScore + " and  average score is " + checkAverageScore + ". <br/> For grade point, you scored " + subjectPoint + " points. <br/> The sum of your Point is " + agePoint + " + " + countryPoint + " + " + subjectPoint + " = " + sumPoint + " points .")
        alert("You are Eligible")
        what()
    }
    else {
        summary.innerHTML= summary.innerHTML=(" Summary; <br/> For agePoint, you scored " + agePoint + "  points. <br/> For continentPoint, you scored " + countryPoint + " points. <br/> For grade score your total score is " + subjectTotalScore + " and  average score is " + checkAverageScore + ". <br/>For grade point, you scored " + subjectPoint + " points. <br/> The sum of your Points is " + agePoint + " + " + countryPoint + " + " + subjectPoint + " = " + sumPoint + " points .")
        alert("You are not eligible")
    }
    
    

}

function what() {

    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart 
    myChart = new Chart(ctx, {type: "bar",
    data: {
        labels:["Age", "Grade", "Continent"],
        datasets:[{
            label:["Points"],
            data: [agePoint, subjectPoint, countryPoint],
            backgroundColor:[
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",],

                borderColor:[          
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                ],
                borderWidth:1
        }]
    },
    
    options:{
        scales:{
            y:{
                beginAtZero:true
            }
        }
    } 
});

}
    


















// {
//     /* <script>
//   const labels = [ 'age','Continent', 'subject' ];

//   const data = {
//     "labels": labels,
//     "datasets": [{
//     "label": 'My First dataset',
//     "backgroundColor": 'rgb(255, 99, 132)',
//     "borderColor": 'rgb(255, 99, 132)',
//     "data": [agePoint, countryPoint, subjectPoint],
//     }]
//   };

//   const config = {
//     type: 'line',
//     data: data,
//     options: {}
//   };
// </script>


// <script>
//   const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//   );
// </script> */}





