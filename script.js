// function to calculate the first number and the second number
function getInputValue(){
    // Selecting the input element and get its value 
    var firstinputVal = document.getElementById("firstInput").value;
    var secondinputVal = document.getElementById("secondInput").value;

    // Displaying the value
    if(firstinputVal && secondinputVal >= 0){
        let results = Number(firstinputVal) + Number(secondinputVal);
        document.querySelector('#results').innerHTML = results;
        // alert(`the answer of ${firstinputVal} + ${secondinputVal} is ${results}`)
        // console.log('two numbers')
    }else{
        document.querySelector('#results').innerHTML = `I'm SOO Sorry, try Numbers This Time`;
    };
}

// --------------------------------------------------------------------------------------------------------------
// Light and dark Theme
let theme = document.querySelector(".container");
const switchTheme = document.getElementById("switch--theme");

switchTheme.addEventListener("click", (e) =>{
    theme.classList.toggle("light");
})
// ---------------------------------------------------------------------------------------------------------------
// Function to detect and say greetings to user's name
function getUserName(){
    var userName = document.getElementById("username").value;
    document.querySelector('.container').classList.add('fun');
    document.querySelector('.user--message').classList.add('fun');
    document.querySelector('.username--container').classList.toggle('hide');
    function greeting(name) {
        const date = new Date()
        const hours = date.getHours()
        
        let timeOfDay
        if(hours > 0 && hours < 12) {
            timeOfDay = "morning"
        } else if(hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else if(hours >= 17 && hours < 22) {
            timeOfDay = "evening"
        } else {
            timeOfDay = "night"
        }
        
        return `Good ${timeOfDay}, ${name} ! happy to see you here :)`
    }
    document.querySelector('.user--message').innerHTML = greeting(userName); 
}
// -------------------------------------------------------------------------------------------------------------
// if user taped any place in window the greeting message will disapper
window.addEventListener('click', function hideGreeting(){
    document.querySelector('.user--message').innerHTML = "";
},10);
// ----------------------
console.clear();