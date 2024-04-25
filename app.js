//variables
let win,turn,select,difficult,codes,tests,orders,rowNum,checkCount
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
const rows = getOne('#testRows')
const current = getOne(".combination");
const colors = getAll('.color')
const combos = getAll('.combo')
const checks = getAll('.check')
const master = getOne('#master')
const masterCode = getAll('.masterCode')
const message = getOne('#resultMessage')
const wonSound = getOne('#won')
const lostSound = getOne('#lost')
const startTheme = getOne('#theme')
//querySelector
function getOne(get) {return document.querySelector(get)}
function getAll(getAll) {return document.querySelectorAll(getAll)}
function getID(element){return document.getElementById(element)}
//event listeners for the buttons
play.addEventListener('click', () =>{stratMenu.style.display = 'none'; startGame()})
howTo.addEventListener('click', () => {howToScreen.style.display = 'block',gameScreen.style.display = 'none'})
back.addEventListener('click', () =>{howToScreen.style.display = 'none',gameScreen.style.display = 'grid'})
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
    //startTheme.play()
    gameScreen.style.display = 'grid';
    difficult = 4
    codes = []
    tests = [null,null,null,null]
    select = ''
    win = false
    turn = 8
    rowNum = 1
    checkCount= 0
    createCode()
} 

function setCombo(event){
    const hold = event.target.id
    if (event.target.parentNode.id == `try${rowNum}`) {
        event.target.style.backgroundColor = select;
        tests.splice(hold,1,select)
    }
}

function createCode() {
    for (let i = 0; i < difficult; i++) {
        codes.push(colors[Math.floor(Math.random()*colors.length)].id) 
        masterCode[i].style.backgroundColor = codes[i]
    }
}

function checkCode() {
    if(tests.includes(null) && win == false) {message.textContent = 'fill the whole code n';return}
    checkResults()
    checkVictory()
    tests = [null,null,null,null]
}

function checkResults(){
    turn--
    orders = codes.slice()
    let base = 0

    orders.forEach((x,y) => {
        if (x == tests[y]) { 
            checks[checkCount + base].style.backgroundColor = 'black'
            orders.splice(y,1,true)
            base++
        }
    })

    if (orders.every(x => x == true)) {
        return win = true
    }else{
        for (let i = 0; i < codes.length; i++) {
            if(orders.find((e) => e == tests[i])){
                checks[checkCount + base].style.backgroundColor = 'grey'
                base++
            }
        }
    } 
    checkCount+=4
    rowNum++
}

function checkVictory() {
    if (win) {
        setWin()
        return  
    }else if(turn <= 0){
        setLose()
       return
    }
}

function playAgain(){
    combos.forEach((x,y) => {
        x.style.backgroundColor = 'white'
        checks[y].style.backgroundColor = 'white'
    });
    startGame()
}

function setWin()
{
    rowNum = 0
    message.textContent = 'You have won'
    wonSound.play()
}

function setLose(){
    rowNum = 0
    message.textContent = 'You have lost'
    lostSound.play()
}