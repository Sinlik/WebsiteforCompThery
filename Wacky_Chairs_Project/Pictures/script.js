let body = document.querySelector('body');
let footer = document.querySelector('div#footer');

let randNumGen = document.querySelector(".random-num-generator");
let numInfo = document.querySelector(".random-num-generator .number-info")
let randNum = document.querySelector(".rand-num");
let randNumBtn = document.querySelector(".random-num-generator .button");
let limit = document.querySelector(".random-num-generator .limit-num");
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

let pictures = document.querySelector(".main-pic img");

let imgQty = 10;
let imgArr = ['Pictures/rolling-chair-blue.jpg', 'Pictures/rolling-chair-fancy.jpg', 'Pictures/rolling-chair-white.jpg',
              'Pictures/rolling-chair-white2.jpg', 'Pictures/rolling-chair.jpg'];
let folderPath = "Pictures/";


let chart = document.querySelector(".chart");
let changedChartClass = false;
let teamsArr = [];
let teamNamesArr = ["evenNums", "oddNums"];
let teamsQty = 2;
let winningTeam;

let evenNums = 0;
let oddNums = 0;
let scorePoint = 1;

randNumBtn.addEventListener("click", () => {
    randNum.textContent = Math.round(Math.random() * 100 / (100/(limit.value - 1))) + 1;

    if (randNum.textContent % 2 === 0) {
        if (winningTeam == "evenNums") {
            evenNums += 0.50;
            if (chart.className == "chart odd") {
                chart.className += " even";
            }
            console.log("Winner: " + winningTeam);

        } else {
            evenNums += scorePoint;
        }
    } else {
        if (winningTeam == "oddNums") {
            oddNums += 0.50;
            if (chart.className == "chart even") {
                chart.className += " odd";
            }
            console.log("Winner: " + winningTeam);
        } else {
            oddNums += scorePoint;
        }
    }
    teamsArr[0] = evenNums;
    teamsArr[1] = oddNums;
    for (let _ = 0; _ < teamsQty - 1; _++) {
        if (teamsArr[_] > teamsArr[_ + 1]) {
            winningTeam = teamNamesArr[_];
        } else {
            winningTeam = teamNamesArr[_ + 1];
        }
    }
    numInfo.textContent = "Even numbers: " + evenNums + "\nOdd numbers: " + oddNums + "\nWinning Team: " + winningTeam;

})

open.addEventListener('click', () => 
    container.classList.add('show-nav')
)

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
})

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})

let run = true;
let acum = 5000

lightBox(imgArr)
for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        while (run == true) {
            lightBox(imgArr)
            console.log(`run ${run}`);
        }
    }, acum * i)
}
setTimeout(function () {
    alert("Buy now or get off")
}, acum * 5)

function lightBox (arr, i) {
    run = false;
    for (let i = 0; i < imgArr.length; i++) {
        setTimeout(function () {
            pictures.src = arr[i]
            if (i == arr.length - 1) {
                run = true;
            }  
        }, i * 1000);
    }
}
