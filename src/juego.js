const choises = ["rock", "paper", "scissors", "lizard", "spock"]
const rules = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors:["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"] 
}
const jugar= (userChoise) => 
{
    let number = Math.floor (Math.random() * choises.length)
    let computerChoise = choises [number]
    console.log ("persona " + userChoise);
    console.log ("maquina " + computerChoise);
    if (userChoise === computerChoise)
        return "empate";
    else if (rules[userChoise].includes(computerChoise))
        return "persona ha ganado";
    else 
        return "persona ha perdido";
}
console.log (jugar("spock"));