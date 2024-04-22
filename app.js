
let win,turn,select,difficult,codes,tests

//screeen html elements
const stratMenu = getOne('#startPage')
const howToScreen = getOne('#howToPage')
const gameScreen = getOne('#gamePage')
//button html elements
const play = getOne('#playButton')
const howTo = getOne('#howToButton')
const back = getOne('#backButton')
const reset = getOne('#resetButton')
const checkButton = getOne('#checkButton')
//color html elements
const colors = getAll('.color')
const combos = getAll('.combo')
const checks = getAll('.check')
 
//querySelector
function getOne(get) {return document.querySelector(get)}
function getAll(getAll) {return document.querySelectorAll(getAll)}
function getID(element){return document.getElementById(element)}

//event listeners for the buttons
play.addEventListener('click', () =>{stratMenu.style.display = 'none'; startGame()})
howTo.addEventListener('click', () => howToScreen.style.display = 'block')
back.addEventListener('click', () =>howToScreen.style.display = 'none')
reset.addEventListener('click',playAgain)
checkButton.addEventListener('click', checkCode)

combos.forEach(element => {
    element.addEventListener('click', setCombo)
});

colors.forEach(element => {
    element.addEventListener('click', (event) => {select = event.target.id})
});


/*-------------------------------- Functions --------------------------------*/
function startGame(){
    difficult = 4
    codes = []
    tests = []
    select = ''
    win = false
    turn = 8
    createCode()
    console.log(codes)
} 

function setCombo(event){
    const id = event.target
    id.style.backgroundColor = select;
    tests.splice(id.id,0,select)
}

function createCode() {
    for (let i = 0; i < difficult; i++) {
        codes.push(colors[Math.floor(Math.random()*colors.length)].id) 
    }
}

function checkCode() {

}

function checkVictory() {

}

function nextCode() {

}

function playAgain(){

}