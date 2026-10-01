const gameIcons = document.querySelectorAll('.game-icon');

gameIcons.forEach((icon, index) => {
    // Fade out when mouse enters
    icon.addEventListener('mouseenter', () => {
        icon.style.opacity = '0.5'; 
    });

    // Fade back in when mouse leaves
    icon.addEventListener('mouseleave', () => {
        icon.style.opacity = '1';
    });

    // Run game logic when clicked
    icon.addEventListener('click', () => {
        if (icon.alt) {
            playRound(icon.alt.toLowerCase());
        } else {
            const imgSrc = icon.src.toLowerCase();
            if (imgSrc.includes('rock')) playRound('rock');
            else if (imgSrc.includes('paper')) playRound('paper');
            else if (imgSrc.includes('scissor')) playRound('scissor');
        }
    });
});

let playerScore = 0;

// Main function that runs whenever the player makes a choice
function playRound(playerChoice) {
    const choices = ['rock', 'paper', 'scissor'];
    
    // Generates a random choice for the computer
    const randomIndex = Math.floor(Math.random() * choices.length); 
    const computerChoice = choices[randomIndex];
    
    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    // Game Logic: Compare choices to find the winner
    if (playerChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
        console.log("Player wins this round!");
        playerScore++; 
    } else {
        console.log("Computer wins this round!");
    }

    // Update the visual UI score box with the new total
    updatePlayerScore(playerScore);
}

// Function that changes the text inside the HTML score element
function updatePlayerScore(playerPoints) {
    document.getElementById('score').innerText = playerPoints;
}
const resetButton = document.querySelector('.reset');

// Fade out when mouse enters the reset button
resetButton.addEventListener('mouseenter', () => {
    resetButton.style.opacity = '0.5'; 
});

// Fade back in when mouse leaves the reset button
resetButton.addEventListener('mouseleave', () => {
    resetButton.style.opacity = '1';
});

// Reset functionality on click
resetButton.addEventListener('click', () => {
    playerScore = 0; 
    updatePlayerScore(playerScore); 
    console.log("Game has been reset.");
});
