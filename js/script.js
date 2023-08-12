
// TypeJS Start =====================================
const typejsElm = document.querySelector(".text")
let text = typejsElm.innerText
let tally = 0
    typejsElm.innerText = ""
let textLength = text.length
let typing = () => {
    typejsElm.textContent += text[tally++]
    if (textLength < tally) {
        tally = 0
        typejsElm.innerText = ""
    }
}
setInterval (() => {
    typing()
}, 1000)
//===================================================

// Counter Start ====================================
const counterElm = Array.from(document.querySelectorAll(".counter"));
counterElm.map((item) => {
    let count = 0;
    let userValue = item.innerHTML;
    let timeOut = setInterval (() => {
        item.innerHTML = count++;
        if ( count > userValue) {
            clearInterval(timeOut);
        }
    }, item.dataset.time);
})
//===================================================







