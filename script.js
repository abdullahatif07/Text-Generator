const finalButton = document.getElementById('third')
const timesButton = document.getElementById('times')

let displayText = ""

timesButton.addEventListener('input', () => {
    displayText = ""

    const userText = document.getElementById('input-text')
    const times = document.getElementById('times')

    for(let i=0; i<times.value; i++){
        displayText += userText.value + " "
    }

    const displayBox = document.getElementById('third')

    const outputText = document.getElementById('output-text')
    outputText.innerText = `${displayText}`
})

const copyButton = document.getElementById('copy-button')
const toast = document.getElementById('toast')

copyButton.addEventListener('click', async () => {
    await navigator.clipboard.writeText(displayText)
    console.log("HI")
    toast.classList.add("show")

    setTimeout(() => {
        toast.classList.remove("show")
    }, 2000)
});
