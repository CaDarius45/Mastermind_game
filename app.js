const difficult = 4
const codes = []
const tests = []
let win,turn,select 

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

 
//event listeners for the buttons
play.addEventListener('click', () =>{stratMenu.style.display = 'none'; startGame()})
howTo.addEventListener('click', () => howToScreen.style.display = 'block')
back.addEventListener('click', () =>howToScreen.style.display = 'none')
//reset.addEventListener('click',)
checkButton.addEventListener('click', checkCode)

//event listeners 

combos.forEach(element => {
    element.addEventListener('click', setCombo)
});

colors.forEach(element => {
    element.addEventListener('click', (event) => {select = event.target.id})
});


/*-------------------------------- Functions --------------------------------*/
function startGame(){
    for (let i = 0; i < difficult; i++) {
        codes.push(colors[Math.floor(Math.random()*colors.length)].id) 
    }
    select = ''
    win = false
    turn = 9
    console.log(codes)
} 

function setCombo(event){
    const id = event.target
    id.style.backgroundColor = select;
    tests.splice(id.id,0,select)
}

function checkCode() {
    const orders = codes.slice()
    let b = 0

    orders.forEach((x,y) => {
        if (x == tests[y]) { 
            checks[b].style.backgroundColor = 'red'
            orders.splice(y,1,true)
            b++
        }
    })
    if (orders.every(x => x == true)) {
        return win = true
    }else{
        for (let i = 0; i < codes.length; i++) {
            if(orders.find((e) => e == tests[i])){
                checks[b].style.backgroundColor = 'orange'
                b++
            }
        }
    } 

    checkVictory()
}

function checkVictory() {
    if (win) {
        
    }else{
        if (turn > 0) {
            nextCode()
        }
        
    }
}

function nextCode() {
    const current = getOne(".combination");
    const clone = current.cloneNode(true)

    current.parentNode.insertBefore(clone, current);

    //current.ch

    current.style.gridRow = --turn

    for (let i = 0; i < codes.length; i++) {
        current.children[i].id = current.children[i].id + turn
    }
    
    console.log(current.children[0].id)
}