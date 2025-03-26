const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices')
const choices = ['rock','paper','scissors']

const handleClick=(e)=>{
    getResults(e.target.innerHTML, choices[Math.floor(Math.random()*choices.length)])
}

choices.forEach(choice=>{
    const button = document.createElement('button')
    button.innerHTML = choice
    button.addEventListener('click',handleClick)
    choicesDisplay.appendChild(button)
})
const getResult = (userChoice, computerChoice) =>{
    switch (userChoice + computerChoice){
        case 'scissorspaper' :
        case 'rocksscissors' :
        case 'paperrock'     :
            resultDisplay.innerHTML = 'You chose' + userChoice + 'and the computer chose' + computerChoice + ', YOU WIN!'
            break
        case 'paperscissors' :
        case 'scissorsrock'  :
        case 'rockpaper'     :
            resultDisplay.innerHTML = 'YOU CHOSE' + ' and the ocmputer chose' + computerChoice + '.YOU LOSE!'
            break
        case 'scissorsscissors':
        case 'rockrock'        :
        case 'paperpaper'      :
            resultDisplay.innerHTML = 'YOU CHOSE' + userChoice + 'and the computer chose' + computerChoice +',ITS A DRAW'
    }
}
