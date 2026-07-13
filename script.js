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

finalButton.addEventListener('click', () => {
    const userText = document.getElementById('input-text')
    const times = document.getElementById('times')

    let displayText = userText.value

    for(let i=0; i<times.value; i++){
        displayText += " " + userText.value
    }

    const displayBox = document.getElementById('third')
    // displayBox.innerText = `${displayText}`
    displayBox.innerHTML = `<p id="para">${displayText}</p>`
    document.getElementById('para').style.backgroundColor = "blue"
})

