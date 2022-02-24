
const hoje = new Date();

const months = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
]

let mesAtual = document.querySelector("#mesAtual").innerHTML = months[hoje.getMonth()];


// document.querySelector(".month-title p").innerHTML = hoje.toDateString();
