console.log("Working")
// const div = document.getElementById('div')

// const button = document.getElementById('button')
// const secondBox = document.getElementById('second')

// let val
// button.addEventListener('click', () => {
//     const input = document.getElementById('input-text');
//     console.log(input.value);
//     val = input.value
//     let outputText = val

//     for(let i=0; i<5; i++){ 
//         outputText += val
//     }

//     secondBox.innerText = `${outputText}`
// })

// console.log(input.value);    
// console.log(div);

const finalButton = document.getElementById('third')

// const submitButton = document.getElementById('submit-button')

// submitButton.addEventListener('click', () => {
//     const userText = document.getElementById('input-text')
//     const times = document.getElementById('times')

//     let displayText = userText.value

//     for(let i=0; i<times.value; i++){
//         displayText += " " + userText.value
//     }

//     const displayBox = document.getElementById('third')
//     // displayBox.innerText = `${displayText}`
//     displayBox.innerHTML = `<p id="para">${displayText}</p>`
//     const para = document.getElementById('para')
//     para.style.backgroundColor = "rgb(50, 87, 84)"
//     // para.style.backgroundColor = "yellow"
//     para.style.padding = "10px"
//     para.style.borderRadius = "10px"
// })


const timesButton = document.getElementById('times')

timesButton.addEventListener('input', () => {
    const userText = document.getElementById('input-text')
    const times = document.getElementById('times')

    // let displayText = userText.value
    let displayText = ""

    for(let i=0; i<times.value; i++){
        displayText += " " + userText.value
    }

    const displayBox = document.getElementById('third')
    // displayBox.innerText = `${displayText}`
    displayBox.innerHTML = `<p id="para">${displayText}</p>`
    const para = document.getElementById('para')
    para.style.backgroundColor = "rgb(50, 87, 84)"
    // para.style.backgroundColor = "yellow"
    para.style.padding = "10px"
    para.style.borderRadius = "10px"
})

