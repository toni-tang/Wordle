const keyboardLetters = document.querySelectorAll('[letter]')
const enterButton = document.querySelector('[enter-button]')
const deleteButton = document.querySelector('[delete-button]')
const rowOne= document.querySelectorAll(`[name="row-1"]`)
const rowTwo= document.querySelectorAll(`[name="row-2"]`)
const rowThree= document.querySelectorAll(`[name="row-3"]`)
const rowFour= document.querySelectorAll(`[name="row-4"]`)
const rowFive= document.querySelectorAll(`[name="row-5"]`)

const rows = [rowOne, rowTwo, rowThree, rowFour, rowFive]
var rowNum = 0;
var pos = 0;

const ans = "LLLLL"

function keyboardType(row, pos, letter) {
    row[pos].value = letter
    if(row.length-1 < pos)
    {
        window['pos'] = row.length-1
    }
    else
    {
        window['pos']++
    }
}

function deleteLetter(row, pos) {
    row[pos-1].value = ''
    if(pos <= 0){
        
        window['pos'] = 0;
    }
    else
    {
        window['pos']-- 
    }
}

function checkAnswer(row, ans, rowNum, pos) {
    if(row[row.length-1].value == '') return;
    for(let i = 0; i < row.length; i++) 
    {
       if(row[i].value === ans.charAt(i)){
            row[i].value = 'P'
       }
    }

    window['rowNum']++
    window['pos'] = 0
}


keyboardLetters.forEach(button => {
    button.addEventListener('click', () => {
        keyboardType(rows[rowNum], pos, button.innerText)
    })
})

enterButton.addEventListener('click', button => {
    checkAnswer(rows[rowNum], ans, rowNum, pos)
})

deleteButton.addEventListener('click', button => {
    deleteLetter(rows[rowNum], pos)
})