numBtns = document.querySelectorAll("[data-number]");
operBtns = document.querySelectorAll("[data-operation]");
equBtn = document.querySelector("[data-equ]");
acBtn = document.querySelector("[data-ac]");
delBtn = document.querySelector("[data-del]");
displayBox = document.querySelector("[data-display]");


class calculator {
    constructor (displayText){
        this.displayText = displayText
        this.clear();
    }

    clear (){
        this.displayText = "";
    }

    del(){
        this.displayText = this.displayText.slice(0,-1)  ;
    }

    addNums(number) {
        this.displayText = this.displayText + number.toString(); 
    }

    addOperation(operation){
        this.displayText = this.displayText + operation.toString(); 
    }

    updateDisplay() {
        displayBox.innerText = this.displayText
    }

    eval_text(){
        this.displayText = eval(this.displayText).toString();
        displayBox.innerText = this.displayText;
        
    }

}

var calc = new calculator()


numBtns.forEach((btn) => {
    btn.addEventListener("click",() => {
        calc.addNums(btn.innerText);
        calc.updateDisplay();
        console.log(this.innerText);
    })
})

operBtns.forEach((Btn) => {
    Btn.addEventListener("click", () => {
        calc.addOperation(Btn.innerText);
        calc.updateDisplay();
        console.log(this.innerText);
    })
})

equBtn.addEventListener("click",() => {
    calc.eval_text();
    calc.updateDisplay();
    console.log(this.innerText)
})

delBtn.addEventListener("click",() => {
    calc.del();
    calc.updateDisplay();
    console.log(this.innerText)
});
acBtn.addEventListener("click",() => {
    calc.clear();
    calc.updateDisplay();
    console.log(this.innerText);
})