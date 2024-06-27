const input1 = document.getElementById("input-box1")
const input2 = document.getElementById("input-box2")
const p = document.getElementById("output")

function Add() {
    const no1 = parseInt(input1.value)
    const no2 = parseInt(input2.value)
    p.innerText = `The Addition is ${no1 + no2}`
}

function Reset() {
    input1.value = ""
    input2.value =""
    p.innerText = ""
}