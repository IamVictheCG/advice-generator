const ptag = document.querySelector("p");
const headerText = document.querySelector(".advice header");
const diceShield = document.getElementById("dice");
const dice = document.querySelector(".dice");

console.log(dice);

diceShield.addEventListener("click", fetchData);

function fetchData() {
        // Start the animation
        dice.classList.add('dice_click');
        
        // Add an event listener to wait for the animation to finish
        dice.addEventListener('animationend', function animationEndHandler() {
        // Remove the event listener to avoid unnecessary calls
        dice.removeEventListener('animationend', animationEndHandler);
        
        // Now, initiate the fetch
        fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            headerText.innerText = `Advice #${data.slip.id}`;
            ptag.innerText = data.slip.advice;
            console.log(data.slip);
            // console.log(data.advice);
            dice.classList.remove('dice_click');
        })
        .catch(error => console.log(error));
    });
    
    
}
